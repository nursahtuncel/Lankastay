import "./style.scss";

export const Button = ({ padding, type, children, style, className }) => {
  switch (type) {
    case "primary":
      type = "primary-button"; //bu button'un renk kodu :$main-btn-color
      break;
    case "secondary":
      type = "secondary-button"; //bu button'un renk kodu:$primary-color
      break;
    case "tertiary":
      type = "tertiary-button"; //bu button'un arkaplan rengi yok sadece border'ı var
      break;
    case "fourth":
      type = "fourth-button"; //bu button'un shadow özelliği var
      break;
    default:
      type = "default-button"; // cansel button
  }
  return (
    <button style={{ padding, ...style }} className={`${type} ${className}`}>
      {children}
    </button>
  );
};
