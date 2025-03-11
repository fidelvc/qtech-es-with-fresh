import { Handlers } from "$fresh/server.ts";
import type { Contact } from "../../../utils/db.ts";
import { setContact } from "../../../utils/db.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const newContact: Contact = {
      name: form.get("name")?.toString() || "",
      email: form.get("email")?.toString() || "",
      message: form.get("message")?.toString() || "",
    };

    // Save the contact form data to the OpenKV database
    try {
      await setContact(newContact);
      return new Response("Form submitted successfully!", {
        status: 200,
      });
    } catch (error) {
      console.error("Error:", error);
      return new Response(
        `An error occurred. Please try again. \n Error - ${error} \n Data - ${
          JSON.stringify(newContact)
        }`,
        {
          status: 500,
        },
      );
    }
  },
};
