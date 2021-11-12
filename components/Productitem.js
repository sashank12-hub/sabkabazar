import styles from "../styles/products.module.css";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { cartcontext } from "../context/store";
import * as types from "../context/types";
import router from "next/router";
function Productitem(props) {
  const { state, dispatch } = useContext(cartcontext);
  return (
    <div className={styles.Productitem}>
      <strong>
        <h1 style={{ padding: "10px" }}>{props.product.name}</h1>
      </strong>

      <Image
        src={props.product.imageURL}
        width={"190px"}
        height="200px"
        alt={"product"}
        className={styles.image}
      />
      <p className={styles.description}>{props.product.description}</p>
      <div className={styles.bottom}>
        <p>MRP Rs.{props.product.price}</p>
        <button
          className={`${styles.button} hover:bg-red-500 hover:scale-125 transition duration-500 ease-in-out focus:bg-black `}
          onClick={() =>{
            if(!state.user.token){
              alert("sign up first");
              router.push("/Signup")
            }
            setTimeout(() => {
              dispatch({
                type: types.ADDTOCART,
                payload: props.product,
              });
            }, 700)}
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Productitem;
