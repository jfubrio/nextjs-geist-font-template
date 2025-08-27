export default function HowItWorksSection() {
  const howItWorksImage = "https://placehold.co/800x600?text=Ilustración+médica+de+sección+transversal+de+la+piel+con+ondas+ultrasónicas+focalizadas"

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Tecnología de Vanguardia: ¿Cómo funciona el HIFU?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              El HIFU emplea ondas de ultrasonido de alta intensidad focalizada que atraviesan 
              la superficie de la piel sin dañarla, alcanzando capas profundas donde se encuentran 
              el músculo y las fibras de colágeno.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              La energía ultrasónica se concentra en puntos precisos, creando un efecto térmico 
              controlado que contrae las fibras existentes y estimula la generación de nuevo colágeno. 
              Este proceso regenera la estructura interna de la piel, resultando en una piel más 
              firme y levantada de manera natural.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              A diferencia de láser u otras tecnologías, el ultrasonido focalizado llega a 
              profundidades incomparables por métodos no invasivos tradicionales, actuando 
              exactamente en la capa que un cirujano tensaría en un lifting facial, pero sin cirugía.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                El resultado: rejuvenecimiento desde adentro hacia afuera
              </h3>
              <p className="text-blue-800">
                HIFU es la única tecnología no invasiva que puede tratar las mismas capas 
                profundas que se abordan en cirugía estética, ofreciendo resultados comparables 
                sin los riesgos asociados.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
              <img
                src={howItWorksImage}
                alt="Ilustración médica simplificada de la piel, mostrando la epidermis, capas profundas y la aplicación de ondas de ultrasonido focalizadas que generan nuevas fibras de colágeno"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Proceso del Tratamiento HIFU
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Evaluación y Preparación
              </h4>
              <p className="text-gray-600">
                Consulta inicial gratuita donde evaluamos tu piel y diseñamos 
                un plan de tratamiento personalizado.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Aplicación Precisa
              </h4>
              <p className="text-gray-600">
                El dispositivo HIFU emite ondas ultrasónicas focalizadas que 
                penetran hasta la capa SMAS sin dañar la superficie.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Regeneración Natural
              </h4>
              <p className="text-gray-600">
                Tu cuerpo produce nuevo colágeno durante 2-3 meses, 
                creando resultados progresivos y naturales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
