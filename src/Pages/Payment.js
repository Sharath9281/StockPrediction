import React from 'react';
import '../CssStyle/Payment.css';
import {Link} from 'react-router-dom';

export const Payment = () => {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Payment Page</title>
    {/* Bootstrap CSS */}
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
    {/* Custom CSS */}
    <link rel="stylesheet" href="login1.css" />
    {/* Font Awesome CSS */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    {/* Navigation Bar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
    </nav>
    <div className="container mt-5">
        <h1 className="text-center mt-5">Subscribe to   <span className="text-success font-weight-bold">Sto</span><span className="text-danger font-weight-bold">XX</span></h1>
        <div className="row mt-5">
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body bg-light">
                        <h5 className="card-title">Monthly Access</h5>
                        <p className="card-text">Subscribe for monthly access</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="accessType" id="monthlyAccess" defaultValue="monthly" defaultChecked />
                            <label className="form-check-label" htmlFor="monthlyAccess">
                                Monthly
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body bg-light">
                        <h5 className="card-title">Lifetime Access</h5>
                        <p className="card-text">Subscribe for lifetime access</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="accessType" id="lifetimeAccess" defaultValue="lifetime" />
                            <label className="form-check-label" htmlFor="lifetimeAccess">
                                Lifetime
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-12">
                <h2 className="text-center">Payment Methods</h2>
                <div className="payment-icons">
                    <div className="payment-box mr-5">
                        <a href="#" className="text-decoration-none">
                            <i className="fab fa-paypal payment-icon" />
                            <p>PayPal</p>
                        </a>
                    </div>
                    <div className="payment-box ml-5">
                        <a href="#" className="text-decoration-none">
                            <i className="fab fa-google-pay payment-icon" />
                            <p>GPay</p>
                        </a>
                    </div>
                </div><br />
                <h3 className="text-center">(Or)</h3>
                {/* Payment Form */}
                <form>
                    <div className="form-group mt-4 col-md-4">
                        <label htmlFor="cardHolderName">Card Holder Name</label>
                        <input type="text" className="form-control" id="cardHolderName" placeholder="Enter card holder name" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="text" className="form-control" id="cardNumber" placeholder="Enter card number" />
                    </div>
                    <div className="form-row">
                        <div className="form-group ml-3 col-md-3">
                            <label htmlFor="expirationDate">Expiration Date</label>
                            <input type="text" className="form-control" id="expirationDate" placeholder="MM/YYYY" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" className="form-control" id="cvv" placeholder="Enter CVV" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block btn-pay-now">Pay Now</button>
                </form>
            </div>
        </div>
    </div>
    {/* Bootstrap JS (optional) */}
</div>

  )
}


export default Payment;
