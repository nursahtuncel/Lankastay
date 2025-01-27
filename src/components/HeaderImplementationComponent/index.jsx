import image1 from "../../assets/Logo.svg";
import "./styles.scss";

const HeaderImplementationComponent = () => {
    const links = ["Home", "Hotels", "Rooms", "About", "Contact"];


    return (
        <nav className={`HeaderImplementationComponent`}>

            <div className="logo fade-in">
                <img 
                    src={image1}
                    alt="LankaStay logo with blue text and a modern design" 
                />
            </div>
            <div className="nav-links">
                        {links.map((link, index) => (
                            <a 
                                href="#" 
                                key={index} 
                                onClick={() => setActiveLink(link)}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                    <button className="login-btn fade-in">
                        Login
                    </button>           
                        
        </nav>
    );
};

export default HeaderImplementationComponent;