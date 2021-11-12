/* eslint-disable @next/next/no-img-element */
import styles from "../styles/home.module.css";
// function Carousel() {
//   return (
//     <div className={styles.slider}>
//       <div className={styles.slides}>
//         <input type="radio" name="radio" id="radio1" className="radio1"/>
//         <input type="radio" name="radio" id="radio2"className="radio2" />
//         <input type="radio" name="radio" id="radio3" className="radio3"/>
//         <input type="radio" name="radio" id="radio4"className="radio4" />
//         <input type="radio" name="radio" id="radio5"className="radio5" />
//         <div className={`${styles.slide} ${styles.first}`}>
//           <Image src="/static/images/offers/offer1.jpg" />
//
//
//           <Image src="/static/images/offers/offer2.jpg" />
//
//
//           <Image src="/static/images/offers/offer3.jpg" />
//
//
//           <Image src="/static/images/offers/offer4.jpg" />
//
//
//           <Image src="/static/images/offers/offer5.jpg" />
//
//         <div className={styles.navigation_auto}>
//           <div className={styles.auto_btn1}>
//           <div className={styles.auto_btn2}>
//           <div className={styles.auto_btn3}>
//           <div className={styles.auto_btn4}>
//
//         <div className={`${styles.navigation_manual} z-10`}>
//           <label htmlFor="radio1" className={styles.manual_btn}></label>
//           <label htmlFor="radio2" className={styles.manual_btn}></label>
//           <label htmlFor="radio3" className={styles.manual_btn}></label>
//           <label htmlFor="radio4" className={styles.manual_btn}></label>
//           <label htmlFor="radio5" className={styles.manual_btn}></label>
//
//
//
//   );
// }

// export default Carousel;
import { useState, useEffect } from "react";
import Image from "next/image";
import { ServerStyleSheet } from "styled-components";
function Carousel() {
  const [state, setstate] = useState(0);
  useEffect(() => {
    setstate(window.innerWidth);
    console.log(window.screen.width);

    //  setTimeout(() => {
    //   document.getElementById("scroll").scrollLeft+=(state)
    // }, 2000);
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
        <input
          className=" m-2  group1"
          id="radio1"
          type="radio"
          onClick={() =>{ 
            (document.getElementById("scroll").scrollLeft = 0)}}
        />
        <label htmlFor="radio1" className={`${styles.label}`}></label>
        <input
          type="radio"
          id="radio2"
          className=" m-2 "
          onClick={() =>
            (document.getElementById("scroll").scrollLeft = 1 * state)
          }
        />
        <label htmlFor="radio2" className={`${styles.label} bg-transparent focus: bg-blue-400`}></label>
        <input
          type="radio"
          id="radio3"
          className=" m-2 "
          onClick={() =>
            (document.getElementById("scroll").scrollLeft = 2 * state)
          }
        />
        <label htmlFor="radio3" className={`${styles.label} bg-transparent focus: bg-blue-400`}></label>
        <input
          type="radio"
          id="radio4"
          className=" m-2 "
          onClick={() =>
            (document.getElementById("scroll").scrollLeft = 3 * state)
          }
        />
        <label htmlFor="radio4" className={`${styles.label} bg-transparent focus: bg-blue-400`}></label>
        <input
          type="radio"
          id="radio5"
          className=" m-2 "
          onClick={() =>
            (document.getElementById("scroll").scrollLeft = 4 * state)
          }
        />
        <label htmlFor="radio5" className={`${styles.label} bg-transparent focus: bg-blue-400`}></label>
      </div>
    </>
  );
}
export default Carousel;
