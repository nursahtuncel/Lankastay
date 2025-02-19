import React, { useState, useEffect } from "react";
import "./style.scss";
//import Cookies from "js-cookie";
import { Button } from "../Button";

function CookiesCard() {
  const [cookiesAccepted, setCookiesAccepted] = useState(null);

  useEffect(() => {
    const storedCookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (storedCookiesAccepted === "true" || storedCookiesAccepted === "false") {
      setCookiesAccepted(storedCookiesAccepted === "true");
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set("userAcceptedCookies", "true", {
      expires: 7,
      path: "/",
      sameSite: "strict",
    });
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
  };

  const handleDeclineCookies = () => {
    Cookies.remove("userAcceptedCookies");
    Cookies.set("userAcceptedCookies", "false");
    localStorage.setItem("cookiesAccepted", "false");
    setCookiesAccepted(false);
  };

  if (cookiesAccepted !== null) return null;

  return (
    <div className="cookieCard">
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
          <Button
            onClick={handleAcceptCookies}
            padding="8px 60px"
            type="primary">
            ok
          </Button>

          <Button
            onClick={handleDeclineCookies}
            padding="5px 32px"
            type="tertiary">
            decline
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CookiesCard;
