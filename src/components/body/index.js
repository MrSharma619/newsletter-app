import { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../slices/emailSlice";

function Body() {
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);

  const [emailId, setEmailId] = useState(
    useSelector((state) => state.email.value)
  );

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate(emailId)) dispatch(setEmail(emailId));
    else {
      setError(true);
      setErrorMsg("Valid Email Required");
    }
  };

  const validate = (x) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(x);
  };

  return (
    <div className="white_rect">
      <div className="d-flex">
        <div className="p-2 flex-fill content_div">
          <div className="header_text_div">
            <span className="header_text">Stay Updated!</span>
          </div>
          <br></br>
          <br></br>

          <span className="secondary_text">
            Join 60,000+ product managers receiving monthly
            <br></br>
            updates on:
          </span>

          <br></br>
          <br></br>

          <div className="d-flex-points">
            <div className="p-2 flex-fill">
              <img alt="tick" src="images/icon-list.svg" className="tick_img" />
            </div>
            <div className="p-2 flex-fill point_text">
              Product discovery and building what matters
            </div>
          </div>

          <div className="d-flex-points">
            <div className="p-2 flex-fill">
              <img alt="tick" src="images/icon-list.svg" className="tick_img" />
            </div>
            <div className="p-2 flex-fill point_text">
              Measuring to ensure updates are a success
            </div>
          </div>

          <div className="d-flex-points">
            <div className="p-2 flex-fill">
              <img alt="tick" src="images/icon-list.svg" className="tick_img" />
            </div>
            <div className="p-2 flex-fill point_text">And much more!</div>
          </div>

          <br></br>

          <div className="input_part">
            <div className="d-flex-error">
              <div className="p-2 flex-fill email_text">Email address</div>
              <div className="p-2 flex-fill error_text">{errorMsg}</div>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="email@company.com"
                className={error ? "input_email_error" : "input_email"}
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
              <br></br>
              <br></br>
              <button type="submit" className="btn_submit">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>

        <div className="p-2 flex-fill">
          <img
            alt="header-signup"
            src="images/illustration-sign-up-desktop.svg"
            className="img-signup"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
