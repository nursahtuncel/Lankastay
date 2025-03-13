import "./style.scss";
import FAQs from "./FAQComponent";

function Help() {
  return (
    <div className="helpContainer">
      <div className="helpTitle">
        <h3>Help</h3>
        <p>What are you looking for?</p>
      </div>
      <hr style={{ border: "1px solid #EDF2F6" }} />
     <FAQs/>

    </div>
  );
}

export default Help;
