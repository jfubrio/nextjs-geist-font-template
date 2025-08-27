"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type ConcernType = 'wrinkles' | 'sagging' | 'double-chin' | 'facial-contour' | 'all'

interface FormData {
  name: string
  phone: string
  email: string
  comments: string
}

export default function InteractiveForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedConcern, setSelectedConcern] = useState<ConcernType | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    comments: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const concerns = [
    {
      id: 'wrinkles' as ConcernType,
      title: 'Arrugas o líneas de expresión',
      icon: '📝',
      feedback: '✅ HIFU reduce las arrugas estimulando colágeno nuevo que rellena y suaviza líneas de expresión. Tu piel lucirá más lisa y rejuvenecida.'
    },
    {
      id: 'sagging' as ConcernType,
      title: 'Flacidez (piel poco firme)',
      icon: '⬆️',
      feedback: '✅ HIFU tensa la piel flácida, logrando un efecto lifting en mejillas y contornos. Recuperarás firmeza sin cirugía.'
    },
    {
      id: 'double-chin' as ConcernType,
      title: 'Papada o cuello poco definido',
      icon: '👤',
      feedback: '✅ HIFU define la línea del cuello y mandíbula, ayudando a eliminar la papada y tensar la piel debajo del mentón.'
    },
    {
      id: 'facial-contour' as ConcernType,
      title: 'Contorno facial (mandíbula/pómulos)',
      icon: '💎',
      feedback: '✅ HIFU esculpe el rostro, realzando pómulos y definiendo la mandíbula para un perfil más juvenil.'
    },
    {
      id: 'all' as ConcernType,
      title: 'Todas las anteriores',
      icon: '🌟',
      feedback: '✅ HIFU actúa integralmente, reduciendo arrugas, tensando la piel flácida y definiendo el óvalo facial para un rejuvenecimiento completo.'
    }
  ]

  const handleConcernSelect = (concernId: ConcernType) => {
    setSelectedConcern(concernId)
    setTimeout(() => {
      setCurrentStep(2)
    }, 1500)
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Ingresa un teléfono válido (10 dígitos)'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitted(true)
      // Here you would typically send the data to your backend
      console.log('Form submitted:', { selectedConcern, ...formData })
    }
  }

  const handleWhatsAppClick = () => {
    const message = selectedConcern 
      ? `Hola, me interesa el tratamiento HIFU para ${concerns.find(c => c.id === selectedConcern)?.title.toLowerCase()}. Me gustaría agendar una consulta.`
      : 'Hola, me interesa el tratamiento HIFU. Me gustaría agendar una consulta.'
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/8447804399?text=${encodedMessage}`, '_blank')
  }

  const resetForm = () => {
    setCurrentStep(1)
    setSelectedConcern(null)
    setFormData({ name: '', phone: '', email: '', comments: '' })
    setIsSubmitted(false)
    setErrors({})
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Gracias por tu interés!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hemos recibido tu información. Nuestro equipo se comunicará contigo 
              en las próximas horas para agendar tu consulta gratuita.
            </p>
            <div className="space-y-4">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full mr-4"
              >
                📱 Contactar por WhatsApp
              </Button>
              <Button
                onClick={resetForm}
                variant="outline"
                className="px-8 py-3 rounded-full"
              >
                Realizar otra consulta
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="interactive-form" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Es HIFU adecuado para ti?
          </h2>
          <p className="text-xl text-gray-600">
            Descúbrelo con un breve formulario
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-100 px-8 py-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Paso {currentStep} de 2</span>
              <div className="flex space-x-2">
                <div className={`w-3 h-3 rounded-full ${currentStep >= 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                <div className={`w-3 h-3 rounded-full ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  ¿Qué te gustaría mejorar de tu rostro?
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {concerns.map((concern) => (
                    <button
                      key={concern.id}
                      onClick={() => handleConcernSelect(concern.id)}
                      className="text-left p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                          {concern.icon}
                        </span>
                        <span className="font-medium text-gray-900">
                          {concern.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedConcern && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 animate-fade-in">
                    <p className="text-green-800 font-medium">
                      {concerns.find(c => c.id === selectedConcern)?.feedback}
                    </p>
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                  ¿Quieres saber más?
                </h3>
                <p className="text-gray-600 mb-8 text-center">
                  Déjanos tus datos para una consulta gratuita con nuestros expertos
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={errors.name ? 'border-red-500' : ''}
                        placeholder="Tu nombre completo"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <Label htmlFor="phone">Teléfono/WhatsApp *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={errors.phone ? 'border-red-500' : ''}
                        placeholder="844 123 4567"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-red-500' : ''}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="comments">Comentario o duda específica (opcional)</Label>
                    <Textarea
                      id="comments"
                      value={formData.comments}
                      onChange={(e) => handleInputChange('comments', e.target.value)}
                      placeholder="Cuéntanos más sobre tus expectativas o dudas..."
                      rows={3}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex-1"
                    >
                      Enviar mis datos y recibir información
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex-1"
                    >
                      🟢 Prefiero hablar por WhatsApp
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Nos comunicaremos contigo para brindarte más detalles y agendar una valoración sin costo. 
                    Tus datos están seguros con nosotros.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
