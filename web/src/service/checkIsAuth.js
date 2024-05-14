exports.checkIsAuth = async (setIsAuth) => {
  const isAuth = localStorage.getItem("isAuth");

  if (isAuth) {
    setIsAuth(true);
  } else {
    setIsAuth(false);
  }
};
