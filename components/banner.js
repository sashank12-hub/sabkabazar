import styles from "../styles/home.module.css";
import Image from "next/image";
import Banneritem from "./Banneritem";
function Banner(props) {
    
  return (
    <div className={styles.banner}>
      {props.array
        .sort((a, b) => {
            return a.order - b.order;
        })
        .map((item) => (<Banneritem item={item} key={item.key}/>))}
    </div>
  );
}

export default Banner;
