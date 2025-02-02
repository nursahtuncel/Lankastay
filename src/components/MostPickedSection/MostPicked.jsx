import styles from "./MostPicked.module.scss";
import ChoiceCard from "../ChoiceCard/ChoiceCard";

const MostPickedSection = () => {
  return (
    <div className={styles.mostPickedSectionWrapper}>
      <div className={styles.mostPickedHeader}>
        <h1>Most Picked</h1>
        <div className={styles.upperSection}>
          <ChoiceCard id={1} />
          <div className={styles.upperLocations}>
            <ChoiceCard id={2} />
            <ChoiceCard id={3} />
            <ChoiceCard id={4} />
            <ChoiceCard id={5} />
          </div>
        </div>
      </div>
      <div className={styles.lowerSection}>
        <ChoiceCard id={6} />
        <ChoiceCard id={7} />
        <ChoiceCard id={8} />
        <ChoiceCard id={9} />
        <ChoiceCard id={10} />
        <ChoiceCard id={11} />
        <ChoiceCard id={12} />
        <ChoiceCard id={13} />
      </div>
    </div>
  );
};

export default MostPickedSection;
