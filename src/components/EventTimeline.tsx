import React from "react";
import styles from "../styles/event/EventTimeline.module.css";

const timeline = [
  {
    id: 1,
    title: "गृहप्रवेश",
    start: "सकाळी ..... ते ......",
  },
  {
    id: 2,
    title: "वास्तुशांती",
    start: "सकाळी ..... ते ......",
  },
  {
    id: 2,
    title: "भोजन सोहळा",
    start: " ....... पासून",
  },
];

const EventTimeline = (): JSX.Element => {

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id="timeline"
      className={styles["container"]}
    >
      <h2 className={styles["heading"]}>टाइमलाइन</h2>
      <div className={styles["underline"]} />
      <div className={styles["content"]}>
        <div className={styles["timeline"]}>
          <div className={styles["cards"]}>
            {timeline.map((item) => {
              return (
                <div className={styles["card"]} key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.start}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
