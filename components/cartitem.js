import Image from "next/image";
import{cartcontext} from "../context/store"
import * as types from"../context/types"
import { useContext ,useEffect} from "react";

function Cartitem(props) {

  
    const {state,dispatch}=useContext(cartcontext)
    let index=state.items.findIndex(item=>item.id===props.product.id)
    if(state.items[index].count<=0){
      return(
        <div>
          
        </div>
      )
    }

  return (
    <div className="flex flex-row justify-around text-black  mb-2 bg-white hover:scale-105">
    <div className=" w-1/4"> 
        <Image
          src={props.product.imageURL}
          width="60px"
          height="60px"
          alt="image"
        />
        </div>
        <div className="flex flex-col  w-3/4">
            <strong><h2 className="">{state.items[index].name}</h2></strong>
          
          <div className=" flex flex-row items-center justify-between">
            <div className=" flex-row flex items-center">
              <button className="_cartbutton hover:bg-red-500 hover:scale-125 focus:bg-black"onClick={()=>setTimeout(()=>{dispatch({
                  type:types.ADDTOCART,
                  payload:props.product
              })},700)
                  
              }>+</button>
              <h4>{state.items[index].count}</h4>
             
              <button className="_cartbutton hover:bg-red-500 hover:scale-125 focus:bg-black"onClick={()=>setTimeout(()=>{dispatch({
                  type:types.REMOVEFROMCART,
                  payload:props.product
              })},700)
              
                  
              }>-</button>
              <h4>×</h4>
              <h4>Rs.{state.items[index].price}</h4>
              
            </div>
            
            <div className=" pr-4">
              <h4>
                Rs.
                {parseInt(state.items[index].price) * parseInt(state.items[index].count)}
              </h4>
              {/* <button className="_cartbutton hover:bg-red-500 hover:scale-125 focus:bg-black"onClick={()=>setTimeout(()=>{dispatch({
                  type:types.ADDTOCART,
                  payload:props.product
              })},700)
                  
              }>×</button> */}
            </div>
          </div>
         
        </div>
       
      </div>
    
  );
}

export default Cartitem;
