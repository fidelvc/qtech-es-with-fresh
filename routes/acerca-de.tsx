import { Handlers } from "$fresh/server.ts";

// Un Handler se define manualmente. 
// Se debe exportar nombrandolá con el prefijo "handler"

// Un handler tiene dos formas. 1, como función para captar todos los métodos http o como objeto plano, donde cada propiedad es una función nombrada por el método http que toma

// -> Aquí un ejemplo de un custom GET handler que renderiza la página component y entonces añade un custom header a la respuesta antes de retornarla.

export const handler: Handlers = {
    async GET(_req, ctx){
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Acerca de nosotros");
        return resp;
    }
}

export default function AcercaDe(){
    return (
        <main>
            <h1>Acerca de</h1>
            <p>This is the about page</p>
        </main>
    )
}