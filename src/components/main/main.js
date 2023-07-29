import { useEffect, useState } from "react";
import "./style.css";
import Body from "../body";
import Success from "../success";
import { useSelector } from "react-redux";

function Main() {
  const [bodyVisible, setBodyVisible] = useState(true);
  const [successVisible, setSuccessVisible] = useState(false);
  const email = useSelector((state) => state.email.value);

  useEffect(() => {
    if (email.length > 0) {
      setBodyVisible(false);
      setSuccessVisible(true);
    } else {
      setBodyVisible(true);
      setSuccessVisible(false);
    }
  }, [email]);

  return (
    <div className="grey_div">
      {bodyVisible && <Body />}
      {successVisible && <Success />}
    </div>
  );
}

export default Main;
