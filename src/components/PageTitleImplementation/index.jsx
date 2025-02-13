
import "./styles.scss";

const PageTitleImplementation = ({ title, description }) => {
    return (
        <div className="pagetitle-implementation">
            <h1 className="pagetitle-implementation-title">{title}</h1>
            <p className="pagetitle-implementation-descriptions">{description}</p>
        </div>

    );
};

export default PageTitleImplementation;