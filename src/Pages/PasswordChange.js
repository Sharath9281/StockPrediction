import React from "react";
import './PasswordChange.css';

var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>PasswordChange</title>
          <link rel="stylesheet" href="PasswordChange.css" />
          <h1>Forgot your Password ?</h1><br /><br />
          <div className="box">
            <form>
              <label htmlFor="email">Email</label><br />
              <input type="email" id="name" name="email" className="feild" /><br /><br />
              <label htmlFor="Newpass">New Password</label><br />
              <input type="password" id="Newpass" name="Newpass" className="feild" /><br /><br />
              <label htmlFor="verifypass">Verify Password</label><br />
              <input type="password" id="verifypass" name="verifypass" className="feild" /><br /><br />
              <button type="submit" className="feild">Change Password</button>
            </form></div>
        </div>
      );
    }
  });
  
  export default NewComponent;