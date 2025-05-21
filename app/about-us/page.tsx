import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 pt-10">
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Nuestra Historia
                  </h2>
                  <p className="text-black md:text-xl">
                    La Breve nació de la pasión por crear una bebida que
                    combinara sabor, calidad y conveniencia.
                  </p>
                </div>
                <div className="space-y-4 text-la-breve-navy">
                  <div>
                    <p>
                      Fundada en 2025,{" "}
                      <span className="text-foreground font-semibold">
                        La Breve
                      </span>{" "}
                      surgió como respuesta a la necesidad de una bebida lista
                      para tomar que no comprometiera la calidad ni el sabor.
                      Nuestro equipo de expertos está conformado por:
                    </p>
                    <ul className="list-disc list-inside mt-2 pl-2">
                      <li>
                        <span className="font-medium text-foreground">
                          Maria Jose Ortiz Alarcón
                        </span>{" "}
                        – CEO, Administradora de Negocios Internacionales
                      </li>
                      <li>
                        <span className="font-medium text-foreground">
                          Juan David Patiño Parra
                        </span>{" "}
                        – CEO, Ingeniero de Sistemas e Informática
                      </li>
                      <li>
                        <span className="font-medium text-foreground">
                          Santos Enmanuel Manosalva Aceros
                        </span>{" "}
                        – CEO, Ingeniero de Sistemas e Informática
                      </li>
                    </ul>
                  </div>

                  <p>
                    Hoy,{" "}
                    <span className="text-foreground font-semibold">
                      La Breve
                    </span>{" "}
                    se ha convertido en la opción preferida para quienes buscan
                    una bebida refrescante, saludable y deliciosa que se adapte
                    a su estilo de vida activo.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/team-la-breve.png"
                  alt="Equipo de La Breve"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover shadow-la-breve-coral shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="w-full text-pretty mx-auto container text-black/80 px-4 md:px-6">
          <p>
            Este proyecto fue desarrollado bajo un contexto academico para la
            clase de Emprendimiento y responsabilidad social en la Universidad
            Pontificia Bolivariana Seccional Bucaramanga durante el semestre
            2025-01 y nada de lo que se observa en esta pagina web es real.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
