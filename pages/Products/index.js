import array from "../../server/categories/index.get.json";
import Sidenav from "../../components/sidenav";
import products from "../../server/products/index.get.json";
import styles from "../../styles/products.module.css";
import Productssection from "../../components/Productssection";
function Products(props) {
  return (
    <div className={`${styles.products}`}>
      <div className={`${styles.sidenav} `}>
      <Sidenav array={props.Categoriesdata} />
      </div>
      <div className={styles.productssection}>
      <Productssection products={props.products} />
      </div>
     
    </div>
  );
}

export default Products;
export const getStaticProps = async (ctx) => {
  // const { data } = // your fetch function here

  return {
    props: {
      Categoriesdata: array.filter((items) => items.enabled === true),
      products: products,
    },
  };
};
