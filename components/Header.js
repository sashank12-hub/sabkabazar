import React from "react";
import Image from "next/dist/client/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";
function Header(props) {
  const router = useRouter();
  const [image, setImage] = useState("/static/images/logo_2x.png");
  useEffect(() => {
    window.addEventListener("resize", resizeevent);
  }, []);

  const resizeevent = () => {
    if (window.innerWidth >= 500) {
      setImage("/static/images/logo.png");
    } else {
      setImage("/static/images/logo_2x.png");
    }
    console.log(window.innerWidth);
  };

  return (
    <header className={styles.header}>
      <div className={styles.col1}>
        <Image src={image} alt="logo" width="100px" height="70px" />
      </div>
      <div className={styles.col2}>
        <Link href={"/"}>
          <a className={`${styles.link} `}>Home</a>
        </Link>
        <Link href={"/Products"}>
          <a className={`${styles.link} `}>Products</a>
        </Link>
      </div>
      <div className={styles.col3}>
        <div>
          <Link href={"/Signin"}>
            <a className={`${styles.link} `}>SignIn</a>
          </Link>
          <Link href={"/Signup"}>
            <a className={`${styles.link} `}>Register</a>
          </Link>
        </div>
        <div className={styles.col3_2} onClick={()=>router.push("/Cart")}>
          <>
          <Image
            src={"/static/images/cart.svg"}
            alt="cart"
            width={"20px"}
            height={"20px"}
            className={styles.image}
          />
          <p>0</p>
          <p>Items</p>
          </>
        </div>
      </div>
    </header>
  );
}

const headerItem = styled.div``;
export default Header;
