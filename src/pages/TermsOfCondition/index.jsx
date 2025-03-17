import "./styles.scss";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/Footer";
import HeaderImplementationComponent from "../../components/HeaderImplementationComponent";

const termsOfConditionText = `
# Terms and Conditions

Welcome to our Terms and Conditions page. By accessing or using our services, you agree to be bound by the terms described here. If you do not agree with any part of these terms, you must not use our services.

## Usage Rules

- You must be 18+ to access or use our services.
- Do not misuse our services or use them for illegal activities.
- Follow all legal regulations and comply with any local, state, or federal laws.

### Prohibited Activities

We strictly prohibit the following activities:

- Unauthorized distribution or sharing of content obtained through our services.
- Engaging in any activity that disrupts or interferes with the normal operation of our services.
- Attempting to breach security measures or gain unauthorized access to our systems or data.

## Disclaimer

- We are not responsible for third-party actions that may affect your use of our services.
- Data usage policies apply, and we reserve the right to modify them at any time.
- The services are provided on an “as is” and “as available” basis without warranties of any kind.

### Limitation of Liability

We do not guarantee that the services will always be uninterrupted, secure, or error-free. We will not be liable for any damages resulting from the use or inability to use our services, including but not limited to direct, indirect, incidental, punitive, or consequential damages.

## Governing Law

These terms and conditions are governed by the laws of [Your Country or Region]. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts in [Your City or Region].

## Changes to Terms

We may update or modify these Terms and Conditions at any time. We will notify you of any changes by posting the updated terms on our website. Your continued use of our services after changes have been posted constitutes your acceptance of the new terms.

## Contact Us

If you have any questions regarding these terms or wish to request any clarifications, please contact us at [support@example.com](mailto:support@example.com). We will do our best to address your inquiries promptly and thoroughly.
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
