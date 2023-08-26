import React, { useEffect } from "react";

const Child = (props) => {
  let data = "Niamudeen";
  useEffect(() => {
    props.getData(data);
  }, []);
  return <div className="child">Child</div>;
};

export default Child;
