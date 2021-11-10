import * as types from "./types";
export const initialState = {
  opencart: false,
  items: [],
  user: {
    name: "",
    password: "",
    email: "",
    token: "",
  },
  total_count: 0,
  total_price: 0,
  // array of objects each object product,count
};

export const reducer = (state, { type, payload }) => {
  let index;
  const updatedcart = Object.assign({}, state);
  console.log(updatedcart)
  switch (type) {
    case types.OPEN:
      updatedcart.opencart = payload;
      return { ...updatedcart };
    case types.ADDTOCART:
      index = updatedcart.items.findIndex((item) => item.id === payload.id);
      if (index >= 0) {
        const updatedItem = { ...updatedcart.items[index] };
        updatedItem.count++;
        updatedItem.stock--;
        updatedcart.items[index] = updatedItem;
        updatedcart.total_count++;
        updatedcart.total_price += payload.price;
        return {
          ...updatedcart,
        };
      } else {
        let obj = {
          name: payload.name,
          id: payload.id,
          count: 1,
          price: payload.price,
          stock: payload.stock - 1,
          imageURL: payload.imageURL,
          description: payload.description,
        };

        updatedcart.total_count++;
        updatedcart.total_price += payload.price;

        return {
          ...updatedcart,
          items: [...updatedcart.items, obj],
        };
      }

    case types.REMOVEFROMCART:
      index = state.items.findIndex((item) => item.id === payload.id);
      if (index > -1) {
        if (state.items[index].stock > 0) {
          updatedcart.items[index].count--;
          updatedcart.items[index].stock++;

          return {
            ...updatedcart,
          };
        }
      } else {
        alert("item not vaialable");
        return state;
      }

    case types.DELETEALLITEMS:
      updatedcart.total_price = 0;
      updatedcart.total_count = 0;
      updatedcart.item = [];
      return { ...updatedcart };
    default:
      return state;
  }
};
