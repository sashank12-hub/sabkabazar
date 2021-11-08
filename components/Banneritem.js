import styles from "../styles/home.module.css";
import Link from "next/link"
function Banneritem({item}) {
    return (
        (item.enabled) && <div className={styles.Banneritem}>
          <div className={styles.col1}>
        
            <img src={item.imageUrl} alt={`${item.key}`} />
          </div>
          <div className={styles.col2}>
            <strong> <h1>{item.name}</h1> </strong>
            <p>{item.description}</p>
            <Link href={`/Products/${item.name.split(" ").join("")}`} >
            <a className={styles.button}>{`Explore ${item.name}`} </a>
            </Link>

            
          </div>
        </div>
      );
}

export default Banneritem
