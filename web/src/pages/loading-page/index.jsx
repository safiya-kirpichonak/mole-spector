import React from "react";

import Header from "../../components/organisms/header";
import Footer from "../../components/organisms/footer";
import LoaderWithMessage from "../../components/molecules/loader-with-message";

const LoadingPage = ({ message }) => {
  return (
    <div>
      <Header />
      <LoaderWithMessage message={message} />
      <Footer />
    </div>
  );
};

export default LoadingPage;
