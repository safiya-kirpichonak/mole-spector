import React, { useState, useEffect } from "react";

import ResultSection from "../../components/organisms/result-section";
import SendPhotoSection from "../../components/organisms/send-photo-section";
import ErrorMessage from "../../components/molecules/error-message";
import Header from "../../components/organisms/header";
import Footer from "../../components/organisms/footer";
import { checkIsAuth } from "../../service/checkIsAuth";

const SendPhoto = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    (async () => {
      await checkIsAuth(setIsAuth);
    })();
  });

  const setResultHandler = (data) => {
    setResult(data);
  };

  return (
    <div>
      <Header auth={isAuth} />
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
