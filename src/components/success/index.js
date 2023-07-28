import { useState } from "react";
import "./style.css";

function Success() {
  const [email, setEmail] = useState("ash@loremcompany.com");

  return (
    <div className="white_rect_success">
      <img alt="tick" src="images/icon-list.svg" className="tick_img_success" />
      <br></br>
      <br></br>

      <span className="thanks_text">
        Thanks for <br></br>
        Subscribing!
      </span>

      <br></br>
      <br></br>

      <span>
        A confirmation email has been sent to <br></br>
        <span className="email_success">{email}</span>. Please open it and click
        <br></br>
        the button inside to confirm your subscription.
      </span>

      <br></br>
      <br></br>
      <br></br>

      <button className="btn_submit">Dismiss message</button>
    </div>
  );
}

export default Success;
