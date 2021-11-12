import Link from "next/link";
import styles from "../styles/products.module.css";
function Sidenav(props ){
    
  return (
    <div>
      {props.array.sort((a, b) => {
          return a.order - b.order;
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <Link href={`/Products/${item.name.split(" ").join("")}`} className={styles.navbarlink}>
                <a className={`${styles.navbarlink} hover:scale-125 hover:text-center `}>{item.name}</a>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Sidenav;
