import { useState } from "react";
import "./style.css";
import Body from "../body";
import Success from "../success";

function Main() {
  const [bodyVisible, setBodyVisible] = useState(true);
  const [successVisible, setSuccessVisible] = useState(false);

  return (
    <div className="grey_div">
      {bodyVisible && <Body />}
      {successVisible && <Success />}
    </div>
  );
}

export default Main;
