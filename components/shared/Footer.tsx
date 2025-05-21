import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-la-breve-navy">
        © 2025 La Breve. Todos los derechos reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <span className="text-xs underline-offset-4">Términos de servicio</span>
        <span className="text-xs underline-offset-4">
          Política de privacidad
        </span>
        <Link
          className="text-xs hover:underline underline-offset-4"
          target="_blank"
          href="https://www.upb.edu.co/es/home">
          Universidad Pontificia Bolivariana Seccional Bucaramanga
        </Link>
      </nav>
    </footer>
  );
}
