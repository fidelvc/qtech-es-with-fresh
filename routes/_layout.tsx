import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="page grid-page">
      <main class="content">
        <Component />
      </main>
      <nav class="navbar">
        <a href="/">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/productos">Productos</a>
        <a href="/acerca-de">Acerca de</a>
        <a href="/contactar">Contactar</a>
      </nav>

    </div>
  );
}
