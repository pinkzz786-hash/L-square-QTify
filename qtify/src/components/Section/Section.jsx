import { useState } from "react";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

function Section({ title, data = [], renderComponent }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>

        <button
          className={styles.button}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.cards}>
          {data.map((item) => renderComponent(item))}
        </div>
      ) : (
        <Carousel
          data={data}
          renderComponent={renderComponent}
        />
      )}
    </div>
  );
}

export default Section;