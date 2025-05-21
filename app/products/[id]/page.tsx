import { CardFooter } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Minus, Plus, ShoppingCart, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

// Datos de ejemplo para los productos
const productos = [
  {
    id: "1",
    nombre: "La Breve Original",
    descripcion: "Nuestra bebida clásica con el sabor que nos hizo famosos.",
    descripcionLarga:
      "La Breve Original es nuestra bebida insignia, la que inició todo. Con una mezcla perfectamente equilibrada de ingredientes naturales, ofrece un sabor único que ha conquistado a miles de personas. Cada sorbo es una experiencia que combina tradición e innovación, creando una sensación refrescante y satisfactoria que te acompañará en cualquier momento del día. Elaborada con los más altos estándares de calidad, La Breve Original es más que una bebida, es una experiencia que debes probar.",
    precio: "$35",
    categoria: "clasicos",
    imagen: "/placeholder.svg?height=600&width=600",
    imagenes: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    ingredientes:
      "Agua purificada, extractos naturales, azúcar de caña, ácido cítrico, saborizantes naturales.",
    beneficios:
      "Refrescante, energizante natural, sin conservantes artificiales.",
    presentaciones: [
      "Botella 355ml",
      "Botella 500ml",
      "Lata 355ml",
      "Six-pack",
    ],
  },
  {
    id: "2",
    nombre: "La Breve Cítrico",
    descripcion: "Una explosión de sabores cítricos para refrescarte.",
    descripcionLarga:
      "La Breve Cítrico es una explosión de frescura en cada sorbo. Combinando los mejores cítricos como limón, naranja y toronja, hemos creado una bebida que despierta tus sentidos y te transporta a un oasis de frescura. Perfecta para los días calurosos o cuando necesitas ese toque revitalizante. Su sabor equilibrado entre dulce y ácido crea una experiencia única que te hará volver por más. Como todos nuestros productos, La Breve Cítrico está elaborada con ingredientes naturales de la más alta calidad.",
    precio: "$38",
    categoria: "frutales",
    imagen: "/placeholder.svg?height=600&width=600",
    imagenes: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    ingredientes:
      "Agua purificada, jugo de limón, jugo de naranja, jugo de toronja, azúcar de caña, ácido cítrico.",
    beneficios: "Rico en vitamina C, antioxidantes naturales, refrescante.",
    presentaciones: [
      "Botella 355ml",
      "Botella 500ml",
      "Lata 355ml",
      "Six-pack",
    ],
  },
  {
    id: "3",
    nombre: "La Breve Tropical",
    descripcion: "Combinación perfecta de frutas tropicales.",
    descripcionLarga:
      "La Breve Tropical te transporta a un paraíso de sabores exóticos. Hemos seleccionado las mejores frutas tropicales como piña, mango y maracuyá para crear una bebida que evoca vacaciones en la playa y días soleados. Cada sorbo es un viaje sensorial a través de sabores dulces y refrescantes que se complementan a la perfección. La Breve Tropical es ideal para quienes buscan una experiencia diferente, una aventura de sabor que rompe con lo cotidiano mientras mantiene la calidad y naturalidad que caracteriza a todos nuestros productos.",
    precio: "$38",
    categoria: "frutales",
    imagen: "/placeholder.svg?height=600&width=600",
    imagenes: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    ingredientes:
      "Agua purificada, jugo de piña, puré de mango, jugo de maracuyá, azúcar de caña, ácido cítrico.",
    beneficios: "Fuente de vitaminas, refrescante, energizante natural.",
    presentaciones: [
      "Botella 355ml",
      "Botella 500ml",
      "Lata 355ml",
      "Six-pack",
    ],
  },
  {
    id: "4",
    nombre: "La Breve Intenso",
    descripcion: "Para los que buscan un sabor más fuerte y pronunciado.",
    descripcionLarga:
      "La Breve Intenso está diseñada para aquellos que buscan una experiencia más robusta y pronunciada. Con un perfil de sabor más concentrado y una fórmula especial que potencia cada ingrediente, esta bebida ofrece una intensidad que despierta los sentidos desde el primer sorbo. Perfecta para los paladares exigentes que aprecian los sabores profundos y complejos. A pesar de su intensidad, mantiene el equilibrio perfecto que caracteriza a La Breve, ofreciendo una experiencia satisfactoria que perdura. Como parte de nuestra línea premium, La Breve Intenso representa la excelencia en cada detalle.",
    precio: "$40",
    categoria: "premium",
    imagen: "/placeholder.svg?height=600&width=600",
    imagenes: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    ingredientes:
      "Agua purificada, extractos concentrados, especias seleccionadas, azúcar moreno, ácido cítrico.",
    beneficios:
      "Experiencia sensorial completa, energizante natural, sin conservantes artificiales.",
    presentaciones: [
      "Botella 355ml",
      "Botella 500ml",
      "Edición especial 750ml",
    ],
  },
  {
    id: "5",
    nombre: "La Breve Light",
    descripcion: "El mismo gran sabor con menos calorías.",
    descripcionLarga:
      "La Breve Light ofrece toda la experiencia de sabor que caracteriza a nuestros productos, pero con un perfil bajo en calorías. Hemos trabajado arduamente para desarrollar una fórmula que mantenga el delicioso sabor que nos distingue mientras reducimos significativamente el contenido calórico. Utilizando edulcorantes naturales y una combinación especial de ingredientes, La Breve Light es la opción perfecta para quienes cuidan su ingesta calórica sin querer sacrificar el placer de disfrutar una bebida excepcional. Refrescante, satisfactoria y con todo el carácter de La Breve.",
    precio: "$38",
    categoria: "clasicos",
    imagen: "/placeholder.svg?height=600&width=600",
    imagenes: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    ingredientes:
      "Agua purificada, extractos naturales, stevia, eritritol, ácido cítrico, saborizantes naturales.",
    beneficios: "Bajo en calorías, sin azúcares añadidos, refrescante.",
    presentaciones: [
      "Botella 355ml",
      "Botella 500ml",
      "Lata 355ml",
      "Six-pack",
    ],
  },
  {
    id: "6",
    nombre: "La Breve Frutos Rojos",
    descripcion: "Deliciosa mezcla de fresas, frambuesas y moras.",
    descripcionLarga:
      "La Breve Frutos Rojos es una sinfonía de sabores que combina la dulzura de las fresas, la intensidad de las frambuesas y el carácter de las moras. Esta mezcla cuidadosamente equilibrada crea una experiencia frutal rica y satisfactoria que deleita el paladar. Cada sorbo revela capas de sabor que se complementan perfectamente, ofreciendo una complejidad que los amantes de las frutas apreciarán. Además de su delicioso sabor, La Breve Frutos Rojos aporta los beneficios naturales de estas frutas, conocidas por sus propiedades antioxidantes. Una opción refrescante y nutritiva para cualquier momento del día.",
    precio: "$42",
    categoria: "frutales",
    imagen: "/placeholder.svg?height=600&width=600",
    imagenes: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    ingredientes:
      "Agua purificada, puré de fresa, puré de frambuesa, puré de mora, azúcar de caña, ácido cítrico.",
    beneficios: "Rico en antioxidantes, vitaminas naturales, refrescante.",
    presentaciones: [
      "Botella 355ml",
      "Botella 500ml",
      "Edición especial 750ml",
    ],
  },
  {
    id: "7",
    nombre: "La Breve Edición Especial",
    descripcion: "Nuestra edición limitada con ingredientes exclusivos.",
    descripcionLarga:
      "La Breve Edición Especial representa la cumbre de nuestra artesanía en la creación de bebidas excepcionales. Elaborada en lotes limitados con ingredientes exclusivos seleccionados de las mejores fuentes alrededor del mundo, esta bebida ofrece una experiencia verdaderamente única. Su fórmula cambia estacionalmente, aprovechando los mejores ingredientes de temporada y permitiéndonos explorar nuevas combinaciones de sabores. Cada edición es irrepetible, lo que la convierte en una experiencia coleccionable para los entusiastas de La Breve. Presentada en un envase distintivo, La Breve Edición Especial es perfecta como regalo o para celebrar ocasiones especiales.",
    precio: "$45",
    categoria: "premium",
    imagen: "/placeholder.svg?height=600&width=600",
    imagenes: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    ingredientes:
      "Agua de manantial, ingredientes de temporada seleccionados, especias exóticas, edulcorantes naturales.",
    beneficios:
      "Experiencia sensorial única, ingredientes exclusivos, edición limitada.",
    presentaciones: [
      "Botella premium 500ml",
      "Caja regalo 2 botellas",
      "Edición coleccionista 750ml",
    ],
  },
  {
    id: "8",
    nombre: "La Breve Menta",
    descripcion: "Refrescante sabor a menta para los días calurosos.",
    descripcionLarga:
      "La Breve Menta ofrece una experiencia refrescante incomparable. Utilizando extracto de menta de la más alta calidad, hemos creado una bebida que proporciona una sensación de frescura inmediata y duradera. Su sabor limpio y vigorizante es perfecto para combatir el calor o para disfrutar después de una comida. La sutileza de la menta se equilibra perfectamente con la dulzura natural, creando una armonía que no abruma sino que invita a seguir disfrutando. La Breve Menta es especialmente popular entre quienes buscan una alternativa refrescante a las bebidas frutales tradicionales, ofreciendo una experiencia diferente pero igualmente satisfactoria.",
    precio: "$38",
    categoria: "clasicos",
    imagen: "/placeholder.svg?height=600&width=600",
    imagenes: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    ingredientes:
      "Agua purificada, extracto de menta, azúcar de caña, ácido cítrico, saborizantes naturales.",
    beneficios:
      "Extremadamente refrescante, digestivo natural, sensación de frescura duradera.",
    presentaciones: [
      "Botella 355ml",
      "Botella 500ml",
      "Lata 355ml",
      "Six-pack",
    ],
  },
];

export default function ProductoPage({ params }: { params: { id: string } }) {
  const producto = productos.find((p) => p.id === params.id);

  if (!producto) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 pt-10">
        <div className="container px-4 py-6 md:py-12">
          <div className="flex items-center mb-6">
            <Link
              href="/products"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a productos
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  width={600}
                  height={600}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {producto.imagenes.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-lg border cursor-pointer">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${producto.nombre} - Vista ${i + 1}`}
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{producto.nombre}</h1>
                <p className="text-2xl font-bold text-amber-600 mt-2">
                  {producto.precio}
                </p>
              </div>
              <p className="text-muted-foreground">{producto.descripcion}</p>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-medium mr-2">Cantidad:</span>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none">
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Reducir cantidad</span>
                    </Button>
                    <span className="w-8 text-center">1</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Aumentar cantidad</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Presentación:</span>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-[200px]">
                    {producto.presentaciones.map((presentacion, i) => (
                      <option key={i} value={presentacion}>
                        {presentacion}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="bg-amber-600 hover:bg-amber-700 flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Añadir al carrito
                </Button>
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Añadir a favoritos
                </Button>
              </div>
              <Separator />
              <Tabs defaultValue="descripcion">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                  <TabsTrigger value="ingredientes">Ingredientes</TabsTrigger>
                  <TabsTrigger value="beneficios">Beneficios</TabsTrigger>
                </TabsList>
                <TabsContent value="descripcion" className="pt-4">
                  <p className="text-muted-foreground">
                    {producto.descripcionLarga}
                  </p>
                </TabsContent>
                <TabsContent value="ingredientes" className="pt-4">
                  <p className="text-muted-foreground">
                    {producto.ingredientes}
                  </p>
                </TabsContent>
                <TabsContent value="beneficios" className="pt-4">
                  <p className="text-muted-foreground">{producto.beneficios}</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <section className="mt-12 md:mt-24">
            <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {productos
                .filter(
                  (p) =>
                    p.id !== producto.id && p.categoria === producto.categoria
                )
                .slice(0, 4)
                .map((prod) => (
                  <Card key={prod.id} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <Image
                        src={prod.imagen || "/placeholder.svg"}
                        alt={prod.nombre}
                        width={300}
                        height={300}
                        className="w-full h-[200px] object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-xl mb-2">
                        {prod.nombre}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {prod.descripcion}
                      </p>
                      <p className="text-lg font-bold mt-2 text-amber-600">
                        {prod.precio}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <Link href={`/productos/${prod.id}`}>
                        <Button variant="outline">Ver detalles</Button>
                      </Link>
                      <Button className="bg-amber-600 hover:bg-amber-700">
                        Comprar
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
