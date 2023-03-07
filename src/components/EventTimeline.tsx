import React from "react";
import { format } from "date-fns";
import styles from "../../styles/event/EventTimeline.module.css";

interface Props {
  timeline: [
    {
      id: number;
      title: string;
      start?: Date;
      end?: Date;
    }
  ];
}

const EventTimeline = ({ timeline }: Props): JSX.Element => {

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id="timeline"
      className={styles["container"]}
    >
      <h2 className={styles["heading"]}>Timeline</h2>
      <div className={styles["underline"]} />
      <div className={styles["content"]}>
        <div className={styles["timeline"]}>
          <div className={styles["cards"]}>
            {timeline.map((item) => {
              return (
                <div
                  className={styles["card"]}
                  key={item.id}
                >
                  <h3>{item.title}</h3>
                  {/* <p>{format(new Date(item.date), "do MMMM yyyy")}</p> */}
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
