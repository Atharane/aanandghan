import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "../styles/Hero.module.css";
import CloudLeft from "./svgs/hero/CloudLeft";
import CloudRight from "./svgs/hero/CloudRight";
import Layer1 from "./svgs/hero/Layer1";
import Layer2 from "./svgs/hero/Layer2";
import Layer3 from "./svgs/hero/Layer3";
import Layer4Left from "./svgs/hero/Layer4Left";
import Layer4Right from "./svgs/hero/Layer4Right";
import TreeLeft from "./svgs/hero/TreeLeft";
import TreeRight from "./svgs/hero/TreeRight";
import Sun from "./svgs/hero/Sun";
import DigitalTree from "./svgs/hero/DigitalTree";
import MangoTree from "./svgs/hero/MangoTree";
import DarkCloudLeft1 from "./svgs/hero/DarkCloudLeft1";
import DarkCloudLeft2 from "./svgs/hero/DarkCloudLeft2";
import DarkCloudRight1 from "./svgs/hero/DarkCloudRight1";
import DarkCloudRight2 from "./svgs/hero/DarkCloudRight2";
import Board from "./svgs/hero/Board";
import HeroCountDown from "./HeroCountDown";
import { BsChevronDoubleDown } from "react-icons/bs";

const Hero = (): JSX.Element => {
  const [greenState, setGreenState] = useState<any>(false);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem("hasAnimated");

    if (hasAnimated === "true") {
      setGreenState(true);
    } else {
      setGreenState(false);
    }
  }, []);

  const handleClick = () => {
    setGreenState(true);

    // set hasAnimated to true in sessionStorage
    // when clicked
    sessionStorage.setItem("hasAnimated", "true");
  };

  useEffect(() => {
    const deviceWidth = window.matchMedia("(max-width: 500px)");

    if (deviceWidth.matches) {
      containerRef.current.style.minHeight = (window as any).innerHeight + "px";
    }
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={`${styles["container"]} ${
          greenState ? styles["container-anim"] : ""
        }`}
      >
        <div className={styles["content"]}>
          {greenState && (
            <div className={styles["event-theme"]}>
              <div className={styles["title"]}>
                <img
                  className={styles["lettering"]}
                  src="lettering.png"
                  alt=""
                />
              </div>
              <div className={styles["theme"]}>
                <h1>????????????????????????????????? ???????????????</h1>
              </div>
              <div className={styles["underline"]}></div>
              <div className={styles["timing"]}></div>
              <div className={styles["countdown"]}>
                <HeroCountDown />
              </div>
              <div className={styles["mobile-board"]}>
                <p>??????????????????, ?????????????????????</p>
              </div>
            </div>
          )}
        </div>
        {!greenState && (
          <div className={styles["click-hint"]}>
            <p>
              {" "}
              <span>
                ????????????????????? {" "}
                <span className={styles["green-title"]}>????????????</span> ????????????????????????
                ?????????????????????
              </span>
              <span className={styles["thic"]}>Click the tree below</span>
              <span role="img" className={styles["down-arrow"]}>
                <BsChevronDoubleDown />
              </span>
            </p>
          </div>
        )}
        <div className={styles["bg"]}>
          {greenState && (
            <div className={styles["clouds"]}>
              <div className={styles["cloud-left"]}>
                <CloudLeft></CloudLeft>
              </div>
              <div className={styles["cloud-right"]}>
                <CloudRight></CloudRight>
              </div>
            </div>
          )}
          <div className={styles["landscape"]}>
            <div
              className={`${styles["layer-1"]} ${
                greenState ? styles["layer-1-anim"] : ""
              }`}
            >
              <Layer1></Layer1>
            </div>
            <div
              className={`${styles["layer-2"]} ${
                greenState ? styles["layer-2-anim"] : ""
              }`}
            >
              <div
                className={`${styles["board"]} ${
                  greenState ? styles["board-anim"] : ""
                }`}
              >
                <Board></Board>
                <div className={styles["views"]}>
                  <span>??????????????????,</span>
                  <span>?????????????????????</span>
                </div>
              </div>
              <div
                className={`${styles["trees"]} ${
                  greenState ? styles["trees-anim"] : ""
                }`}
              >
                <div
                  className={`${styles["left-tree"]} ${
                    greenState ? styles["left-tree-anim"] : ""
                  }`}
                >
                  <TreeLeft></TreeLeft>
                </div>
              </div>
              <Layer2></Layer2>
            </div>
            <div
              className={`${styles["layer-3"]} ${
                greenState ? styles["layer-3-anim"] : ""
              }`}
            >
              <div
                className={`${styles["trees"]} ${
                  greenState ? styles["trees-anim"] : ""
                }`}
              >
                <div
                  className={`${styles["right-tree"]} ${
                    greenState ? styles["right-tree-anim"] : ""
                  }`}
                >
                  <TreeRight></TreeRight>
                </div>
              </div>
              <Layer3></Layer3>
            </div>
            <div
              className={`${styles["layer-4-left"]} ${
                greenState ? styles["layer-4-left-anim"] : ""
              }`}
            >
              <Layer4Left></Layer4Left>
            </div>
            <div
              className={`${styles["layer-4-right"]} ${
                greenState ? styles["layer-4-right-anim"] : ""
              }`}
            >
              <Layer4Right></Layer4Right>
            </div>
            <div className={styles["layer-5"]}></div>
            <div className={styles["dark-clouds"]}>
              <div
                className={`${styles["dark-cloud-left-1"]} ${
                  greenState ? styles["move-dark-cloud-left"] : ""
                }`}
              >
                <DarkCloudLeft1></DarkCloudLeft1>
              </div>
              <div
                className={`${styles["dark-cloud-left-2"]} ${
                  greenState ? styles["move-dark-cloud-left"] : ""
                }`}
              >
                <DarkCloudLeft2></DarkCloudLeft2>
              </div>
              <div
                className={`${styles["dark-cloud-right-1"]} ${
                  greenState ? styles["move-dark-cloud-right"] : ""
                }`}
              >
                <DarkCloudRight1></DarkCloudRight1>
              </div>
              <div
                className={`${styles["dark-cloud-right-2"]} ${
                  greenState ? styles["move-dark-cloud-right"] : ""
                }`}
              >
                <DarkCloudRight2></DarkCloudRight2>
              </div>
            </div>
            {greenState && (
              <div className={styles["sun"]}>
                <Sun></Sun>
              </div>
            )}
            <div
              onClick={handleClick}
              className={`${styles["digital-tree"]} ${
                greenState ? styles["digital-tree-anim"] : ""
              }`}
            >
              {greenState ? (
                <MangoTree></MangoTree>
              ) : (
                <DigitalTree className={`${styles["dry-tree"]} `}></DigitalTree>
              )}
              {/* <MangoTree></MangoTree> */}
              {/* <DigitalTree className={`${styles["dry-tree"]} `}></DigitalTree> */}
            </div>
          </div>
        </div>
        <div
          className={`${styles["mobile-cont"]} ${
            greenState ? styles["mobile-cont-anim"] : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default Hero;
