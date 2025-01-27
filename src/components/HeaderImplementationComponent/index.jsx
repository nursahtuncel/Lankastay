import image1 from "../../assets/Logo.svg";
import "./styles.scss";

const HeaderImplementationComponent = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [activeLink, setActiveLink] = React.useState('homepage');

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const links = ["Home", "Hotels", "Rooms", "About", "Contact"];

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
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
                        className={`fade-in ${activeLink === link ? 'active' : ''}`}
                        style={{animationDelay: `${index * 0.1}s`}}
                        onClick={() => setActiveLink(link)}
                    >
                        {link}
                    </a>
                ))}
            </div>
            <button className="login-btn fade-in" style={{animationDelay: `${links.length * 0.1}s`}}>
                Login
            </button>
        </nav>
    );
};

export default HeaderImplementationComponent;