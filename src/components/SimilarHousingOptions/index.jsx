import "./styles.scss";
import locationData from "../../constants/LocationData";

const SimilarHousingOptions = () => {
  const selectedLocations = locationData.filter((item) =>
    [6, 7, 8, 9].includes(item.id)
  );

  return (
    <div className="similar-housing">
      <div className="similar-housing-title">
        <h2 className="similar-housing-title-text">Treasure to Choose</h2>
      </div>

      <div className="similar-housing-images">
        {selectedLocations.map((item, index) => (
          <div
            key={item.id}
            className={`housing-card ${index === 2 ? "highlight" : ""}`}
          >
            {item.tag && (
              <div className="popular-badge">
                Popular <span className="span-light">Choice</span>
              </div>
            )}
            <img src={item.img} alt={item.title} className="housing-card-img" />
            <h3 className="housing-card-title">{item.title}</h3>
            <p className="housing-card-subtitle">{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarHousingOptions;
