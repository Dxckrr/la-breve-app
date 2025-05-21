"use client";

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
import { productos } from "@/lib/data";
import { useState } from "react";

export default function ProductoPage({ params }: { params: { id: string } }) {
  const producto = productos.find((p) => p.id === params.id);
  const [count, setCount] = useState(1);
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
              className="flex items-center text-sm text-la-breve-navy hover:text-foreground">
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
                <p className="text-2xl font-bold text-la-breve-orange mt-2">
                  {producto.precio}
                </p>
              </div>
              <p className="text-la-breve-navy">{producto.descripcion}</p>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-medium mr-2">Cantidad:</span>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => setCount((prev) => Math.max(prev - 1, 1))}>
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Reducir cantidad</span>
                    </Button>
                    <span className="w-8 text-center">{count}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => setCount((prev) => prev + 1)}>
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Aumentar cantidad</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Presentación:</span>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-la-breve-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-[200px]">
                    {producto.presentaciones.map((presentacion, i) => (
                      <option key={i} value={presentacion}>
                        {presentacion}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="bg-la-breve-orange hover:bg-amber-700 flex-1 disabled cursor-not-allowed">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Añadir al carrito
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 disabled cursor-not-allowed">
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
                  <p className="text-la-breve-navy">
                    {producto.descripcionLarga}
                  </p>
                </TabsContent>
                <TabsContent value="ingredientes" className="pt-4">
                  <p className="text-la-breve-navy">{producto.ingredientes}</p>
                </TabsContent>
                <TabsContent value="beneficios" className="pt-4">
                  <p className="text-la-breve-navy">{producto.beneficios}</p>
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
                      <p className="text-sm text-la-breve-navy">
                        {prod.descripcion}
                      </p>
                      <p className="text-lg font-bold mt-2 text-la-breve-orange">
                        {prod.precio}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <Link href={`/products/${prod.id}`}>
                        <Button variant="outline">Ver detalles</Button>
                      </Link>
                      <Button className="bg-la-breve-orange hover:bg-amber-700 disabled cursor-not-allowed">
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
