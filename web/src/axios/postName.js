import { $host } from ".";

export const postName = async (message) => {
  const config = {
    withCredentials: true,
  };
  const { data } = await $host.post("/api/edit_name", message, config);
  return data;
};
