import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Entendiendo Sus Derechos en Disputas Laborales",
    excerpt:
      "Una guía completa sobre los derechos de los empleados y qué hacer cuando se enfrenta a discriminación laboral o despido injustificado.",
    author: "David Chen",
    date: "2024-01-15",
    category: "Derecho Laboral",
    readTime: "5 min de lectura",
    featured: true,
  },
  {
    id: 2,
    title: "Fundamentos de Planificación Patrimonial: Protegiendo el Futuro de Su Familia",
    excerpt:
      "Consideraciones clave para crear un plan patrimonial integral que proteja sus activos y provea para sus seres queridos.",
    author: "Sarah Rodríguez",
    date: "2024-01-10",
    category: "Planificación Patrimonial",
    readTime: "7 min de lectura",
    featured: false,
  },
  {
    id: 3,
    title: "Navegando Contratos Empresariales: Errores Comunes a Evitar",
    excerpt:
      "Consejos esenciales para revisar y negociar contratos empresariales para proteger los intereses de su empresa.",
    author: "Margaret Sterling",
    date: "2024-01-05",
    category: "Derecho Corporativo",
    readTime: "6 min de lectura",
    featured: true,
  },
  {
    id: 4,
    title: "Mediación de Divorcio vs. Litigio: ¿Cuál Camino es Correcto para Usted?",
    excerpt:
      "Explorando las diferencias entre mediación y litigio en procedimientos de divorcio y cómo elegir el mejor enfoque.",
    author: "Sarah Rodríguez",
    date: "2023-12-28",
    category: "Derecho Familiar",
    readTime: "8 min de lectura",
    featured: false,
  },
  {
    id: 5,
    title: "Diligencia Debida en Bienes Raíces: Lo Que Todo Comprador Debe Saber",
    excerpt:
      "Una lista detallada para realizar la diligencia debida adecuada al comprar propiedades comerciales o residenciales.",
    author: "Michael Thompson",
    date: "2023-12-20",
    category: "Bienes Raíces",
    readTime: "10 min de lectura",
    featured: false,
  },
  {
    id: 6,
    title: "Cambios Recientes en Requisitos de Cumplimiento Corporativo",
    excerpt:
      "Una visión general de los nuevos requisitos regulatorios que afectan a las empresas y cómo asegurar que su empresa permanezca en cumplimiento.",
    author: "Margaret Sterling",
    date: "2023-12-15",
    category: "Derecho Corporativo",
    readTime: "6 min de lectura",
    featured: false,
  },
]

const categories = [
  "Todos",
  "Derecho Corporativo",
  "Derecho Laboral",
  "Derecho Familiar",
  "Bienes Raíces",
  "Planificación Patrimonial",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Perspectivas Legales y Noticias</h1>
            <p className="text-xl text-slate-200">
              Manténgase informado con los últimos desarrollos legales, perspectivas y actualizaciones de nuestros
              abogados experimentados.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Artículos Destacados</h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-card dark:bg-card">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{post.category}</Badge>
                    <Badge variant="secondary">Destacado</Badge>
                  </div>
                  <CardTitle className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("es-ES")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                      Leer Más
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Artículos Recientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow bg-card dark:bg-card">
                <CardHeader>
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("es-ES")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                      Leer Más
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Manténgase Actualizado</h2>
          <p className="text-xl mb-8 text-blue-100">
            Suscríbase a nuestro boletín para las últimas perspectivas legales y actualizaciones del bufete.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Ingrese su correo electrónico"
              className="flex-1 px-4 py-2 rounded-md text-slate-900"
            />
            <Button variant="secondary">Suscribirse</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
