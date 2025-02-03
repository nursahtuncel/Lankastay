import "./styles.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; 


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

  Breadcrumb.propTypes = {
    currentLocation: PropTypes.string.isRequired, 
    homePath: PropTypes.string.isRequired,      
  };
  
  export default Breadcrumb;

 