import styles from "../styles/cart.module.css";
import Image from "next/image";
import Header from "../components/Header";
import { cartcontext } from "../context/store";
import { useContext } from "react";
import Cartitem from "../components/cartitem";


function Cart() {
  const { state} = useContext(cartcontext);
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeading}>
        <strong>
          <h1>My Cart ({state.total_count} Items) </h1>
        </strong>
      </div>
      <div className={styles.cartitems}>
          {state.items.map((item,index)=><Cartitem product={item} key={index}/>)}
       

      </div>

      <div className={styles.cartfooter}>
        <Image
          src={"/static/images/lowest-price.png"}
          alt={"lowest price"}
          width="100%"
          height="50px"
        />
        <p>You wont find it cheaper anywhere</p>
      </div>
      <div className={styles.footer2}>
        <h3>Promo code can be applied on payment page</h3>
        <div>
           <h3>Proceed to Checkout</h3>
           <h3>Rs.{state.total_price}</h3>
        </div>
      </div>
    </div>
  );
}



export default Cart;
