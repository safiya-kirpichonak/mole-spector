import React from "react";

import { LOGOUT_ROUTE, PROFILE_ROUTE } from "./consts";

import HomePage from "../pages/home-page";
import ProfilePage from "../pages/profile-page.js";

export const usersRoutes = [
  {
    path: LOGOUT_ROUTE,
    element: <HomePage />,
  },
  {
    path: PROFILE_ROUTE,
    element: <ProfilePage />,
  },
];
