import locationData from "../../constants/LocationData";
import "./styles.scss";

const SimilarHousingOptions = () => {
  const customTitles = {
    7: { title: "Green Lake", subtitle: "Nature" },
    8: { title: "Dog Clubs", subtitle: "Pool" },
    6: { title: "Labour and Wait", subtitle: "Shopping" },
    9: { title: "Snorkeling", subtitle: "Beach" },
  };

  const selectedLocations = locationData.filter((item) =>
    [7, 8, 6, 9].includes(item.id)
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
            {item.tag === "Popular Choice" && (
              <div className="popular-badge">
                Popular <span className="span-light">Choice</span>
              </div>
            )}

            <img
              src={item.img}
              alt={customTitles[item.id].title}
              className="housing-card-img"
            />
            <h3 className="housing-card-title">
              {customTitles[item.id].title}
            </h3>
            <p className="housing-card-subtitle">
              {customTitles[item.id].subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarHousingOptions;
