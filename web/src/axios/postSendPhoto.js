import { $host } from ".";

export const postSendPhoto = async (photo) => {
  const config = {
    withCredentials: true,
  };
  const { data } = await $host.post("/api/photo", photo, config);
  return data;
};
