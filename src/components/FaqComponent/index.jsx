import { Collapse } from "antd";
import "./style.scss";

const text1 = `We provide personalized customer support, exclusive discounts, and a seamless booking experience to make your journey smooth and hassle-free.`;
const text2 = `Our customers' favorite destinations vary, but some of the top choices include tropical beaches, historical cities, and adventurous mountain retreats.`;
const text3 = `Payments can be made through credit cards, PayPal, or direct bank transfers. We ensure secure transactions for all our customers.`;
const text4 = `Consider factors like budget, climate, local attractions, and accommodation quality when choosing your vacation destination.`;

const items = [
  {
    key: "1",
    label: (
      <span className="faq-title">
        What do we do to help you other than other companies?
      </span>
    ),
    children: <p className="faq-content">{text1}</p>,
  },
  {
    key: "2",
    label: (
      <span className="faq-title">
        What is the favorite destination for our customers?
      </span>
    ),
    children: <p className="faq-content">{text2}</p>,
  },
  {
    key: "3",
    label: <span className="faq-title">How do you make the payment?</span>,
    children: <p className="faq-content">{text3}</p>,
  },
  {
    key: "4",
    label: (
      <span className="faq-title">
        What criteria should you consider when choosing a destination for your
        vacation?
      </span>
    ),
    children: <p className="faq-content">{text4}</p>,
  },
];

const FAQs = () => {
  return (
    <div className="faq-container">
      <h3 className="title">FAQ</h3>{" "}
      <Collapse items={items} defaultActiveKey={["1"]} ghost />
    </div>
  );
};

export default FAQs;
