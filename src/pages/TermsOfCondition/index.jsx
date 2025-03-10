import "./styles.scss";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/Footer";
import HeaderImplementationComponent from "../../components/HeaderImplementationComponent";

const termsOfConditionText = `
# Terms and Conditions
Welcome to our Terms and Conditions page.

## Usage Rules
- You must be 18+
- Do not misuse our services
- Follow all legal regulations

## Disclaimer
- We are not responsible for third-party actions
- Data usage policies apply
`;

function TermsOfCondition() {
  return (
    <section className="terms-of-condition">
      <div className="terms-of-condition-header">
        <HeaderImplementationComponent />
      </div>
      <div className="terms-container">
        <ReactMarkdown>{termsOfConditionText}</ReactMarkdown>
      </div>
      <div className="terms-of-condition-footer">
        <Footer />
      </div>
    </section>
  );
}

export default TermsOfCondition;
