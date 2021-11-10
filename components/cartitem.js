import Image from "next/image";
import{cartcontext} from "../context/store"
import * as types from"../context/types"
import { useContext ,useEffect} from "react";

function Cartitem(props) {

  
    const {state,dispatch}=useContext(cartcontext)
    let index=state.items.findIndex(item=>item.id===props.product.id)

  return (
    <div className="_cartitem">
      <div className="_cartitem_col1_">
        <Image
          src={props.product.imageURL}
          width="80px"
          height="80px"
          alt="image"
        />
        </div>
        <div className="_cartitem_col2_">
            <strong><h2>{state.items[index].name}</h2></strong>
          
          <div className="_cartitem_col2_1">
            <div className="_cartitem_col2_1_1">
              <button className="_cartbutton hover:bg-red-500 hover:scale-125"onClick={()=>setTimeout(()=>{dispatch({
                  type:types.ADDTOCART,
                  payload:props.product
              })},700)
                  
              }>+</button>
              <h4>{state.items[index].count}</h4>
             
              <button className="_cartbutton hover:bg-red-500 hover:scale-125 "onClick={()=>setTimeout(()=>{dispatch({
                  type:types.REMOVEFROMCART,
                  payload:props.product
              })},700)
              
                  
              }>-</button>
              <h4>×</h4>
              <h4>Rs.{state.items[index].price}</h4>
              
            </div>
            
          </div>
         
        </div>
        <div className="_cartitem_col2_1_2">
              <h4>
                Rs.
                {parseInt(state.items[index].price) * parseInt(state.items[index].count)}
              </h4>
            </div>
      </div>
    
  );
}

export default Cartitem;
