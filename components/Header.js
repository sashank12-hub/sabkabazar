import React from "react";
import Image from "next/dist/client/image";
import { useEffect, useState } from "react";

function Header() {
  const [image, setImage] = useState("/static/images/logo_2x.png");
  useEffect(() => {
    window.addEventListener("resize", resizeevent);
  }, []);

  const resizeevent = () => {
    if (window.innerWidth >= 500) {
      setImage("/static/images/lowest-price.png");
    } else {
      setImage("/static/images/logo_2x.png");
    }
    console.log(window.innerWidth);
  };

  return (
    <div className="max-w-screen-2xl bg-black h-20 justify-items-center flex-row flex group">
      <Image alt="logo" src={image} width={"100px"} height="80px" />
      <h3 className=" mt-2 opacity-0 group-hover:opacity-100 animate-bounce">hello</h3>
    </div>
  );
}

export default Header;
