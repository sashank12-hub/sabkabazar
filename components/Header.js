import React, { useState ,useEffect,useContext} from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import styled from "styled-components";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";
import { cartcontext } from "../context/store";
import * as types from "../context/types";
function Header(props) {
  const { state, dispatch } = useContext(cartcontext);
  useEffect(() => {
   console.log("state",state)
  }, [state.userverified,state])
  
  const [width, setWidth] = useState(0);
  const router = useRouter();
  const [image, setImage] = useState("/static/images/logo_2x.png");

  return (
    <header className={styles.header}>
      <div className={styles.col1}>
        <Image src={image} alt="logo" width="100px" height="70px" />
      </div>
      <div className={styles.col2}>
        <Link href={"/"}>
          <a
            className={`${styles.link} text-black hover:scale-125 transition duration-500 ease-in-out`}
          >
            Home
          </a>
        </Link>
        <Link href={"/Products"}>
          <a className={`${styles.link} hover:scale-125 `}>Products</a>
        </Link>
      </div>
      <div className={styles.col3}>
        <div>
          { !state.userverified && 
          <>
          <Link href={"/Signin"}>
            
            <a className={`${styles.link} hover:scale-125  z-10 `}>SignIn</a>
          </Link>

          </>

          }
         {
           
         }
         
          <Link href={"/Signup"}>
            {state.userverified ? (
              <a className={`${styles.link} hover:scale-125 `} onClick={(e)=>{
                e.preventDefault();
                dispatch({
                  type:types.LOGOUT
                })
              }}>LogOut</a>
            ) : (
              <a className={`${styles.link} hover:scale-125 `}>Register</a>
            )}
          </Link>
        </div>
        <div
          className={`${styles.col3_2} hover:scale-125 `}
          onClick={() => {
            dispatch({
              type: types.OPEN,
              payload: true,
            });
          }}
        >
          <>
            <Image
              src={"/static/images/cart.svg"}
              alt="cart"
              width={"20px"}
              height={"20px"}
              className={styles.image}
            />
            <p>{state.total_count}</p>
            <p>Items</p>
          </>
        </div>
      </div>
    </header>
  );
}

const headerItem = styled.div``;
export default Header;
