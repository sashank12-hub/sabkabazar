import Link from "next/link";
import styles from "../styles/products.module.css";
function Sidenav(props ){
    
  return (
    <div >
      {props.array.sort((a, b) => {
          return a.order - b.order;
        })
        .map((item) => {
          return (
            <>
              <Link href={`/Products/${item.name.split(" ").join("")}`} className={styles.navbarlink}key={item.id}>
                <a className={styles.navbarlink}>{item.name}</a>
              </Link>
            </>
          );
        })}
    </div>
  );
}

export default Sidenav;
