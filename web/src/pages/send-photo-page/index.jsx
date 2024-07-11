import React, { useState } from "react";

import Header from "../../components/organisms/header";
import Footer from "../../components/organisms/footer";
import ErrorMessage from "../../components/molecules/error-message";
import ResultSection from "../../components/organisms/result-section";
import SendPhotoSection from "../../components/organisms/send-photo-section";

const SendPhoto = () => {
  const [result, setResult] = useState(null);

  const setResultHandler = (data) => {
    setResult(data);
  };

  return (
    <div>
      <Header />
      <div className="send-photo-section">
        {result ? (
          result.isSuccess ? (
            <ResultSection result={result} />
          ) : (
            <ErrorMessage code={result.code} message={result.message} />
          )
        ) : (
          <SendPhotoSection setResultHandler={setResultHandler} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SendPhoto;
