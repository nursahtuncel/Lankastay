/* eslint-disable react/prop-types */
import "./styles.scss";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentLocation, homePath }) => {
  return (
    <section className="breadcrumb">
      <Link to={homePath} className="breadcrumb-link">
        Home
      </Link>

      <span className="breadcrumb-separator">/</span>

      <span className="breadcrumb-current">{currentLocation}</span>
    </section>
  );
};

export default Breadcrumb;
