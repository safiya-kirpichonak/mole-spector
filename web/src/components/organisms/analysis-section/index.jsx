import React, { useEffect, useState } from "react";
import SectionTitle from "../../atoms/section-title";
import { getAnalyses } from "../../../axios/getAnalyses";

const AnalysesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [analyses, setAnalyses] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await getAnalyses();
        setAnalyses(data);
      } catch (error) {
        console.error("Error loading analyses:", error);
        setAnalyses([]);
      }
    })();
  }, []);

  const currentItems = analyses.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section id="faq" className="faq section-bg" style={{ marginTop: "100px" }}>
      <div className="container">
        <SectionTitle
          title="Analyses"
          description="Here you can see your analyses."
        />

        {analyses.length === 0 ? (
          <p className="simple-text">You don’t have the results yet</p>
        ) : (
          <div>
            <div className="mt-4 mt-lg-0 developers">
              {currentItems.map((item, index) => (
                <div
                  className="member d-flex simple-bg"
                  style={{ justifyContent: "space-around" }}
                  key={index}
                >
                  <div className="simple-text">{item.date}</div>
                  <div className="simple-text">{Math.floor(item.result)}%</div>
                </div>
              ))}
            </div>

            <div className="pagination">
              {Array(Math.ceil(analyses.length / itemsPerPage))
                .fill()
                .map((_, index) => (
                  <button
                    style={{
                      margin: "0 2px 0 2px",
                      backgroundColor: "#1977cc",
                      width: "40px",
                      height: "40px",
                      border: "none",
                      color: "white",
                      borderRadius: "2px",
                    }}
                    key={index}
                    className={currentPage === index + 1 ? "active" : ""}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnalysesSection;
