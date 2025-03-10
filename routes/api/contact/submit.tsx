import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    // Process the data (e.g., save to a database or send an email)
    console.log({ name, email, message });

    // Alert the user that the form was submitted
    // Return a success response
    return new Response("Form submitted successfully!", {
      status: 200,
    });
  },
};
