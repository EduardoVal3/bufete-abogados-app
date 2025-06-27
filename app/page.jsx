import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, Award, Clock, ArrowRight, Phone, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-950 dark:to-slate-800 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Asesoría Legal de Confianza para Sus Asuntos Más Importantes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Con más de 25 años de experiencia, Sterling & Asociados brinda representación legal excepcional en
              múltiples áreas de práctica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Link href="/contact" className="flex items-center gap-2">
                  Programar Consulta
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="/about">Conócenos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
              <div className="text-muted-foreground">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
              <div className="text-muted-foreground">Casos Ganados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
              <div className="text-muted-foreground">Tasa de Éxito</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
              <div className="text-muted-foreground">Soporte al Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Qué Elegir Sterling & Asociados</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestro compromiso con la excelencia y enfoque centrado en el cliente nos distingue en la industria legal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-card dark:bg-card">
              <CardContent className="pt-6">
                <Scale className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Asesoría Legal Experta</h3>
                <p className="text-muted-foreground">Décadas de experiencia en múltiples áreas de práctica</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-card dark:bg-card">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enfoque Centrado en el Cliente</h3>
                <p className="text-muted-foreground">Atención personalizada y estrategias legales adaptadas</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-card dark:bg-card">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Resultados Comprobados</h3>
                <p className="text-muted-foreground">Historial de resultados exitosos para nuestros clientes</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-card dark:bg-card">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Servicio Responsivo</h3>
                <p className="text-muted-foreground">Tiempos de respuesta rápidos y comunicación clara</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Áreas de Práctica</h2>
            <p className="text-xl text-muted-foreground">Servicios legales integrales en múltiples especialidades</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow bg-card dark:bg-card">
              <CardContent className="p-6">
                <Badge className="mb-3">Derecho Corporativo</Badge>
                <h3 className="text-xl font-semibold mb-2">Empresarial y Corporativo</h3>
                <p className="text-muted-foreground mb-4">
                  Negociación de contratos, fusiones y adquisiciones, gobierno corporativo
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Saber Más →
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow bg-card dark:bg-card">
              <CardContent className="p-6">
                <Badge className="mb-3">Litigio</Badge>
                <h3 className="text-xl font-semibold mb-2">Litigio Civil</h3>
                <p className="text-muted-foreground mb-4">
                  Disputas comerciales complejas, lesiones personales, derecho laboral
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Saber Más →
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow bg-card dark:bg-card">
              <CardContent className="p-6">
                <Badge className="mb-3">Derecho Familiar</Badge>
                <h3 className="text-xl font-semibold mb-2">Familia y Divorcio</h3>
                <p className="text-muted-foreground mb-4">
                  Procedimientos de divorcio, custodia de menores, división de bienes
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Saber Más →
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/services">Ver Todos los Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Comenzar?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctanos hoy para una consulta confidencial sobre tu asunto legal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5" />
              <span>info@sterlinglaw.com</span>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Programar Consulta</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
