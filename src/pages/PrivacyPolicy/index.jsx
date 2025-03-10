import Footer from "../../components/Footer";
import HeaderImplementationComponent from "../../components/HeaderImplementationComponent";
import "./styles.scss";
import ReactMarkdown from "react-markdown";

const privacyPolicyText = `
# Privacy Policy

Welcome to our Privacy Policy page.

## Data Collection
We collect user data to improve our services.

## Data Protection
We ensure that your data is protected.

## Contact Us
If you have any questions, please contact us at support@example.com.
`;

function PrivacyPolicy() {
  return (
    <section className="privacy-policy">
      <div className="privacy-policy-header">
        <HeaderImplementationComponent />
      </div>
      <div className="markdown-container">
        <ReactMarkdown>{privacyPolicyText}</ReactMarkdown>
      </div>
      <div className="privacy-policy-footer">
        <Footer />
      </div>
    </section>
  );
}

console.log(privacyPolicyText);

export default PrivacyPolicy;
