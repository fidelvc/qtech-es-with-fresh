import { Handlers } from "$fresh/server.ts";
import type { Contact } from "../../../utils/db.ts";
import { setContact } from "../../../utils/db.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const newContact = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    // Process the data (e.g., save to a database or send an email)
    console.log({ newContact });

    setContact(newContact as Contact);

    // Alert the user that the form was submitted
    // Return a success response
    return new Response("Form submitted successfully!", {
      status: 200,
    });
  },
};
