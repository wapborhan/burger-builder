import React from "react";

function Summary(props) {
  const ingredientSummary = props.ingredients.map((item) => {
    return (
      <li key={item.type}>
        <span className="text-capitalize fw-bolder">{item.type}</span> :{" "}
        {item.amount}
      </li>
    );
  });
  return (
    <div>
      <ul>{ingredientSummary}</ul>
    </div>
  );
}

export default Summary;
