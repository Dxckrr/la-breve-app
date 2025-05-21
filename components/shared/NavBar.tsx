import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white px-4 lg:px-12 h-14 flex items-center shadow-md">
      <Link className="flex items-center justify-center" href="/">
        <Image
          src="/la-breve.png"
          alt="La Breve Logo"
          width={40}
          height={40}
          className="h-6 w-6 lg:h-10 lg:w-10"
        />
        <span className="ml-2 text-xl font-bold">La Breve</span>
      </Link>
      <nav className="ml-auto flex gap-x-4 lg:gap-x-12">
        <Link
          className="text-sm lg:text-base font-medium hover:underline underline-offset-4"
          href="/">
          Inicio
        </Link>
        <Link
          className="text-sm lg:text-base font-medium hover:underline underline-offset-4"
          href="/products">
          Productos
        </Link>
        <Link
          className="text-sm lg:text-base font-medium hover:underline underline-offset-4"
          href="/about-us">
          Nosotros
        </Link>
      </nav>
    </header>
  );
}
