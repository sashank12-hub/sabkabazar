/* eslint-disable @next/next/no-img-element */
import styles from "../styles/home.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
function Carousel() {
  const [state, setstate] = useState(0);
  useEffect(() => {
    setstate(window.innerWidth);
  }, []);

  return (
    <>
      <div className={styles.slider} id="scroll">
        <img src="/static/images/offers/offer1.jpg" className=" " alt="image" />

        <img src="/static/images/offers/offer2.jpg" className=" " alt="image" />

        <img src="/static/images/offers/offer3.jpg" className=" " alt="image" />

        <img src="/static/images/offers/offer4.jpg" className=" " alt="image" />

        <img src="/static/images/offers/offer5.jpg" className=" " alt="image" />
      </div>

      <div className={styles.radio}>
        <button
          className={`${styles.label} focus:bg-blue-400`}
          onClick={() => {
            document.getElementById("scroll").scrollLeft = 0;
          }}
        ></button>

        <button
          className={`${styles.label}  focus:bg-blue-400`}
          onClick={() =>
            (document.getElementById("scroll").scrollLeft = 1 * state)
          }
        ></button>

        <button
          className={`${styles.label}  focus:bg-blue-400 `}
          onClick={() =>
            (document.getElementById("scroll").scrollLeft = 2 * state)
          }
        ></button>

        <button
          className={`${styles.label} focus:bg-blue-400 `}
          onClick={() =>
            (document.getElementById("scroll").scrollLeft = 3 * state)
          }
        ></button>

        <button
          className={`${styles.label} focus:bg-blue-400 `}
          onClick={() =>
            (document.getElementById("scroll").scrollLeft = 4 * state)
          }
        ></button>
      </div>
    </>
  );
}
export default Carousel;
