import React, { useContext } from 'react';
import '../CssStyle/LandingPage.css';
import NavbarwithSignup from '../Components/Navbarwithsignup';
import NavbarwithoutSignup from '../Components/NavbarwithoutSignup';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../context/AuthContext';
import { GraphContext } from '../context/LivegraphContext';
import { Link } from 'react-router-dom';
import appleLogo from '../logos/apple.png';
import googleLogo from '../logos/Google.png';
import teslaLogo from '../logos/tesla.png';
import ibmLogo from '../logos/IBM.png';



const LandingPage = () => {
    const { isLoggedIn, user, handleLogout } = useContext(AuthContext);
    const { handelGraph } = useContext(GraphContext);
  return (
    <div className="bdy">
                {isLoggedIn ? (
                    <NavbarwithoutSignup user={user} onLogout={handleLogout} />
                ) : (
                    <NavbarwithSignup />
                )}
                {/* herooooo */}
                <section id="home" className="bg-light ">
                    <div className="container1">
                        <div className="row">
                            <div className="hero-section">
                                <h1>Stock Forecast</h1>
                                <p className="lead" style={{ fontSize: '22px' }}>• Experience the future of investment with our advanced AI and ML-powered algorithms, delivering precise forecasts and actionable recommendations.</p>
                                <p className="lead" style={{ fontSize: '22px' }}>• Elevate your investment strategy with our cutting-edge stock price prediction platform</p>
                                <p className="lead" style={{ fontSize: '22px' }}>• Join us today and revolutionize your trading experience. Make informed decisions with confidence. </p>
                                <p><Link to='/signup' className="btn btn-primary shadow mr-2">Get Started</Link>
                                </p></div>
                        </div>
                    </div>
                </section>
                {/* Serviceesss wee providee*/}
                <section id="about">
                    <div className="service">
                        <h2 className="text-center mt-5" id='serv_'><u>Services We Provide</u></h2>
                        <p className="text-muted mb-5 text-center">We leverage AI and ML to provide accurate stock predictions.</p>
                        <div className="row">
                            <div className="col-sm-6 col-lg-4 mb-3">
                            <div className="service-box shadow p-3 mb-5 bg-white rounded" id='ser'>
                                    <i className="fa-solid fa-chart-line" />
                                    <h5>Accurate Predictions</h5>
                                    <p className="text-muted">Utilizing advanced machine learning algorithms, we provide precise forecasts for various stocks  trends.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-3">
                                <div className="service-box shadow p-3 mb-5 bg-white rounded" id='ser'>
                                    <i className="fa-solid fa-tower-cell" />
                                    <h5>Real-Time Updates</h5>
                                    <p className="text-muted">Stay informed with timely updates and insights on market changes, ensuring you're always ahead of the curve.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-3">
                                <div className="service-box shadow p-3 mb-5 bg-white rounded" id='ser'>
                                    <i className="fa-solid fa-gear" />
                                    <h5>Customizable Alerts</h5>
                                    <p className="text-muted">Set personalized alerts for specific stocks or market conditions, so you never miss out on key opportunities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-4 mb-3">
                                <div className="service-box shadow p-3 mb-3 bg-white rounded" id='ser'>
                                    <i className="fa-solid fa-shield-halved" />
                                    <h5>Risk Management Tools</h5>
                                    <p className="text-muted">Gain access to management tools for informed investment decisions and portfolio protection.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-3">
                                <div className="service-box shadow p-3 mb-3 bg-white rounded" id='ser'>
                                    <i className="fa-solid fa-magnifying-glass-chart" />
                                    <h5>Performance Tracking</h5>
                                    <p className="text-muted">Track investment performance, evaluate prediction accuracy, and optimize trading strategies over time.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mb-3">
                                <div className="service-box shadow p-3 mb-3 bg-white rounded" id='ser'>
                                    <i className="fa-solid fa-phone-volume" />
                                    <h5>Responsive Customer Support</h5>
                                    <p className="text-muted">Count on our dedicated support team for a seamless, hassle-free experience, guiding you at every step.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Company Section */}
                <section id="market" className="py-5 bg-light">
                    <div className="container1">
                        <h2 className="text-center font-weight-bold mt-3 mb-5" ><bold>Companies</bold></h2>
                        <div className="row" id="companyRow">
                            {/* Companies 1-4 initially displayed */}
                            
                            <div className="col-lg-3 mb-4 company-card" >
                                <div className="card border-2 shadow"id='cards'>
                                    <div className="card-body">
                                        <Link to="/livegraph" className='com' onClick={() => {handelGraph('AAPL')}}>Apple</Link>
                                        <img src={appleLogo} alt="Logo" id='app' className='Logo'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 company-card">
                                <div className="card border-2 shadow" id='cards'>
                                    <div className="card-body">
                                        <Link to="/livegraph" className='com' onClick={() => {handelGraph('GOOG')}}>Google</Link>
                                        <img src={googleLogo} id="g" alt="Logo" className='Logo'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 company-card">
                                <div className="card border-2 shadow" id='cards'>
                                    <div className="card-body">
                                        <Link to="/livegraph" className='com' onClick={() => {handelGraph('TSLA')}}>Tesla</Link>
                                        <img id="tes" src={teslaLogo} alt="Logo" className='Logo'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 company-card">
                                <div className="card border-2 shadow" id='cards'>
                                    <div className="card-body">
                                        <Link to="livegraph" className='com' onClick={() => {handelGraph('IBM')}}>IBM</Link>
                                        <img id="ib" src={ibmLogo} alt="Logo" className='Logo'/>
                                    </div>
                                </div>
                            </div>
                            {/* Companies 5-8 initially hidden */}
                        </div>
                    </div>
                    {/* Arrows for navigation */}
                    <div className="text-center mt-4">
                        <button id="showPrevBtn" className="btn btn-link"><i className="fas fa-chevron-left fa-3x" /></button>
                        <button id="showNextBtn" className="btn btn-link"><i className="fas fa-chevron-right fa-3x" /></button>
                    </div>
                </section>
                {/* JavaScript for Show Next and Prev functionality */}
                {/* Visualization Section */}
                <section className="py-5 bg-light">
                    <div className="container1">
                        <h2 className="text-center font-weight-bold mt-3 mb-5">AI Generated Stock Graphs</h2>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*zYEuYHjCeZAo2bYFVAoUGA.gif" className="img-fluid rounded" alt="Visualization 1" />
                            </div>
                            <div className="col-md-6 mb-4">
                                <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*zYEuYHjCeZAo2bYFVAoUGA.gif" className="img-fluid rounded" alt="Visualization 2" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Pricing Plans Section */}
                <section id="plans" className="py-5">
                    <div className="container1 mt-5">
                        <h2 className="text-center font-weight-bold mb-5">Choose Your Plan</h2>
                        <div className="row text-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="card border-2 shadow" id='cards'>
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">Free Plan</h5>
                                        <ul className="list-unstyled text-left">
                                            <li><i className="fa-solid fa-circle-check" />Access to basic stock predictions</li>
                                            <li><i className="fa-solid fa-circle-check" />Limited number of predictions per month</li>
                                            <li><i className="fa-solid fa-circle-check" />Email support</li>
                                            <li><i className="fa-solid fa-circle-check" />Monthly newsletter</li>
                                            <li><i className="fa-solid fa-circle-check" />Basic market analysis</li>
                                            <li><i className="fa-solid fa-circle-check" />Access to community forum</li>
                                            <li><i className="fa-solid fa-circle-check" />Discounts on premium services</li>
                                        </ul>
                                        <Link to='/signup' className="btn btn-primary mx-auto d-block">Sign Up for Free</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card border-2 shadow" id='cards'>
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">Membership Plan</h5>
                                        <ul className="list-unstyled text-left">
                                            <li><i className="fa-solid fa-circle-check" />Unlimited access to advanced stock predictions</li>
                                            <li><i className="fa-solid fa-circle-check" />Real-time updates and alerts</li>
                                            <li><i className="fa-solid fa-circle-check" />Priority customer support</li>
                                            <li><i className="fa-solid fa-circle-check" />Exclusive market analysis reports</li>
                                            <li><i className="fa-solid fa-circle-check" />Access to premium webinars</li>
                                            <li><i className="fa-solid fa-circle-check" />Personalized investment strategy consultation</li>
                                            <li><i className="fa-solid fa-circle-check" />Early access to new features</li>
                                        </ul>
                                        <Link to='/subscription' className="btn btn-primary mx-auto d-block">Upgrade to Membership</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* footerrrrr */}
                <div id="contact" className="py-5 bg-light text-center mt-3">
                    <div className="container1">
                        <div className="row">
                            <div className="col-lg-4 mb-4 mb-lg-0 ">
                                <h5>Stoxx 101</h5>
                                <ul className="contact-info list-unstyled">
                                    <li><a href="#" className="text-dark">stoxx@invest.works</a></li>
                                    <li><a href="#" className="text-dark">+91 987625431</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5>Our Guidelines</h5>
                                <ul className="links list-unstyled">
                                    <li> <a href="#" className="text-muted">Terms</a></li>
                                    <li> <a href="#" className="text-muted">Privacy Policy</a></li>
                                    <li> <a href="#" className="text-muted">Discover</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5>Our Address</h5>
                                <i className="fa-solid fa-location-dot" /> 123 xx street xx city
                                <ul className="link list-unstyled ">
                                    <li> <a href="#" className="fa-brands fa-instagram" /></li>
                                    <li> <a href="#" className="fa-brands fa-facebook" /></li>
                                    <li> <a href="#" className="fa-brands fa-twitter" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 bg-dark text-white">
                    <div className="container1-fluid">
                        <div className="row">
                            <div className="col-md-7 text-center text-md-left">
                                <p className="mb-md-0">© All rights reserved-2024. Stoxx </p>
                            </div>
                            <div className="col-md-5 text-center text-md-right">
                                <p className="mb-0"> Landing Page </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default LandingPage;


