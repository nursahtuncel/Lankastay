import Footer from "../../components/Footer";
import HeaderImplementationComponent from "../../components/HeaderImplementationComponent";
import "./styles.scss";
import ReactMarkdown from "react-markdown";

const privacyPolicyText = `
# Privacy Policy

Welcome to our Privacy Policy page. We value your privacy and strive to protect your personal data at all times. In this policy, we explain how we collect, use, and safeguard the information you provide when interacting with our website or services.

## Data Collection

We collect user data to improve our services and enhance user experience. The types of data we collect include, but are not limited to:

- **Personal Information:** Name, email address, and other contact details.
- **Usage Data:** Pages visited, links clicked, and other browsing behavior.
- **Cookies and Tracking:** Used for analytics, marketing, and functionality.

## Data Protection

We ensure that your data is protected using industry-standard security measures, which include:

1. **Encryption:** Sensitive data is encrypted at rest and in transit.
2. **Access Control:** Only authorized personnel can access your data.
3. **Regular Audits:** We periodically review our security protocols to prevent unauthorized access.

## Data Retention

We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.

## Third-Party Services

We may share anonymized usage data with trusted third-party partners for analytics and service improvements. However, we do not sell or rent your personal information to any third party.

## Children's Privacy

Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will take steps to remove such data from our systems.

## Contact Us

If you have any questions or concerns about this policy or how we handle your personal data, please contact us at [support@example.com](mailto:support@example.com). We will do our best to address your inquiries promptly and thoroughly.
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

export default PrivacyPolicy;
