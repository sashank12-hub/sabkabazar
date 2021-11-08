import "../styles/globals.css";
import Header from '../components/Header'
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (<>
   <Header/>
   <Component {...pageProps} />;
  </>)
  
 
}

export default MyApp;
