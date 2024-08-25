import React from "react";
import "./login.css";

export const Login = ({ children }) => {
  var accessTokenObj = JSON.parse(localStorage.getItem("Token:"));
  console.log(accessTokenObj);
  return (
    <div className="mainForLogin">
      {!accessTokenObj && (
        <div className="Loginbody">
          <div className="container">
            <div className="heading">FURNITURE SHOOPING</div>

            <div className="box">
              <h2 className="log">Log In With</h2>
              <div className="img-container">
                <div>
                  <button className="button">
                    <img
                      className="google"
                      src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                      alt=""
                    />
                    Google
                  </button>
                </div>
                <div>
                  <button className="button">
                    <i className="icon" class="fa-brands fa-apple"></i>Apple
                  </button>
                </div>
              </div>

              <div className="user">
                <div className="name">User Name</div>
                <div>
                  <input
                    className="enter"
                    type="text"
                    placeholder="Enter User Name"
                  ></input>
                </div>
              </div>

              <div className="user">
                <div className="name">Password</div>
                <div>
                  <input
                    className="enter"
                    type="password"
                    placeholder="Enter Password"
                  ></input>
                </div>
                <a className="forgot" href="">
                  Forgot Password
                </a>
              </div>

              <div>
                <button className="login">Log In</button>
              </div>

              <div className="account">
                <p>
                  Don't have an account{" "}
                  <a className="signup" href="">
                    Signup
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {accessTokenObj && <div className="AfterLogin">{children}</div>}
    </div>
  );
};
