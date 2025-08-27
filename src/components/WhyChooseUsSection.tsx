export default function WhyChooseUsSection() {
  const teamImage = "https://placehold.co/600x400?text=Fotografía+luminosa+de+una+doctora+especialista+en+medicina+estética+en+cabina+moderna"

  const differentiators = [
    {
      title: "Especialistas Médicos Certificados",
      description: "En Renove Spa Clínica, tu tratamiento HIFU estará a cargo de médicos estéticos certificados y capacitados, con amplia experiencia en procedimientos de rejuvenecimiento no invasivo. Nuestro equipo se asegura de evaluar tu caso de forma personalizada y acompañarte en cada paso, brindándote seguridad y confianza."
    },
    {
      title: "Tecnología de Última Generación",
      description: "Somos una clínica pionera en la región de Saltillo en adoptar tecnologías avanzadas. Trabajamos con equipos HIFU de calidad médica (tecnología HIFU V-Max de última generación) que garantizan precisión y efectividad en cada sesión. Esto se traduce en mejores resultados en menos sesiones."
    },
    {
      title: "Experiencia Premium y Seguridad",
      description: "Nuestras instalaciones están diseñadas para ofrecerte comodidad y privacidad. Seguimos protocolos médicos estrictos de higiene y seguridad. Tu bienestar es nuestra prioridad: realizamos una evaluación inicial gratuita y un seguimiento posterior para asegurarnos de que estés obteniendo los resultados deseados."
    },
    {
      title: "Clientes Satisfechos",
      description: "La satisfacción de nuestros pacientes nos avala. Más de 500 tratamientos HIFU realizados exitosamente en Renove. Nuestro compromiso es ayudarte a lograr tus objetivos estéticos de manera segura, eficaz y con resultados naturales."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Excelencia en Manos Expertas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu experiencia en Renove Spa Clínica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Team Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <img
                src={teamImage}
                alt="Fotografía luminosa de una doctora en bata blanca sonriendo en un ambiente clínico moderno"
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Tratamientos</div>
              </div>
            </div>
          </div>

          {/* Differentiators */}
          <div className="space-y-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Lo que dicen nuestros pacientes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-semibold">
                  MG
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">María G.</div>
                  <div className="text-sm text-gray-600">52 años</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Después de HIFU en Renove Spa, mi piel luce más firme y joven. 
                ¡Me veo al espejo y me encanta el cambio sin haber pasado por quirófano!"
              </p>
              <div className="flex mt-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-semibold">
                  LC
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Laura C.</div>
                  <div className="text-sm text-gray-600">48 años</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "El tratamiento fue muy cómodo y los resultados increíbles. 
                Mi cuello y mandíbula se ven mucho más definidos. ¡Totalmente recomendado!"
              </p>
              <div className="flex mt-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Certificaciones y Reconocimientos
          </h3>
          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl mb-2">🏥</div>
              <div className="text-sm font-medium">Clínica Certificada</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl mb-2">✅</div>
              <div className="text-sm font-medium">FDA Aprobado</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl mb-2">🎓</div>
              <div className="text-sm font-medium">Médicos Certificados</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm font-medium">Protocolos de Seguridad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
