import "./style.scss";

function CookiesCard() {
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
          <a href="#" className="ok">
            OK
          </a>
          <a href="#" className="decline">
            Decline
          </a>
        </div>
      </div>
    </div>
  );
}

export default CookiesCard;
