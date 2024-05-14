import React from "react";

const SubmitButton = ({ data }) => {
  return (
    <div className="text-center">
      <button type="submit">{data}</button>
    </div>
  );
};

export default SubmitButton;
