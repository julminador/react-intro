import React from "react";
import './TodosLoading.css';

function TodosLoading({ error }) {
  return (
    <div className="container">
      <div className="background">
        <div className="left">
          <div className="image"></div>
        </div>
        <div className="right">
          <div className="bar"></div>
          <div className="mask thick"></div>
        </div>
      </div>
    </div>
  );
}

export { TodosLoading };