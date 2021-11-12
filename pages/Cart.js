import styles from "../styles/cart.module.css";
import Image from "next/image";
import Header from "../components/Header";
import { CartProvider, cartcontext } from "../context/store";
import { useContext } from "react";
import Cartitem from "../components/cartitem";
import { useRouter } from "next/router";

function Cart() {
  const router = useRouter();
  const { state, dispatch } = useContext(cartcontext);
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeading}>
        <strong>
          <h1>My Cart ({state.total_count} Items) </h1>
        </strong>
      </div>
      <div className={styles.cartitems}>
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
      <div className={`${styles.footer2} cursor-pointer`}>
        {state.total_count > 0 ? (
          <>
            {" "}
            <h3>Promo code can be applied on payment page</h3>
            <div
              className={styles.checkout}
              onClick={() => router.push("/checkout")}
            >
              <h3>Proceed to Checkout</h3>
              <h3>Rs.{state.total_price}</h3>
            </div>
          </>
        ) : (
          <>
            <div
              className=" bg-red-500 text-center text-white p-2 "
              onClick={() => router.push("/")}
            >
              <h3 className=" text-center cursor-pointer w-screen rounded-sm">
                Start Shopping
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Cart.getLayout = (page) => {
  return (
    <>
      <CartProvider>
        <Header />
        {page}
      </CartProvider>
    </>
  );
};

export default Cart;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getServerSideProps = async (ctx) => {
  // your fetch function here

  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  };
};
