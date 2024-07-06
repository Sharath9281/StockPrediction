import React from 'react';
import './Loginpage.css'; 

const NewComponent = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <div className="container">
        <div className="bg-image" />
        <div className="log_form">
          <form action="login_a" method="post">
            <div className="log_det">
              <h1><u>Login</u></h1>
              <div className="icon">
                <i className="fa-brands fa-facebook" />
                <i className="fa-brands fa-google" />
              </div>
              <input type="text" placeholder="Email" id="email" name="email" /><br />
              <input type="password" placeholder="Password" id="password" name="password" /><br />
              <button type="submit">Login</button>
              <a href="#">Forgot password?</a><br />
              <h5>Don't have an account?<a href="signup.html">Signup</a></h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
