import "../components/form.css";
//login form component
const Form = () => {
  return (
    <section className=" bg-slate-400 w-full min-h-screen">
      {/* form div */}
      <div className="w-full px-4 bg-white">
        {/* title */}
        <div>
          <span className=" text-2xl">Welcome to</span>
          <img
            src="https://forms.floridarealtors.org/fs2/images/siteLogos/login-simplicity-logo.png"
            alt="Welcome to Form Simplicity"
          />
        </div>
        {/* form user / password */}
        <form>
          {/* username */}
          <div className="flex flex-col">
            <label className="needed label" for="username">
              User ID
            </label>
            <input
              autofocus
              type="text"
              required
              id="usernameInput"
              className="formInput"
            />
            <div className="hidden errorPop">Please enter your user ID</div>
          </div>
          {/* password */}
          <div>
            <div className="flex flex-row justify-between">
              {/* reveal button to go here */}
              <label className="needed label" for="username">
                Password
              </label>
              <svg
                className="h-3 self-center"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20.07 11"
              >
                <path d="M19.92,5.17a19.76,19.76,0,0,0-3-2.57A16,16,0,0,0,13.79.83,9.87,9.87,0,0,0,10,0,9.87,9.87,0,0,0,6.26.82,16.11,16.11,0,0,0,3.13,2.59a19.83,19.83,0,0,0-3,2.57.5.5,0,0,0,0,.67,19.76,19.76,0,0,0,3,2.57,16,16,0,0,0,3.13,1.77A9.87,9.87,0,0,0,10,11a9.87,9.87,0,0,0,3.79-.82A16.11,16.11,0,0,0,17,8.41a19.83,19.83,0,0,0,3-2.57A.5.5,0,0,0,19.92,5.17Zm-7.3-3.73a4,4,0,1,1-5.15,0A7.78,7.78,0,0,1,12.62,1.44Zm3.74,6.17A11.54,11.54,0,0,1,10,10,11.54,11.54,0,0,1,3.73,7.61,20,20,0,0,1,1.24,5.5,20.1,20.1,0,0,1,3.73,3.39,16.19,16.19,0,0,1,5.58,2.25a5,5,0,1,0,8.93,0,16.33,16.33,0,0,1,1.85,1.14A20,20,0,0,1,18.85,5.5a20.1,20.1,0,0,1-2.48,2.11Z"></path>
              </svg>
            </div>
            <input
              autofocus
              type="text"
              required
              id="usernameInput"
              className="formInput w-full"
            />
            <div className="hidden errorPop">Please enter your password</div>
          </div>
          <a className="dgLink" href="google.com" >
            I would like to reset or register my password
          </a>
          <button className="loginBtn block" type="submit">
            Log-in
          </button>
          {/* info */}
          <div>
            <p className=" text-xs">
              We're committed to your privacy. Form Simplicity uses your
              provided information to contact you about new features, training,
              and more. You may unsubscribe from these communications at any
              time.
              <a href="google.com" className=" no-underline text-blue-600">
                Privacy Policy
              </a>
            </p>
            <img
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
