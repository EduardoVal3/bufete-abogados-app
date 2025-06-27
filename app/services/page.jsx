import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Scale, Heart, Home, Users, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Building,
    title: "Derecho Corporativo y Empresarial",
    description:
      "Servicios legales integrales para empresas de todos los tamaños, desde startups hasta corporaciones establecidas.",
    services: [
      "Formación y Estructura Empresarial",
      "Redacción y Revisión de Contratos",
      "Fusiones y Adquisiciones",
      "Gobierno Corporativo",
      "Derecho de Valores",
      "Protección de Propiedad Intelectual",
    ],
    featured: true,
  },
  {
    icon: Scale,
    title: "Litigio Civil",
    description:
      "Abogados litigantes experimentados representando clientes en disputas comerciales y civiles complejas.",
    services: [
      "Litigio Comercial",
      "Reclamos por Lesiones Personales",
      "Disputas Laborales",
      "Disputas Contractuales",
      "Reclamos de Seguros",
      "Apelaciones",
    ],
    featured: true,
  },
  {
    icon: Heart,
    title: "Derecho Familiar",
    description:
      "Orientación legal compasiva a través de los asuntos personales y familiares más desafiantes de la vida.",
    services: [
      "Divorcio y Separación",
      "Custodia y Manutención de Menores",
      "Pensión Alimenticia",
      "División de Bienes",
      "Servicios de Adopción",
      "Relaciones Domésticas",
    ],
    featured: false,
  },
  {
    icon: Home,
    title: "Derecho Inmobiliario",
    description:
      "Servicios legales inmobiliarios completos para transacciones de propiedades residenciales y comerciales.",
    services: [
      "Compra y Venta de Propiedades",
      "Arrendamiento Comercial",
      "Examen de Títulos",
      "Zonificación y Uso de Suelo",
      "Contratos de Construcción",
      "Disputas de Propiedades",
    ],
    featured: false,
  },
  {
    icon: Users,
    title: "Derecho Laboral",
    description:
      "Protegiendo los derechos tanto de empleadores como empleados en asuntos legales relacionados con el trabajo.",
    services: [
      "Contratos de Empleo",
      "Discriminación en el Lugar de Trabajo",
      "Despido Injustificado",
      "Disputas de Salarios y Horarios",
      "Acuerdos de No Competencia",
      "Desarrollo de Políticas de RRHH",
    ],
    featured: false,
  },
  {
    icon: FileText,
    title: "Planificación Patrimonial",
    description:
      "Servicios integrales de planificación patrimonial para proteger sus activos y proveer para sus seres queridos.",
    services: [
      "Testamentos y Fideicomisos",
      "Administración de Patrimonios",
      "Procedimientos de Sucesión",
      "Planificación Fiscal",
      "Protección de Activos",
      "Derecho de Ancianos",
    ],
    featured: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios Legales</h1>
            <p className="text-xl text-slate-200">
              Soluciones legales integrales adaptadas para satisfacer sus necesidades específicas en múltiples áreas de
              práctica.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className={`relative bg-card dark:bg-card ${service.featured ? "ring-2 ring-blue-500 dark:ring-blue-400" : ""}`}
                >
                  {service.featured && (
                    <Badge className="absolute -top-3 left-6 bg-blue-600 dark:bg-blue-500">Práctica Destacada</Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">Los Servicios Incluyen:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <Button variant="outline" className="w-full bg-transparent">
                          <Link href="/contact" className="flex items-center gap-2">
                            Saber Más
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso</h2>
            <p className="text-xl text-muted-foreground">
              Cómo trabajamos con usted para lograr los mejores resultados posibles.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consulta Inicial</h3>
              <p className="text-muted-foreground">
                Escuchamos sus preocupaciones y evaluamos sus necesidades legales durante una consulta confidencial.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo de Estrategia</h3>
              <p className="text-muted-foreground">
                Desarrollamos una estrategia legal personalizada adaptada a su situación específica y objetivos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementación</h3>
              <p className="text-muted-foreground">
                Ejecutamos la estrategia con precisión, manteniéndolo informado durante todo el proceso.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Resolución</h3>
              <p className="text-muted-foreground">
                Trabajamos diligentemente para lograr el mejor resultado posible para su caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesita Asistencia Legal?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctanos hoy para discutir cómo podemos ayudar con su asunto legal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Programar Consulta</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/about">Conoce Nuestro Equipo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
