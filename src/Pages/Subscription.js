import React, { Component } from 'react';
import '../CssStyle/Subscription.css';
import { Link } from 'react-router-dom';

const Subscription = () => {
  return (
    <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Subscription Page</title>
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#">
                        <img src="C:\SPP\images\land\logo1.jpg" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '-5px' }} />
                        <span className="text-success font-weight-bold">Sto</span><span className="text-danger font-weight-bold">XX</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="btn btn-primary btn-block btn-pay-now" href="#">Learn More</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa-solid fa-circle-user ml-2" style={{ fontSize: '27px' }} />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Profile</a>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <a className="dropdown-item" href="#">
                                        Statistics
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                {/* Subscription Boxes */}
                <div className="container mt-5 ">
                    <div className="subs justify-content-center">
                        <div className="col-md-4">
                            <div className="subscription-boxes">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Monthly Subscription</h5>
                                        <p className="subscription-price">$<span className="font-weight-bold">10</span></p>
                                        <p className="card-text"><i className="fa-solid fa-circle-check" /> Enjoy unlimited access to our premium content.<br />
                                            <i className="fa-solid fa-circle-check" /> Monthly subscription fee ensures continuous updates and support.<br />
                                            <i className="fa-solid fa-circle-check" /> Join our community of monthly subscribers for exclusive benefits.</p>
                                        <Link to='paymentpage' className="btn btn-primary">Purchase</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="subscription-boxes ">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Lifetime Access</h5>
                                        <p className="subscription-price">$<span className="font-weight-bold">100</span></p>
                                        <p className="card-text"><i className="fa-solid fa-circle-check" /> Unlock lifetime access to all features with a one-time payment.<br />
                                            <i className="fa-solid fa-circle-check" /> Get lifetime updates and support with our lifetime access offer.<br />
                                            <i className="fa-solid fa-circle-check" /> Invest in your future with unlimited access for a lifetime.</p>
                                        <Link to='paymentpage' className="btn btn-primary">Purchase</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bootstrap JS (optional) */}
            </div>
  )
}

export default Subscription
