import styles from "../styles/cart.module.css";
import Image from "next/image";
import Header from "../components/Header";
import { cartcontext } from "../context/store";
import { useContext } from "react";
import Cartitem from "../components/cartitem";
import * as types from "../context/types";
import { useRouter } from "next/router";

function Cart() {
  const router = useRouter();
  const { state, dispatch } = useContext(cartcontext);
  return (
    <div className={state.opencart ? `block ` : "hidden"}>
      <div className=" z-100 fixed top-0  bg-black w-screen h-screen opacity-60"></div>
      <div className="  w-96 fixed     top-14 z-30  bg-gray-100  rounded-lg right-20 min-h-32  ">
        <div className="bg-black text-white opacity-200 pt-3 text-md font-light text-center  flex-row flex justify-between">
          <strong>
            <h1 className="pl-3">My Cart ({state.total_count} Items) </h1>
          </strong>
          <h3
            className="text-lg pr-3 cursor-pointer p-1"
            onClick={() =>
              dispatch({
                type: types.OPEN,
                payload: false,
              })
            }
          >
            ×
          </h3>
        </div>
        {state.total_count > 0 && (
          <>
            <div className={`overflow-y-scroll mt-1 scroll  h-auto max-h-72`}>
              {state.items.map((item, index) => (
                <Cartitem product={item} key={index} />
              ))}
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
          </>
        )}
        {state.total_count <= 0 && (
          <div className=" mt-32  mb-32 text-black text-center">
            <h3 className=" font-bold">No Items in Cart</h3>
            <h3>Yor favourite is just a click away</h3>
          </div>
        )}

        <div className={`${styles.footer2} cursor-pointer`}>
          {state.total_count > 0 ? (
            <>
              <h3>Promo code can be applied on payment page</h3>
              <div
                className={`${styles.checkout} w-full mt hover:bg-red-500 hover:scale-110 focus:bg-black`}
                onClick={async () =>{
                  
                    const res= await fetch("/api/checkout", {
                      method:"POST",
                      body:JSON.stringify({cart:state})
                      
                    })
                    const data=await res.json()
                    if(res.status==200){
                      alert("successful")
                      dispatch({
                        type:types.DELETEALLITEMS
                      })
                      setTimeout(() => {
                        dispatch({
                          type:types.OPEN,
                          payload:false
                        })
                      }, 2000);
                      
                      
                    }
                   
                  }
                    
                 
                }
              >
                <h3>Proceed to Checkout</h3>
                <h3>Rs.{state.total_price}</h3>
              </div>
            </>
          ) : (
            <>
              <div
                className="  bg-red-700 text-center text-white p-2   w-full  hover:bg-red-500 hover:scale-110 focus:bg-black"
                onClick={() => {
                  setTimeout(() => {
                    dispatch({
                      type: types.OPEN,
                      payload: false,
                    });
                    router.push("/");
                  }, 200);
                }}
              >
                <h3 className=" text-center cursor-pointer  rounded-sm">
                  Start Shopping
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
