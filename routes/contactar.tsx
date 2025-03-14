import Form from "../islands/Form.tsx";

export default function FormPage() {
  return (
    <div class="page">
      <section class="contant-info">
        <article>
          <header>
            <h1>Medios de contacto</h1>
          </header>
        </article>
      </section>
      <section class="contact-form">
        <article>
          <header>
            <h2>Formulario de contacto</h2>
            <Form></Form>
          </header>
        </article>
      </section>
    </div>
  );
}
