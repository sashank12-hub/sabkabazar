import * as types from "./types";
export const cart = {
items: [],// array of objects each object product,count
};

export const reducer = (state = cart, { type, payload }) => {
  switch (type) {
    case types.ADDTOCART:

          let olditem=  state.items.filter(item=>item.id===payload.id)
          if(olditem.length<=0){
              let newitem={
                  name:payload.name,
                  id:payload.id,
                  cost:payload.price,
                  imageUrl:payload.imageURL,
                  description:payload.description,
                  stock:(payload.stock-1)
              }
              items=state.items.push(newitem)
              return { ...state,items
            
              };
          }
          else{
        const item= state.items.find(item=>item.id===payload.id)
            
              return{...state}
          }
      
    case types.REMOVEFROMCART:
      return { ...state, ...payload };
    case types.DELETEALLITEMS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
