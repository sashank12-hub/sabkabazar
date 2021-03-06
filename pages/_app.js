import "../styles/globals.css";
import "../styles/select.css";
import "../styles/footer.css";
import"../styles/cart.css"
import "../styles/form.css";
import "../styles/register.css"
import "../styles/inputfield.css"
import Header from "../components/Header";
import { CartProvider } from "../context/store";
import Footer from "../components/Footer";
import Cart from "../components/Cart"
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <CartProvider>
        <Header />
        
        <Component {...pageProps} />
        <Footer />
        <Cart/>
      </CartProvider>
    </>
  );
}

export default MyApp;
