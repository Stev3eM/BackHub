import React from 'react';
import logo from './assets/Logo_no_background.svg';
import pic1 from './assets/Landingpage_noodles_in_bowl.svg';
import pic2 from './assets/Landingpage_noodles_with_basi.svg';
import pic3 from './assets/Landingpage_meat_pieces.svg';
import './Frontend.css';
import {LoginClient} from "./clients/login-client";

function App() {

  const loginClient = new LoginClient();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className= "body">
            <h2>
                Tired of standing in front of the stove feeling bored, cooking the same recipes? Welcome to our exciting cooking app, where culinary adventures await! Explore a world of flavor explosions and creative recipes that will elevate your cooking skills. Ready for the adventure in your kitchen? Let's cook together!
            </h2>

            <img src={pic1} className="Landingpage_noodles_in_bowl" alt="bowl" />
            <img src={pic2} className="Landingpage_noodles_with_basi" alt="basel" />
            <img src={pic3} className="Landingpage_meat_pieces" alt="meat" />

            <a
                className="Login-link"
                href="https://hurensohn.solutions/de-de/index.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => loginClient.sendLoginRequest('admin@cookhub.com', 'admin').then(result => console.log(result))}
            >
                Login
            </a>
        </div>
      </body>
    </div>

  );
}

export default App;
