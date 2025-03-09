import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="layout">
      <nav class="navbar">
        <a href="/">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/productos">Productos</a>
        <a href="/acerca-de">Acerca de</a>
        <a href="/contactar">Contactar</a>
      </nav>
      <main class="content">
        <Component />
      </main>
      <footer class="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}
