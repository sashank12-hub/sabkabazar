import styles from "../styles/home.module.css";
function Carousel() {
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        <input type="radio" name="radio" id="radio1" className="radio1"/>
        <input type="radio" name="radio" id="radio2"className="radio2" />
        <input type="radio" name="radio" id="radio3" className="radio3"/>
        <input type="radio" name="radio" id="radio4"className="radio4" />
        <input type="radio" name="radio" id="radio5"className="radio5" />
        <div className={`${styles.slide} ${styles.first}`}>
          <img src="/static/images/offers/offer1.jpg" />
        </div>
        <div className={styles.slide}>
          <img src="/static/images/offers/offer2.jpg" />
        </div>
        <div className={styles.slide}>
          <img src="/static/images/offers/offer3.jpg" />
        </div>
        <div className={styles.slide}>
          <img src="/static/images/offers/offer4.jpg" />
        </div>
        <div className={styles.slide}>
          <img src="/static/images/offers/offer5.jpg" />
        </div>
        <div className={styles.navigation_auto}>
          <div className={styles.auto_btn1}></div>
          <div className={styles.auto_btn2}></div>
          <div className={styles.auto_btn3}></div>
          <div className={styles.auto_btn4}></div>
        </div>
        <div className={`${styles.navigation_manual} z-10`}>
          <label htmlFor="radio1" className={styles.manual_btn}></label>
          <label htmlFor="radio2" className={styles.manual_btn}></label>
          <label htmlFor="radio3" className={styles.manual_btn}></label>
          <label htmlFor="radio4" className={styles.manual_btn}></label>
          <label htmlFor="radio5" className={styles.manual_btn}></label>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
