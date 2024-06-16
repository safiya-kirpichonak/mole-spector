import React from "react";
import { Route, Routes } from "react-router-dom";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { useSelector } from "react-redux";

import { publicRoutes } from "./public";
import ErrorPage from "../pages/error-page";

const AppRouter = () => {
  const initialTheme = useSelector((state) => state.theme);
  const presentTheme = sessionStorage.getItem("theme");
  const theme = initialTheme === presentTheme ? initialTheme : presentTheme;

  return (
    <div id={theme}>
      <Routes>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route
          path="/*"
          element={
            <ErrorPage
              code={StatusCodes.NOT_FOUND}
              message={ReasonPhrases.NOT_FOUND}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
