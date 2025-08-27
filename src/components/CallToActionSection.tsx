"use client"

import { Button } from '@/components/ui/button'

export default function CallToActionSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8447804399', '_blank')
  }

  const handleScheduleClick = () => {
    // Scroll to the interactive form
    const formSection = document.querySelector('#interactive-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Fallback to WhatsApp if form not found
      handleWhatsAppClick()
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¡Da el paso hacia una piel más joven hoy!
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed opacity-90">
            En Renove Spa Clínica estamos listos para brindarte una transformación segura y de alto nivel. 
            💖 Recupera la confianza en tu piel con HIFU, el tratamiento no invasivo líder en rejuvenecimiento facial. 
            ¡Agenda tu cita ahora y luce la mejor versión de ti!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              onClick={handleScheduleClick}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              📅 Agenda tu Sesión de HIFU
            </Button>
            
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              📱 Contáctanos por WhatsApp
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Phone */}
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="font-semibold mb-2">Teléfono/WhatsApp</h3>
            <p className="opacity-90">844 780 4399</p>
            <p className="text-sm opacity-75">Línea directa</p>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-semibold mb-2">Ubicación</h3>
            <p className="opacity-90 text-sm">José María La Fragua 2395</p>
            <p className="opacity-90 text-sm">Col. Guanajuato, Saltillo, Coah.</p>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🕒</span>
            </div>
            <h3 className="font-semibold mb-2">Horarios</h3>
            <p className="opacity-90">Lunes a Viernes</p>
            <p className="opacity-90">9:00 - 19:00 hrs</p>
          </div>

          {/* Consultation */}
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-semibold mb-2">Consulta</h3>
            <p className="opacity-90">Evaluación Gratuita</p>
            <p className="opacity-90">Sin compromiso</p>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-4">Síguenos en redes sociales</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook"
                >
                  <span className="text-xl">📘</span>
                </a>
                <a 
                  href="#" 
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a 
                  href="#" 
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200"
                  aria-label="TikTok"
                >
                  <span className="text-xl">🎵</span>
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-2">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">✅ FDA Aprobado</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">🏥 Clínica Certificada</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">🔒 100% Seguro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-12 pt-8 border-t border-white border-opacity-20">
          <p className="text-lg font-medium mb-2">
            Tu belleza y bienestar están en manos expertas
          </p>
          <p className="opacity-90">
            ¡Te esperamos en Renove Spa Clínica para iniciar tu cambio!
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 animate-pulse"
          aria-label="Contactar por WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </button>
      </div>
    </section>
  )
}
