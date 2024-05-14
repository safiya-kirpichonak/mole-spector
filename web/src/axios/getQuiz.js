import { $host } from ".";

export const getQuiz = async () => {
  const { data } = await $host.get("/quiz");
  return data;
};
