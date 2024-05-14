import { $host } from ".";

export const getAnalyses = async () => {
  const config = {
    withCredentials: true,
  };
  const { data } = await $host.get("/api/analyses", config);
  return data;
};
