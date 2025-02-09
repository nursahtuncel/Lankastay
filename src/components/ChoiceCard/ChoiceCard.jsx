import styles from "./ChoiceCard.module.scss";
import classNames from "classnames";
import locationImages from "./LocationImages";
import locationData from "../../constants/LocationData";

const ChoiceCard = ({ id }) => {
  const locationInfo = locationData.find((item) => item.id === id);
  if (!locationInfo) return null;

  const { title, subtitle, location, tag } = locationInfo;
  const LocationImage = location ? locationImages[location] : null;

  const isAbsoluteStyle = id <= 5;
  const isCompactStyle = id > 5;

  const formatTag = (tag) => {
    if (!tag) return null;
    const [firstWord, ...rest] = tag.split(" ");
    return (
      <span>
        <span className={styles.boldFirstWord}>{firstWord}</span>{" "}
        {rest.join(" ")}
      </span>
    );
  };

  return (
    <div
      className={classNames(styles.choiceCardWrapper, {
        [styles.absoluteStyle]: isAbsoluteStyle,
        [styles.flexStyle]: !isAbsoluteStyle,
        [styles.compactStyle]: isCompactStyle,
      })}
      style={{ width: isCompactStyle ? "300px" : "400px" }}
    >
      <div className={styles.imgContainer}>
        {LocationImage && (
          <img
            className={styles.locationImage}
            src={LocationImage}
            alt={`View of ${title}`}
          />
        )}
        {tag && <div className={styles.priceTag}>{formatTag(tag)}</div>}
        {isAbsoluteStyle && (
          <div className={styles.absoluteInfo}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
        )}
      </div>
      {!isAbsoluteStyle && (
        <div className={styles.flexInfo}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      )}
    </div>
  );
};

export default ChoiceCard;
