import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Qtech - Servicio técnico de aparatología estética</title>
        <meta
          name="description"
          content="Somos un servicio técnico dedicado al mantenimiento y puesta a punto de aparatología estética multimarca, estamos en barcelona y damos soporte a nivel nacional"
        />
        <meta
          name="keywords"
          content="Reparación de criolipólisis, reparación de picosecond, reparación de láser, reparación de radiofrecuencia y cavitación"
        />
        <meta name="author" content="Fidel Verduguez" />
        <meta name="copyright" content="Todos los derechos reservados 2025" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
