import { $host } from ".";

export const postContact = async (message) => {
  const { data } = await $host.post("/api/contact", message);
  return data;
};
