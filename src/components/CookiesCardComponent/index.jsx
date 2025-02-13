import React, { useState } from "react";
import "./style.scss";
import Cookies from "js-cookie";

function CookiesCard() {
  const [cookiesAccepted, setCookiesAccepted] = useState(() => {
    return localStorage.getItem("cookiesAccepted") === "true";
  });

  const handleAcceptCookies = () => {
    Cookies.set("userAcceptedCookies", "true", { expires: 7 });
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
  };

  const handleDeclineCookies = () => {
    Cookies.remove("userAcceptedCookies");
    localStorage.setItem("cookiesAccepted", "false");
    setCookiesAccepted(false);
  };

  return (
    <div
      className="cookieCard"
      style={{ display: cookiesAccepted ? "none" : "block" }}>
      <div className="inner">
        <div className="textContainer">
          <div className="header">THIS WEBSITE USES COOKIES</div>
          <div className="description">
            We use cookies to personalise content and ads, to provide social
            media features and to analyse our traffic. We also share information
            about your use of our site with our social media, advertising and
            analytics partners who may combine it with other information that
            you’ve provided to them or that they’ve collected from your use of
            their services. You consent to our cookies if you continue to use
            our website.
          </div>
        </div>

        <div className="actions">
          <button onClick={handleAcceptCookies} className="ok">
            OK
          </button>

          <button onClick={handleDeclineCookies} className="decline">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookiesCard;
