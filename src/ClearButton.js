import React from "react";

const ClearButton = ({ clearAll }) => {
    return (
      <button className="clear-button" onClick={clearAll}>
        Clear All
      </button>
    );
  };  

export default ClearButton;