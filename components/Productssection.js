import Productitem from "./Productitem";
import styles from "../styles/products.module.css";
function Productssection(props) {
  return (
    <div className={styles.productssection}>
      {props.products.map((item) => (
        <Productitem product={item} key={item.id} />
      ))}
    </div>
  );
}

export default Productssection;
