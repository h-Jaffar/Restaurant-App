import React from "react";

function RegisterPage() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4 text-center mt-2">
          <img
            className="menuimg"
            src="https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg"
          />
          <h3 className="boldtext my-3">SIGN UP</h3>
          <div className="my-5 ms-5 me-2 text-start">
          <label for="namee">Name</label>
            <input
              id="namee"
              className="form-control mb-4"
              placeholder="Name"
            />
            <label for="emailad">Email Address</label>
            <input
              id="emailad"
              className="form-control mb-4"
              placeholder="Email"
            />
            <label for="phoneno">Phone</label>
            <input
              id="phoneno"
              className="form-control mb-4"
              placeholder="Phone"
            />
            <label for="password">Password</label>
            <input
              id="password"
              className="form-control mb-4"
              placeholder="Password"
            />
            <label for="cpassword">Confirm Password</label>
            <input
              id="cpassword"
              className="form-control mb-4"
              placeholder="Confirm Password"
            />
            <div>
                <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdO4hceAAAAAKUC0dEVBc05Whup7eljef2r2Pno&amp;co=aHR0cHM6Ly93d3cuaGFwcHlzcGl6emFidXJnZXIuY28udWs6NDQz&amp;hl=en-GB&amp;v=mq0-U1BHZ5YTcoDC-CvsLPNc&amp;theme=light&amp;size=normal&amp;cb=3dyygsvgyiom" width="304" height="78" role="presentation" name="a-yjjttnpaq2gk" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            </div>
          </div>

          <div className="mb-5">
            <button className="btn btn-primary registerbtn">SIGN IN</button>
            <button className="btn btn-light registerbtn"><i class="fa-brands fa-google"></i>  GOOGLE</button>
            <button className="btn btn-light registerbtn"><i class="fa-brands fa-square-facebook"></i>  FACEBOOK</button>
          </div>

          <p className="mb-5">Already have an account yet? <a href="/login">Login</a></p>
        </div>
        <div className="col-md-8">
          <img
            className="registerimg"
            src="https://as2.ftcdn.net/v2/jpg/01/90/52/65/1000_F_190526564_IVy5J7E9JXdyKqeSrZx8hr6YTLhyIYpQ.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
