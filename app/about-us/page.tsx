import NavBar from "@/components/shared/NavBar";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <section className="w-full py-12 md:py-24 lg:py-32" id="about">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Nuestra Historia
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  La Breve nació de la pasión por crear una bebida que combinara
                  sabor, calidad y conveniencia.
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fundada en 2020, La Breve surgió como respuesta a la necesidad
                  de una bebida lista para tomar que no comprometiera la calidad
                  ni el sabor. Nuestro equipo de expertos trabajó
                  incansablemente para desarrollar una fórmula perfecta que
                  utilizara solo ingredientes naturales de la más alta calidad.
                </p>
                <p>
                  Hoy, La Breve se ha convertido en la opción preferida para
                  quienes buscan una bebida refrescante, saludable y deliciosa
                  que se adapte a su estilo de vida activo.
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
    </div>
  );
}
