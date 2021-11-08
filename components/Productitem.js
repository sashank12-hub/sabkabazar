import styles from "../styles/products.module.css"
import Image from "next/image"
import Link from "next/link"
function Productitem(props) {
    return (
        <div className={styles.Productitem}>
            <strong><h1 style={{padding:"10px"}}>{props.product.name}</h1></strong>
            
            <Image src={props.product.imageURL}  width={"190px"} height="200px" alt={"product"} className={styles.image} />
            <p className={styles.description}>
                {props.product.description}
            </p>
            <div className={styles.bottom}>
                <p>MRP Rs.{props.product.price}</p>
                <button  className={styles.button}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Productitem
