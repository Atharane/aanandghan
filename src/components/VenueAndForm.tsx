import React, { useEffect, useState } from "react";
import styles from "../styles/VenueAndForm.module.css";
import ContactForm from "./ContactForm";
import { useRouter } from "next/router";
import Image from "next/image";

const VenueAndForm = (): JSX.Element => {
  const [renderMap, setRenderMap] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const onScroll = (event: Event) => {
      if (
        window.scrollY > window.innerHeight &&
        window.scrollY < window.innerHeight + 100
      ) {
        setRenderMap(true);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (window.scrollY > window.innerHeight) {
      setRenderMap(true);
    }
  }, [router.pathname]);

  return (
    <div id="venue" className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["heading"]}>
          <h2 className="yellow-bottom">पत्ता</h2>
        </div>
        <div className={styles["main"]}>
          <div className={styles["address"]}>
            <div className={styles["map"]}>
              {renderMap ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5415057543146!2d73.39293451438844!3d16.699811688494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea7ecaa2ddd09d%3A0xabd3513bcd48f1b5!2sDhartale%20Police%20Chowki%20Dhartale!5e0!3m2!1sen!2sin!4v1678194940938!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              ) : null}
            </div>
            <p>
              <b>पत्ता:</b>
              <br />
              <span>
                आनंदघन, कोतापूर तीटा , तालुका राजापूर, जिल्हा रत्नागिरी , पिन
                ४१६७०१
              </span>
            </p>
          </div>
          <div className={styles["campus-image"]}>
            <Image
              src={"/media/house.jpg"}
              layout="fill"
              alt="iiitn's campus"
              draggable="false"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueAndForm;
