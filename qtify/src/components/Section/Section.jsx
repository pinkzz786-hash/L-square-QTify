import React, { useState } from "react";
import styles from "./Section.module.css";


function Section({ title, children }) {
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

      <div className={styles.cards}>
        {showAll
          ? children
          : React.Children.toArray(children).slice(0, 7)}
      </div>
    </div>
  );
}

export default Section;