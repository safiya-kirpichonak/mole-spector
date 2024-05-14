import React from "react";

import Header from "../../components/organisms/header";
import Footer from "../../components/organisms/footer";
import ErrorMessage from "../../components/molecules/error-message";

const ErrorPage = ({ code, message }) => {
  return (
    <div>
      <Header />
      <ErrorMessage code={code} message={message} />
      <Footer />
    </div>
  );
};

export default ErrorPage;
