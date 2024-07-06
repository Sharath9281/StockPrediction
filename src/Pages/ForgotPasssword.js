import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import './CssStyles/ForgotPassword.css';

var NewComponent = React.createClass({
    handleFormSubmit: function(event) {
        event.preventDefault();
        this.props.history.push("PasswordChange");
    },
    render: function() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Forgot Password</title>
                <link rel="stylesheet" href="forget_password.css" />
                <img src="images/land/logo1.jpg" alt="Logo" className="image" />
                <div className="align">
                    <p>Enter the email address associated with your account and <br /> we'll send you a link to reset your password</p>
                    <form onSubmit={this.handleFormSubmit}> {/* Attach onSubmit event handler */}
                        <label htmlFor="email">Email</label><br /><br />
                        <input type="email" id="name" name="email" style={{boxSizing: 'content-box'}} className="field" /><br /><br />
                        <button type="submit" className="field">Continue</button>
                    </form>
                </div>
                <br /><br /><br /><br /><p style={{paddingLeft: '40%'}}>Don't have an account? <Link to="/signup">Sign up</Link></p> {/* Use Link component for navigation */}
            </div>
        );
    }
});

export default NewComponent;
