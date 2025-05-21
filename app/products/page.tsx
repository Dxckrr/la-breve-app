import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavBar from "@/components/shared/NavBar";

// Datos de ejemplo para los productos
const productos = [
  {
    id: "1",
    nombre: "La Breve Original",
    descripcion: "Nuestra bebida clásica con el sabor que nos hizo famosos.",
    precio: "$35",
    categoria: "clasicos",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    nombre: "La Breve Cítrico",
    descripcion: "Una explosión de sabores cítricos para refrescarte.",
    precio: "$38",
    categoria: "frutales",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    nombre: "La Breve Tropical",
    descripcion: "Combinación perfecta de frutas tropicales.",
    precio: "$38",
    categoria: "frutales",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    nombre: "La Breve Intenso",
    descripcion: "Para los que buscan un sabor más fuerte y pronunciado.",
    precio: "$40",
    categoria: "premium",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    nombre: "La Breve Light",
    descripcion: "El mismo gran sabor con menos calorías.",
    precio: "$38",
    categoria: "clasicos",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    nombre: "La Breve Frutos Rojos",
    descripcion: "Deliciosa mezcla de fresas, frambuesas y moras.",
    precio: "$42",
    categoria: "frutales",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "7",
    nombre: "La Breve Edición Especial",
    descripcion: "Nuestra edición limitada con ingredientes exclusivos.",
    precio: "$45",
    categoria: "premium",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "8",
    nombre: "La Breve Menta",
    descripcion: "Refrescante sabor a menta para los días calurosos.",
    precio: "$38",
    categoria: "clasicos",
    imagen: "/placeholder.svg?height=300&width=300",
  },
];

export default function ProductosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Nuestros Productos
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Descubre nuestra variedad de bebidas listas para tomar
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <Input
                  className="w-full md:w-[300px]"
                  placeholder="Buscar productos..."
                  type="search"
                />
              </div>
              <Tabs defaultValue="todos" className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  <TabsTrigger value="clasicos">Clásicos</TabsTrigger>
                  <TabsTrigger value="frutales">Frutales</TabsTrigger>
                  <TabsTrigger value="premium">Premium</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
              {productos.map((producto) => (
                <Card key={producto.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src={producto.imagen || "/placeholder.svg"}
                      alt={producto.nombre}
                      width={300}
                      height={300}
                      className="w-full h-[200px] object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl mb-2">
                      {producto.nombre}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {producto.descripcion}
                    </p>
                    <p className="text-lg font-bold mt-2 text-amber-600">
                      {producto.precio}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Link href={`/products/${producto.id}`}>
                      <Button variant="outline">Ver detalles</Button>
                    </Link>
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Comprar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2023 La Breve. Todos los derechos reservados.
        </p>
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
  );
}
