"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Gracias por su mensaje. Nos pondremos en contacto con usted dentro de 24 horas.")
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl text-slate-200">
              ¿Listo para discutir su asunto legal? Estamos aquí para ayudar con una consulta inicial gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-card dark:bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                  <p className="text-muted-foreground">
                    Complete el formulario a continuación y nos pondremos en contacto con usted dentro de 24 horas.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellido *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Número de Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="practiceArea">Área de Práctica</Label>
                      <Select onValueChange={(value) => handleInputChange("practiceArea", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un área de práctica" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Derecho Corporativo y Empresarial</SelectItem>
                          <SelectItem value="litigation">Litigio Civil</SelectItem>
                          <SelectItem value="family">Derecho Familiar</SelectItem>
                          <SelectItem value="real-estate">Derecho Inmobiliario</SelectItem>
                          <SelectItem value="employment">Derecho Laboral</SelectItem>
                          <SelectItem value="estate">Planificación Patrimonial</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Por favor describa su asunto legal..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card dark:bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Ponte en Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Dirección de la Oficina</h3>
                      <p className="text-muted-foreground">
                        123 Plaza Legal, Suite 500
                        <br />
                        Distrito Centro
                        <br />
                        Ciudad, Estado 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Línea de Emergencia 24/7 Disponible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                      <p className="text-muted-foreground">info@sterlinglaw.com</p>
                      <p className="text-sm text-muted-foreground">Respondemos dentro de 24 horas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Horario de Oficina</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                        <p>Sábado: 9:00 AM - 2:00 PM</p>
                        <p>Domingo: Solo con Cita Previa</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="bg-card dark:bg-card">
                <CardHeader>
                  <CardTitle>Nuestra Ubicación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-200 dark:bg-slate-700 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Mapa Interactivo</p>
                      <p className="text-sm">123 Plaza Legal, Suite 500</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" asChild>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        Obtener Direcciones
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 dark:bg-red-950 border-l-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">Asistencia Legal de Emergencia</h2>
            <p className="text-red-700 dark:text-red-300 mb-6">
              Si tiene un asunto legal urgente que requiere atención inmediata, por favor llame a nuestra línea de
              emergencia.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800">
              <Phone className="h-5 w-5 mr-2" />
              Llamar Línea de Emergencia: (555) 999-0000
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
