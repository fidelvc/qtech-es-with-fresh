const kv = await Deno.openKv();

export interface Contact {
  name: string;
  email: string;
  message: string;
}

const PREFIX = "contacts";

export async function getContact(email: string): Promise<Contact | null> {
  const res = await kv.get<Contact>([...PREFIX, email]);
  return res.value || null;
}

export async function setContact(newContact: Contact): Promise<void> {
  await kv.set([PREFIX, newContact.email], newContact);
}
