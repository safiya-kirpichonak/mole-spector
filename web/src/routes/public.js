import React from "react";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

import {
  HOME_PAGE_ROUTE,
  PRIVACY_POLICY_ROUTE,
  SEND_PHOTO_PAGE_ROUTE,
  ERROR_404_ROUTE,
  ERROR_500_ROUTE,
  QUIZ_ROUTE,
} from "./consts";

import HomePage from "../pages/home-page";
import QuizPage from "../pages/quiz-page";
import ErrorPage from "../pages/error-page";
import SendPhotoPage from "../pages/send-photo-page";
import PrivacyPolicyPage from "../pages/privacy-policy-page";

export const publicRoutes = [
  {
    path: HOME_PAGE_ROUTE,
    element: <HomePage />,
  },
  {
    path: SEND_PHOTO_PAGE_ROUTE,
    element: <SendPhotoPage />,
  },
  {
    path: PRIVACY_POLICY_ROUTE,
    element: <PrivacyPolicyPage />,
  },
  {
    path: ERROR_404_ROUTE,
    element: <ErrorPage />,
  },
  {
    path: QUIZ_ROUTE,
    element: <QuizPage />,
  },
  {
    path: ERROR_500_ROUTE,
    element: (
      <ErrorPage
        code={StatusCodes.INTERNAL_SERVER_ERROR}
        message={ReasonPhrases.INTERNAL_SERVER_ERROR}
      />
    ),
  },
];
