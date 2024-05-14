import { $host } from ".";

export const postPassword = async (message) => {
  const config = {
    withCredentials: true,
  };
  const { data } = await $host.post("/api/edit_password", message, config);
  return data;
};
