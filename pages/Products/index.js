import array from "../../server/categories/index.get.json";
import Sidenav from "../../components/sidenav";
import products from "../../server/products/index.get.json";
import styles from "../../styles/products.module.css";
import Productssection from "../../components/Productssection";
import Select from "../../components/Select";
function Products(props) {
  return (
    <>
    <div className="  z-20">
    <Select array={props.Categoriesdata}/>

   </div>
    <div className={`${styles.products}`}>
     
      <div className={`${styles.sidenav} `}>
        <Sidenav array={props.Categoriesdata} />

       </div>
      <div className={styles.productssection}>
        <Productssection products={props.products} />
      </div>
    </div>
    </>
  );
}

export default Products;
export const getStaticProps = async (ctx) => {
  return {
    props: {
      Categoriesdata: array.filter((items) => items.enabled === true),
      products: products,
    },
  };
};
