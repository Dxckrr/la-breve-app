import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src="/img_test.jpg"
            alt="La Breve Logo"
            width={40}
            height={40}
            className="h-6 w-6"
          />
          <span className="ml-2 text-xl font-bold">La Breve</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Inicio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/productos">
            Productos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-amber-50 to-yellow-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">La Breve</h1>
                  <p className="text-xl text-muted-foreground">
                    Bebida lista para tomar, perfecta para cualquier momento del día
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/productos">
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Ver Productos <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#about">
                    <Button variant="outline">Conoce más</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/img_test.jpg"
                  alt="La Breve Producto"
                  width={550}
                  height={450}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm">Características</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Por qué elegir La Breve?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Descubre lo que hace a nuestras bebidas tan especiales
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-amber-600"
                  >
                    <path d="M12 2v1" />
                    <path d="M12 21v1" />
                    <path d="m4.93 4.93-.7.7" />
                    <path d="m19.07 19.07-.7.7" />
                    <path d="M2 12h1" />
                    <path d="M21 12h1" />
                    <path d="m4.93 19.07-.7-.7" />
                    <path d="m19.07 4.93-.7-.7" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Ingredientes Naturales</h3>
                  <p className="text-muted-foreground">
                    Elaborado con ingredientes 100% naturales, sin conservantes artificiales.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-amber-600"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Listo para Tomar</h3>
                  <p className="text-muted-foreground">
                    Disfruta en cualquier momento y lugar, sin necesidad de preparación.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-amber-600"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Sabor Único</h3>
                  <p className="text-muted-foreground">
                    Una experiencia de sabor inigualable que te conquistará desde el primer sorbo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Lo que dicen nuestros clientes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Descubre por qué La Breve es la bebida favorita de muchos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-amber-100 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-600"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-bold">María G.</p>
                      <p className="text-sm text-muted-foreground">Cliente frecuente</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "La Breve es mi compañero perfecto para el día a día. Su sabor es increíble y me encanta que sea tan
                    conveniente."
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-amber-100 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-600"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-bold">Carlos R.</p>
                      <p className="text-sm text-muted-foreground">Entusiasta del fitness</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Perfecto para después de entrenar. Refrescante, natural y con el balance perfecto de sabor."
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-amber-100 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-amber-600"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-bold">Laura M.</p>
                      <p className="text-sm text-muted-foreground">Chef profesional</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Como profesional de la gastronomía, aprecio la calidad de los ingredientes. La Breve es simplemente
                    excepcional."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestra Historia</h2>
                  <p className="text-muted-foreground md:text-xl">
                    La Breve nació de la pasión por crear una bebida que combinara sabor, calidad y conveniencia.
                  </p>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fundada en 2020, La Breve surgió como respuesta a la necesidad de una bebida lista para tomar que no
                    comprometiera la calidad ni el sabor. Nuestro equipo de expertos trabajó incansablemente para
                    desarrollar una fórmula perfecta que utilizara solo ingredientes naturales de la más alta calidad.
                  </p>
                  <p>
                    Hoy, La Breve se ha convertido en la opción preferida para quienes buscan una bebida refrescante,
                    saludable y deliciosa que se adapte a su estilo de vida activo.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipo de La Breve"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-600" id="cta">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
                  ¿Listo para probar La Breve?
                </h2>
                <p className="max-w-[600px] text-white md:text-xl">
                  Descubre nuestra variedad de productos y encuentra tu favorito
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/productos">
                  <Button className="bg-white text-amber-600 hover:bg-gray-100">
                    Ver Productos <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contáctanos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  ¿Tienes alguna pregunta? Estamos aquí para ayudarte
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Información de Contacto</h3>
                  <p className="text-muted-foreground">Estamos disponibles de lunes a viernes de 9:00 a 18:00</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-amber-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <p className="text-muted-foreground">+52 123 456 7890</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-amber-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <p className="text-muted-foreground">info@labreve.com</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-amber-600"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="text-muted-foreground">Av. Principal 123, Ciudad de México</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Envíanos un mensaje</h3>
                  <p className="text-muted-foreground">Completa el formulario y te responderemos a la brevedad</p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                      >
                        Nombre
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="name"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="email"
                        placeholder="tu@email.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Tu mensaje"
                    ></textarea>
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700 w-full">Enviar mensaje</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 La Breve. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
