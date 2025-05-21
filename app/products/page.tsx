"use client";

import { useState, useMemo } from "react";
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
import Footer from "@/components/shared/Footer";
import { productos } from "@/lib/data";

export default function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoria, setCategoria] = useState("todos");

  const filteredProducts = useMemo(() => {
    return productos.filter((producto) => {
      const matchesCategoria =
        categoria === "todos" || producto.categoria === categoria;
      const matchesSearch = producto.nombre
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategoria && matchesSearch;
    });
  }, [searchTerm, categoria]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 pt-10">
        <section className="w-full py-12 sm:py-16 bg-gradient-to-r from-la-breve-peach via-la-breve-blush to-la-breve-coral">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-start text-3xl font-bold tracking-tighter sm:text-5xl">
                  Nuestros Productos
                </h1>
                <p className="max-w-[900px] text-la-breve-navy md:text-xl">
                  Descubre nuestra variedad de bebidas listas para tomar
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16">
          <div className="container min-w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <Input
                  className="w-full md:w-[300px]"
                  placeholder="Buscar productos..."
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Tabs
                defaultValue="todos"
                value={categoria}
                onValueChange={setCategoria}
                className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  <TabsTrigger value="clasicos">Clásicos</TabsTrigger>
                  <TabsTrigger value="frutales">Frutales</TabsTrigger>
                  <TabsTrigger value="especial">Especial</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="grid gap-4 xl:gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mt-8">
              {filteredProducts.map((producto) => (
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
                  <CardContent className="p-3">
                    <CardTitle className="text-lg mb-1">
                      {producto.nombre}
                    </CardTitle>
                    <p className="text-xs text-la-breve-navy">
                      {producto.descripcion}
                    </p>
                    <p className="text-base font-bold mt-1 text-la-breve-orange">
                      ${producto.precio}
                    </p>
                  </CardContent>
                  <CardFooter className="p-3 pt-0 flex justify-between">
                    <Link href={`/products/${producto.id}`}>
                      <Button
                        variant="outline"
                        className="h-8 px-2 text-sm cursor-pointer">
                        Ver
                      </Button>
                    </Link>
                    <Button className="bg-la-breve-orange hover:bg-amber-700 h-8 px-2 text-sm disabled: cursor-not-allowed">
                      Comprar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
