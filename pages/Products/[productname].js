import categories from "../../server/categories/index.get.json";
import products from "../../server/products/index.get.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sidenav from "../../components/sidenav";
import styles from "../../styles/products.module.css";
import Productssection from "../../components/Productssection";
function Product(props) {
  const [Products, setProducts] = useState([]);
  const router = useRouter();
  return (
    <div className={styles.products}>
      <div className={styles.sidenav}>
      <Sidenav array={props.categories} />
      </div>
      <div className={styles.productssection}>
      <Productssection products={props.products} />
      </div>
    </div>
  );
}

export default Product;
export const getServerSideProps = async (context) => {
  const {
    params: { productname },
  } = context;
  const type = categories.filter(
    (item) => item.name.split(" ").join("") === productname
  );

  const list_products = products.filter((item) => item.category === type[0].id);

 

  return {
    props: {
      products: list_products,
      categories: categories.filter((items) => items.enabled === true),
    },
  };
};
