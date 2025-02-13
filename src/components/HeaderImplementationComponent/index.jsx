import { useState, useEffect } from "react";
import image1 from "../../assets/Logo.svg";
import Hamburger from "hamburger-react";
import "./styles.scss";
import { Button } from "antd";

const HeaderImplementationComponent = () => {
    const links = ["Home", "Hotels", "Rooms", "About", "Contact"];
    
    const [activeLink, setActiveLink] = useState("");
    const [isOpen, setIsOpen] = useState(false); 
    const [scrolled, setScrolled] = useState(false); 

    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`HeaderImplementationComponent ${scrolled ? "scrolled" : ""}`}>
            <div className="logo fade-in">
                <img 
                    src={image1} 
                    alt="LankaStay logo with blue text and a modern design" 
                />
            </div>
            
            {/* Nav Links */}
            <div className={`nav-links ${isOpen ? "open" : ""}`}>  
                {links.map((link, index) => (
                    <a 
                        href="#" 
                        key={index} 
                        className={activeLink === link ? "active" : ""}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveLink(link);
                            setIsOpen(false); 
                        }}
                    >
                        {link}
                    </a>
                ))}
            </div>
            
            {/* Login Button */}
            <button className={`login-btn fade-in ${isOpen ? "show" : ""}`}>Login</button>

            {/* Hamburger Menu */}
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </nav>
    );
};

export default HeaderImplementationComponent;
