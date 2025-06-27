import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

const attorneys = [
  {
    name: "Margaret Sterling",
    title: "Socia Directora",
    specialties: ["Derecho Corporativo", "Fusiones y Adquisiciones"],
    experience: "25+ años",
    education: "Escuela de Derecho de Harvard, J.D.",
    bio: "Margaret fundó Sterling & Asociados con la visión de brindar asesoría legal excepcional a empresas e individuos. Se especializa en transacciones corporativas complejas y ha guiado exitosamente a numerosas empresas a través de fusiones, adquisiciones y ofertas públicas.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Chen",
    title: "Socio Senior",
    specialties: ["Litigio Civil", "Derecho Laboral"],
    experience: "20+ años",
    education: "Escuela de Derecho de Stanford, J.D.",
    bio: "David es un litigante experimentado con amplia experiencia en disputas comerciales complejas y asuntos de derecho laboral. Ha representado exitosamente a clientes en tribunales estatales y federales, logrando resultados favorables en litigios de alto riesgo.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Rodríguez",
    title: "Socia",
    specialties: ["Derecho Familiar", "Planificación Patrimonial"],
    experience: "15+ años",
    education: "Escuela de Derecho de UCLA, J.D.",
    bio: "Sarah aporta compasión y experiencia a asuntos familiares sensibles. Ayuda a clientes a navegar divorcios, disputas de custodia y planificación patrimonial con un enfoque en proteger sus intereses y lograr resoluciones amigables cuando es posible.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Thompson",
    title: "Asociado",
    specialties: ["Bienes Raíces", "Derecho Contractual"],
    experience: "8+ años",
    education: "Centro de Derecho de Georgetown, J.D.",
    bio: "Michael se enfoca en transacciones de bienes raíces y derecho contractual, ayudando a clientes con adquisiciones de propiedades, arrendamientos comerciales y negociaciones de contratos. Su atención al detalle y enfoque minucioso aseguran que los intereses de los clientes estén protegidos.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Acerca de Sterling & Asociados</h1>
            <p className="text-xl text-slate-200">
              Un legado de excelencia legal construido sobre confianza, integridad y compromiso inquebrantable con
              nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Firm History */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Fundada en 1998 por Margaret Sterling, Sterling & Asociados comenzó como una práctica pequeña con una
                  gran visión: brindar asesoría legal excepcional que pone a los clientes primero. Lo que comenzó como
                  una práctica individual ha crecido hasta convertirse en uno de los bufetes de abogados más respetados
                  de la región.
                </p>
                <p>
                  Durante los últimos 25 años, hemos construido nuestra reputación sobre una base de excelencia legal,
                  práctica ética y genuino cuidado por el éxito de nuestros clientes. Nuestro equipo se ha expandido
                  para incluir algunos de los abogados más talentosos en sus respectivos campos, cada uno compartiendo
                  nuestro compromiso de lograr los mejores resultados posibles.
                </p>
                <p>
                  Hoy, Sterling & Asociados sirve a individuos, familias y empresas en múltiples áreas de práctica,
                  manteniendo el toque personal y atención al detalle que ha sido nuestro sello distintivo desde el
                  primer día.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Edificio de oficinas de Sterling & Asociados"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Misión y Valores</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card dark:bg-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  Brindar asesoría legal excepcional y representación mientras construimos relaciones duraderas basadas
                  en confianza, integridad y resultados. Estamos comprometidos a entender las necesidades únicas de
                  nuestros clientes y entregar soluciones personalizadas que excedan las expectativas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card dark:bg-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Integridad</h3>
                <p className="text-muted-foreground">
                  Conducimos nuestra práctica con los más altos estándares éticos, manteniendo transparencia y
                  honestidad en todas nuestras relaciones con clientes y procedimientos legales.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card dark:bg-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Excelencia</h3>
                <p className="text-muted-foreground">
                  Nos esforzamos por la excelencia en cada caso, mejorando continuamente nuestras habilidades y
                  manteniéndonos actualizados con desarrollos legales para brindar la mejor representación posible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conoce Nuestro Equipo</h2>
            <p className="text-xl text-muted-foreground">
              Abogados experimentados dedicados a lograr los mejores resultados para nuestros clientes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {attorneys.map((attorney, index) => (
              <Card key={index} className="overflow-hidden bg-card dark:bg-card">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={attorney.image || "/placeholder.svg"}
                        alt={attorney.name}
                        width={300}
                        height={300}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold mb-1">{attorney.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{attorney.title}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {attorney.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <p>
                          <strong>Experiencia:</strong> {attorney.experience}
                        </p>
                        <p>
                          <strong>Educación:</strong> {attorney.education}
                        </p>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm">{attorney.bio}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Mail className="h-4 w-4 mr-1" />
                          Email
                        </Button>
                        <Button size="sm" variant="outline">
                          <Linkedin className="h-4 w-4 mr-1" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Trabajar con Nosotros?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contacta a nuestro equipo experimentado hoy para discutir tus necesidades legales.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Programar una Consulta</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
