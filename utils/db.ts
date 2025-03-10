const kv = await Deno.OpenKv();

export interface Contact {
  name: string;
  email: string;
  message: string;
}

const PREFIX = ["contacts"];

export async function getContact() {
  const res = await kv.get<Contact>(PREFIX);
  return res.value;
}

export async function setContact(newContact: Contact) {
  await kv.set(PREFIX, newContact);
}
