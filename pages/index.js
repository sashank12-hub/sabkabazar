import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/carousel";
import Header from "../components/Header";
import Banner from "../components/banner";
import array from "../server/categories/index.get.json";
export default function Home(props) {
  return (
    <div className="  bg-gray-200 ">
      <Head>
        <title>Sabka Bazar</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/static/images/logo.png" />
      </Head>
     
      <Carousel />
    
      <div className=" -mt-2">
      <Banner array={props.Categoriesdata} />
      </div>
      
    </div>
  );
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  // const { data } = // your fetch function here

  return {
    props: {
      Categoriesdata: array,
    },
  };
};
