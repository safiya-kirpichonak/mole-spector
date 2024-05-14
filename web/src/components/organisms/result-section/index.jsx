import React, { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import "./style.css";

import steps from "../../../data/steps.json";

import ResultDescription from "../../molecules/result-description";
import Steps from "../../molecules/steps";
import BigImageCenter from "../../atoms/big-image-center";
import PDFFile from "../../atoms/pdf-file";
import Button from "../../atoms/button";

import data from "../../../data/description.json";

const ResultSection = ({ result }) => {
  const [description, setDescription] = useState("");
  const [warning, setWarning] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = async () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      if (result.percent >= 80) setDescription(data.rus.high);
      else if (result.percent >= 20) setDescription(data.rus.medium);
      else if (result.percent >= 0) setDescription(data.rus.low);
      else setDescription("Что-то пошло не по плану.");
      setWarning(data.rus.warning);
    } else {
      if (result.percent >= 80) setDescription(data.en.high);
      else if (result.percent >= 20) setDescription(data.en.medium);
      else if (result.percent >= 0) setDescription(data.en.low);
      else setDescription("Something went wrong");
      setWarning(data.en.warning);
    }
  };

  useEffect(() => {
    if (!isChecked) {
      if (result.percent >= 80) setDescription(data.en.high);
      else if (result.percent >= 20) setDescription(data.en.medium);
      else if (result.percent >= 0) setDescription(data.en.low);
      else setDescription("Something went wrong");
      setWarning(data.en.warning);
    } else {
      if (result.percent >= 80) setDescription(data.rus.high);
      else if (result.percent >= 20) setDescription(data.rus.medium);
      else if (result.percent >= 0) setDescription(data.rus.low);
      else setDescription("Что-то пошло не по плану.");
      setWarning(data.rus.warning);
    }
  }, [isChecked, result.percent]);

  return (
    <section style={{ marginTop: "50px" }}>
      <div className="container">
        <BigImageCenter url={result.url} />

        <ResultDescription
          result={result.percent}
          description={result.description}
        />
        <div
          style={{
            margin: "0 0 40px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="App">
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <label className="simple-text">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{ margin: "0 12px 0 0" }}
                />
                Save in Russian
              </label>
            </div>
            <PDFDownloadLink
              id="download-link"
              document={
                <PDFFile
                  result={result}
                  description={description}
                  warning={warning}
                />
              }
              fileName="scan-results.pdf"
              key={isChecked}
            >
              {({ loading }) =>
                loading ? (
                  <Button title={"Loading..."} disabled={true} />
                ) : (
                  <Button title={"Save as PDF"} />
                )
              }
            </PDFDownloadLink>
          </div>
        </div>
        <Steps data={steps} />
      </div>
    </section>
  );
};

export default ResultSection;
