import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
export const Home = () => {
  return (
<div>
          <style dangerouslySetInnerHTML={{__html: "\n        \n        .scrolling-wrapper {\n            overflow-x: scroll;\n            overflow-y: hidden;\n            white-space: nowrap;\n            }\n        \n        .card {\n            display: inline-block;\n            width: 250px; /* Adjust the width of each card */\n            height: 350px; /* Adjust the height of each card */\n            transition: transform 0.9s ease; \n            margin-right: 13px;\n            border-width:4px; /* Adjust margin between cards */\n        }\n        .card img {\n            height: 200px; /* Adjust the height of the image */\n            object-fit: cover; /* Preserve aspect ratio while filling the element */\n        }\n        .card:hover {\n            transform: scale(1.05); /* Increase size on hover */\n            box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n        }\n        .stock-price {\n            font-size: 20px;\n            font-weight: bold;\n            margin-top: 10px;\n            text-align: center;\n        }\n    " }} />
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 ">
            <img src="C:\SPP\images\land\logo1.jpg" alt="Logo" style={{width: '50px', height: '50px', marginRight: '-5px'}} />
            <span className="text-success  font-weight-bold ml-2">Sto</span><span className="text-danger  font-weight-bold ">XX</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-search" /></span>
                    </div>
                    <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
                  </div>
                </li>
                <button className="btn btn-primary ml-3">Explore</button>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa-solid fa-circle-user ml-2" style={{fontSize: '27px'}} />
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
          <div className="container ">
            <div className="row">
              <div className="col">
                <div id="card-container" className="scrolling-wrapper">
                  {/* Card 1 */}
                  <div className="card" data-symbol="TATAMOTORS" id="card1">
                    <img src="https://static.brandirectory.com/logos/tats001_tata.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text text-center font-weight-bold mt-3">Tata Motors</p>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="card" data-symbol="AAPL" id="card2">
                    <img src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text text-center font-weight-bold mt-3">Apple</p>
                    </div>
                  </div>
                  {/* Repeat for more cards */}
                  {/* Card 3 */}
                  <div className="card" data-symbol="TSLA" id="card3">
                    <img src="https://media.designrush.com/inspirations/269904/conversions/1.Tesla-Logo-Design-preview.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text text-center font-weight-bold mt-3">Tesla</p>
                    </div>
                  </div>
                  {/* Card 4 */}
                  <div className="card" data-symbol="IBM" id="card4">
                    <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122015/untitled-1_84.png?itok=6yX4oOLu" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text text-center font-weight-bold mt-3">IBM</p>
                    </div>
                  </div>
                  {/* Repeat for more cards */}
                  {/* Card 5 */}
                  <div className="card" data-symbol="TCS" id="card5">
                    <img src="https://www.siegelgale.com/app/uploads/2021/10/SGCOM_Blog_211018.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text text-center font-weight-bold mt-3">TCS</p>
                    </div>
                  </div>
                  {/* Card 6 */}
                  <div className="card">
                    <img src="image_url_6.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text text-center font-weight-bold mt-3">Text 6</p>
                    </div>
                  </div>
                  {/* Repeat for more cards */}
                  {/* Card 7 */}
                  <div className="card">
                    <img src="image_url_7.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">Text 7</p>
                    </div>
                  </div>
                  {/* Card 8 */}
                  <div className="card">
                    <img src="image_url_8.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">Text 8</p>
                    </div>
                  </div>
                  {/* Repeat for more cards */}
                  {/* Card 9 */}
                  <div className="card">
                    <img src="image_url_9.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">Text 9</p>
                    </div>
                  </div>
                  {/* Card 10 */}
                  <div className="card">
                    <img src="image_url_10.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">Text 10</p>
                    </div>
                  </div>
                  {/* Repeat for more cards */}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

