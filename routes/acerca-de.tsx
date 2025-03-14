import { Handlers } from "$fresh/server.ts";

// Un Handler se define manualmente.
// Se debe exportar nombrandolá con el prefijo "handler"

// Un handler tiene dos formas. 1, como función para captar todos los métodos http o como objeto plano, donde cada propiedad es una función nombrada por el método http que toma

// -> Aquí un ejemplo de un custom GET handler que renderiza la página component y entonces añade un custom header a la respuesta antes de retornarla.

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Acerca de nosotros");
    return resp;
  },
};

export default function AcercaDe() {
  return (
    <div className="page">
      <section>
        <article>
          <header>
            <h1>Acerca de</h1>
            <p>Este es un servicio técnico enfocado en el mantenimiento de equipos para el sector de la estética profesional. Estamos activos de forma autónoma desde el 2016 y damos soporte a multitud de tecnologías y marcas</p>
          </header>
          <hr />
          
            <dl>
              <dt>Lista de servicios</dt>
              <dd>Revisión de equipos y partes de máquina</dd>
              <dd>Mantenimientos preventivos y correctivos</dd>
              <dd>Adaptaciones</dd>
            </dl>
          <details>
            <summary>Resumen del contenido</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus amet, excepturi soluta at in sequi provident sapiente sunt suscipit, alias officiis? Dolorum saepe asperiores dolorem impedit, mollitia aperiam earum?</p>
            <h2>Un valle en Barcelona</h2>
            <figure>
            <img src="https://picsum.photos/500/300" alt="" />
            <figcaption>Información del logo de fresh</figcaption>
          </figure>
          </details>
          
        </article>
        <article>
          <header>
            <h2>Un valle en Barcelona</h2>
            <figure>
            <img src="https://picsum.photos/500/300" alt="" />
            <figcaption>Información del logo de fresh</figcaption>
          </figure>
          </header>
        </article>
      </section>
    </div>
  );
}
