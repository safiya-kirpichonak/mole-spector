import React, { useEffect, useState } from "react";

import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";
import QuizSection from "../../components/organisms/quiz-section";
import { checkIsAuth } from "../../service/checkIsAuth";

const QuizPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      await checkIsAuth(setIsAuth);
    })();
  });
  return (
    <div>
      <Header auth={isAuth} />
      <QuizSection />
      <Footer />
    </div>
  );
};

export default QuizPage;
