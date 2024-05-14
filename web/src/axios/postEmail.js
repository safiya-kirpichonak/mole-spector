import { $host } from ".";

export const postEmail = async (message) => {
  const config = {
    withCredentials: true,
  };
  const { data } = await $host.post("/api/edit_email", message, config);
  return data;
};
