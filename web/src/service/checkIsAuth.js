exports.checkIsAuth = async (setIsAuth) => {
  const responce = await fetch(process.env.REACT_APP_API_URL + "/api/user", {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (responce.status === 200) {
    setIsAuth(true);
  } else {
    setIsAuth(false);
  }
};
