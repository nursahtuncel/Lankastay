import { Button } from "../../components/Button";
import "./styles.scss";
const handleClick = () => {
  alert("Button clicked!");
};
const Homepage = () => {
  return (
    <div className="homepage">
      <Button children="Search" onClick={handleClick} />
    </div>
  );
};

export default Homepage;
