import "./style.scss";

export const Button = ({ padding, type, children }) => {
  switch (type) {
    case "primary":
      type = "primary-button";
      break;
    case "secondary":
      type = "secondary-button";
      break;
    case "tertiary":
      type = "tertiary-button";
      break;
    case "fourth":
      type = "fourth-button";
      break;
    default:
      type = "default-button";
  }
  return (
    <button style={{ padding }} className={type}>
      {children}
    </button>
  );
};
