import { Link } from 'react-router-dom';
import '../CssStyle/Navigationbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import stoxxlogo from '../Photos/logo1.jpg';

const NavbarwithSignup = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top shadow-sm bg-white ">
            <a href="land_page.html" className="navbar-brand">
                <img src={stoxxlogo} alt="Logo" style={{ width: '50px', height: '50px', marginRight: '-5px' }} />
                <span className="Span">Sto</span><span className="text-danger  font-weight-bold ">XX</span>
            </a>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto contents">
                    <li className="nav-item mr-5 list-items"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item mr-5 list-items"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item mr-5 list-items"><a href="#market" className="nav-link">Market</a></li>
                    <li className="nav-item mr-5 list-items"><a href="#plans" className="nav-link">Subscription</a></li>
                    <li className="nav-item mr-5 list-items"><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
                
                {/* <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-primary mr-3" type="submit">Search</button>
                </form> */}
                <div className="navbar-text ml-lg-3 mr-2 ml-3">
                    <Link to="/login" className="btn btn-primary text-white shadow ">Log in</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavbarwithSignup;