import { useEffect, useRef, useState } from "react";
import EyeSvg from "./eyeSvg";
import "../components/form.css";
//login form component
const Form = () => {
  //crating a ref to first input
  const firstInputRef = useRef(null);
  //focusing on load
  useEffect(() => {
    firstInputRef.current.focus();
  }, []);
  //----creating states---
  const [passwordState, setPasswordState] = useState("password");
  const [formInputs, changeFormInputs] = useState({
    userId: "",
    password: "",
  });
  //----component functions----
  const handleEyeClick = () => {
    passwordState === "password"
      ? setPasswordState("text")
      : setPasswordState("password");
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    changeFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  return (
    <section className=" bg-slate-400 w-full min-h-screen">
      {/* form div */}
      <div className="w-full px-4 pt-2 bg-white min-h-screen">
        {/* title */}
        <div className="mb-2">
          <span className=" text-2xl">Welcome to</span>
          <img
            src="https://forms.floridarealtors.org/fs2/images/siteLogos/login-simplicity-logo.png"
            alt="Welcome to Form Simplicity"
          />
        </div>
        {/* form user / password */}
        <form>
          {/* username */}
          <div className="flex flex-col mb-12">
            <label className="needed label" for="username">
              User ID
            </label>
            <input
              onChange={(e) => handleFormChange(e)}
              name="userId"
              autofocus
              type="text"
              required
              id="usernameInput"
              className="formInput"
              ref={firstInputRef}
            />
            <div className="hidden errorPop">Please enter your user ID</div>
          </div>
          {/* password */}
          <div className="mb-10">
            <div className="flex flex-row justify-between">
              {/* reveal button to go here */}
              <label className="needed label" for="username">
                Password
              </label>
              <EyeSvg onClick={handleEyeClick} />
            </div>
            <input
              onChange={(e) => handleFormChange(e)}
              name="password"
              autofocus
              type={passwordState}
              required
              id="usernameInput"
              className="formInput w-full"
            />
            <div className="hidden errorPop">Please enter your password</div>
          </div>
          <div className="mb-10">
            <a className="dgLink text-sm hover:underline" href="google.com">
              I would like to reset or register my password.
            </a>
          </div>

          <div className="hidden errorPop"> Invalid user ID or password</div>
          <div className="mb-5 w-full flex justify-center">
            <button className="loginBtn block duration-200" type="submit">
              Log-in
            </button>
          </div>

          {/* info */}
          <div>
            <p className=" text-xs mb-10">
              We're committed to your privacy. Form Simplicity uses your
              provided information to contact you about new features, training,
              and more. You may unsubscribe from these communications at any
              time.
              <a href="google.com" className=" no-underline text-blue-600">
                Privacy Policy
              </a>
            </p>
            <img
              className="w-full pb-14"
              src="https://forms.floridarealtors.org/fs2/images/loginLogos/florida-logo.png"
              alt="Florida Realtors Logo"
              id="formLogo"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
