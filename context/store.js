import React from 'react'
import * as types from "./types";
import { reducer, initialState } from "./reducer";
export const cartcontext = React.createContext({});

export const CartProvider = ({ children }) => {

const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <cartcontext.Provider value={{ state, dispatch }}>
      {children}
    </cartcontext.Provider>
  );
};

// export function useApiCallReducer() {
//   return React.useReducer(reducer, initialState);
// }

