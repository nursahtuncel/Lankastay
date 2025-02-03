import styles from "./ChoiceCard.module.scss";
import classNames from "classnames";
import locationImages from "./LocationImages";

const locationData = {
  1: {
    title: "Blue Origin Fams",
    subtitle: "Galle, Sri Lanka",
    location: "Galle",
    tag: "$50 per night",
  },
  2: {
    title: "Ocean Land",
    subtitle: "Trincomalee, Sri Lanka",
    location: "Trincomalee",
    tag: "$22 per night",
  },
  3: {
    title: "Stark House",
    subtitle: "Dehiwala, Sri Lanka",
    location: "Dehiwala",
    tag: "$856 per night",
  },
  4: {
    title: "Vinna Vill",
    subtitle: "Beruwala, Sri Lanka",
    location: "Beruwala",
    tag: "$62 per night",
  },
  5: {
    title: "Bobox",
    subtitle: "Kandy, Sri Lanka",
    location: "Kandy",
    tag: "$72 per night",
  },
  6: {
    title: "Shangri-La",
    subtitle: "Colombo, Sri Lanka",
    location: "Colombo",
    tag: "Popular Choice",
  },
  7: {
    title: "Top View",
    subtitle: "Hikkaduwe, Sri Lanka",
    location: "Hikkaduwe",
  },
  8: { title: "Green Villa", subtitle: "Kandy, Sri Lanka", location: "Kandy2" },
  9: {
    title: "Wodden Pit",
    subtitle: "Ambalangode, Sri Lanka",
    location: "Ambalangode",
  },
  10: { title: "Boutiqe", subtitle: "Kandy, Sri Lanka", location: "Kandy3" },
  11: {
    title: "Modern House",
    subtitle: "Nuwereliya, Sri Lanka",
    location: "Nuwereliya",
  },
  12: {
    title: "Silver Rain",
    subtitle: "Dehiwala, Sri Lanka",
    location: "Dehiwala2",
  },
  13: {
    title: "Cashville",
    subtitle: "Ampara, Sri Lanka",
    location: "Ampara",
    tag: "Popular Choice",
  },
};

const ChoiceCard = ({ id }) => {
  const { title, subtitle, location, tag } = locationData[id] || {};
  const LocationImage = location ? locationImages[location] : null;

  const isAbsoluteStyle = id && id <= 5;
  const isCompactStyle = id && id > 5;

  const formatTag = (tag) => {
    if (!tag) return null;
    const words = tag.split(" ");
    if (words.length === 1)
      return <span className={styles.boldFirstWord}>{tag}</span>;
    return (
      <span>
        <span className={styles.boldFirstWord}>{words[0]}</span>{" "}
        {words.slice(1).join(" ")}
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
      style={isCompactStyle ? { width: "300px" } : { width: "350px" }}
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
