"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Scale, Menu, Phone } from "lucide-react"
import ThemeToggle from "./theme-toggle"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/about" },
  { name: "Servicios", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-foreground">Sterling & Asociados</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Consulta Gratuita</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Alternar menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6 px-6">
                  <Link href="/" className="flex items-center space-x-2">
                    <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-lg font-bold">Sterling & Asociados</span>
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="pt-6 border-t">
                    <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                      <Phone className="h-4 w-4" />
                      <span>(555) 123-4567</span>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Consulta Gratuita
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
