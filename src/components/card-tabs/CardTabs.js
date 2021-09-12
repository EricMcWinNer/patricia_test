import React, { useState } from "react";
import "./index.sass";

function CardTabs(props) {
  const [selected, setSelected] = useState(0);
  const checkedTabs = props.tabs;
  const tabs = checkedTabs.map((tab, index) => (
    <div
      onClick={() => setSelected(index)}
      key={index}
      className={"card-tabs__tab " + (selected === index ? "selected" : "")}
    >
      {tab}
    </div>
  ));
  return <div className={"card-tabs"}>{tabs}</div>;
}

export default CardTabs;
