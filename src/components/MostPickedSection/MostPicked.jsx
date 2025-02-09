import styles from "./MostPicked.module.scss";
import ChoiceCard from "../ChoiceCard/ChoiceCard";

const MostPickedSection = () => {
  return (
    <div className={styles.mostPickedSectionWrapper}>
      <div className={styles.mostPickedHeader}>
        <h1>Most Picked</h1>
        <div className={styles.upperSection}>
          <div className={styles.upperSectionLeft}>
            <ChoiceCard id={1} />
          </div>
          <div className={styles.upperSectionRight}>
            {[2, 3, 4, 5].map((id) => (
              <ChoiceCard key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.lowerSection}>
        {[6, 7, 8, 9, 10, 11, 12, 13].map((id) => (
          <ChoiceCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default MostPickedSection;
