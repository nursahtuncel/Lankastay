import { List, Row, Col } from "antd";
import "./style.scss";
import { useState } from "react";
import PropTypes from "prop-types"; 
function FAQs({ category }) {
 
  const questions = {
    generalQuestions: [
      {
        key: "1",
        question: "How do I book a hotel room on your website?",
        cevap: "Simply enter your destination, check-in and check-out dates, and the number of guests. Browse the available hotels, select a room, and proceed with the booking by providing your details and payment information."
      },
      {
        key: "2",
        question: "Can I modify or cancel my reservation after booking?",
        cevap: "Yes, you can modify or cancel your reservation by logging into your account or contacting customer service."
      },
      {
        key: "3",
        question: "Do I need to create an account to make a reservation?",
        cevap: "No, you don't need to create an account. However, creating an account makes it easier to manage your bookings."
      },
      {
        key: "4",
        question: "How do I check my booking details?",
        cevap: "You can check your booking details by logging into your account or through the email confirmation sent after booking."
      }
    ],
    payment: [
      {
        key: "1",
        question: "What payment methods do you accept?",
        cevap: "We accept major credit and debit cards (Visa, Mastercard, American Express), PayPal, and some digital wallets. Some hotels may also offer the option to pay at the property.."
      },
      {
        key: "2",
        question: "Is my payment information secure?",
        cevap: "Yes, all payment transactions are secured with SSL encryption."
      },
      {
        key: "3",
        question: "Are there any additional fees or taxes included in the price?",
        cevap: "Yes, the total price includes applicable taxes and fees."
      },
      {
        key: "4",
        question: "Do you offer any discounts or promo codes?",
        cevap: "We occasionally offer discounts or promo codes, so keep an eye on our promotions page."
      }
    ],
    cancellation: [
      {
        key: "1",
        question: "What is the cancellation policy?",
        cevap: "The cancellation policy varies by hotel and room type. Some bookings are fully refundable if canceled before a certain date, while others may have penalties. Please check the hotel’s policy before booking."
      },
      {
        key: "2",
        question: "How long does it take to receive a refund after cancellation?",
        cevap: "Refund processing time depends on the payment method. It usually takes 5-7 business days."
      },
      {
        key: "3",
        question: "Will I be charged if I don’t show up at the hotel?",
        cevap: "Yes, depending on the hotel’s cancellation policy, you may be charged a no-show fee."
      },
      {
        key: "4",
        question: "Can I modify my booking without extra charges?",
        cevap: "It depends on the hotel’s policy. You can modify your booking without extra charges if it is within the allowed modification period."
      }
    ]
  };

  const selectedCategory = questions[category] || [];
  const [activeKey, setActiveKey] = useState(selectedCategory[0]?.key || "");
  const activeAnswer = selectedCategory.find((item) => item.key === activeKey)?.cevap;

  return (
    <Row gutter={16} className="FAQContainer">
      
      <div className="categoryTitle">
 {/* buraya Kategori başlıkları gelecek */}
      </div>

      {/* Left:questions */}
      <Col span={12} style={{
        paddingBottom:"15px"
      }}>
        <List
          dataSource={selectedCategory}
          renderItem={(item) => (
            <List.Item
              onClick={() => setActiveKey(item.key)}
              style={{
                padding: "12px 16px",
                paddingTop: "15px",
                cursor: "pointer",
                color: activeKey === item.key ? "#4A85F6" : "#757575",
                border: "none",
                borderBottom: "1px solid #EDF2F6",
                borderLeft: `4px solid ${activeKey === item.key ? "#4A85F6" : "#EDF2F6"}`
              }}
            >
              {item.question}
            </List.Item>
          )}
        />
      </Col>

      {/* Right: Answer */}
      <Col span={12}>
        <div style={{ padding: "16px" }}>
          <p className="answer"
            style={{
       
            }}
          >
            {activeAnswer || "Please select a question to view the answer."}
          </p>
        </div>
      </Col>
    </Row>
  );
}
FAQs.propTypes = {
  category: PropTypes.string.isRequired, 
};
export default FAQs;
