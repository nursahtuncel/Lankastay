import styles from "./ChoiceCard.module.scss";

import Ambalangode from "./../../assets/LocationImgs/Ambalangode.png";
import Ampara from "./../../assets/LocationImgs/Ampara.png";
import Beruwala from "./../../assets/LocationImgs/Beruwala.png";
import Colombo from "./../../assets/LocationImgs/Colombo.png";
import Dehiwala from "./../../assets/LocationImgs/Dehiwala.png";
import Dehiwala2 from "./../../assets/LocationImgs/Dehiwala2.png";
import Galle from "./../../assets/LocationImgs/Galle.png";
import Hikkaduwe from "./../../assets/LocationImgs/Hikkaduwe.png";
import Kandy from "./../../assets/LocationImgs/Kandy.png";
import Kandy2 from "./../../assets/LocationImgs/Kandy2.png";
import Kandy3 from "./../../assets/LocationImgs/Kandy3.png";
import Nuwereliya from "./../../assets/LocationImgs/Nuwereliya.png";
import Trincomalee from "./../../assets/LocationImgs/Trincomalee.png";

const locationData = {
  1: {
    title: "Blue Origin Fams",
    subtitle: "Galle, Sri Lanka",
    location: Galle,
    tag: "$50 per night",
  },
  2: {
    title: "Ocean Land",
    subtitle: "Trincomalee, Sri Lanka",
    location: Trincomalee,
    tag: "$22 per night",
  },
  3: {
    title: "Stark House",
    subtitle: "Dehiwala, Sri Lanka",
    location: Dehiwala,
    tag: "$856 per night",
  },
  4: {
    title: "Vinna Vill",
    subtitle: "Beruwala, Sri Lanka",
    location: Beruwala,
    tag: "$62 per night",
  },
  5: {
    title: "Bobox",
    subtitle: "Kandy, Sri Lanka",
    location: Kandy,
    tag: "$72 per night",
  },
  6: {
    title: "Shangri-La",
    subtitle: "Colombo, Sri Lanka",
    location: Colombo,
    tag: "Popular Choice",
  },
  7: {
    title: "Top View",
    subtitle: "Hikkaduwe, Sri Lanka",
    location: Hikkaduwe,
  },
  8: { title: "Green Villa", subtitle: "Kandy, Sri Lanka", location: Kandy2 },
  9: {
    title: "Wodden Pit",
    subtitle: "Ambalangode, Sri Lanka",
    location: Ambalangode,
  },
  10: { title: "Boutiqe", subtitle: "Kandy, Sri Lanka", location: Kandy3 },
  11: {
    title: "Modern House",
    subtitle: "Nuwereliya, Sri Lanka",
    location: Nuwereliya,
  },
  12: {
    title: "Silver Rain",
    subtitle: "Dehiwala, Sri Lanka",
    location: Dehiwala2,
  },
  13: {
    title: "Cashville",
    subtitle: "Ampara, Sri Lanka",
    location: Ampara,
    tag: "Popular Choice",
  },
};

const ChoiceCard = ({ id }) => {
  const {
    title,
    subtitle,
    location: LocationImage,
    tag,
  } = locationData[id] || locationData[1];

  const isAbsoluteStyle = id <= 5;

  const formatTag = (tag) => {
    if (!tag) return null;
    const words = tag.split(" ");
    const firstWord = words[0];
    const restOfTag = words.slice(1).join(" ");
    return (
      <span>
        <span className={styles.boldFirstWord}>{firstWord}</span> {restOfTag}
      </span>
    );
  };

  return (
    <div
      className={`${styles.choiceCardWrapper} ${
        isAbsoluteStyle ? styles.absoluteStyle : styles.flexStyle
      }`}
    >
      <div className={styles.imgContainer}>
        <img className={styles.locationImage} src={LocationImage} alt={title} />
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
