import { type Dispatch, createContext } from "react";
import { PRODUCT_ACTIONS, type product } from '../types/product';

type Action =
    | { type: PRODUCT_ACTIONS.ADD_PRODUCT; payload: product }
    | { type: PRODUCT_ACTIONS.DELETE_PRODUCT; payload: number }
    | { type: PRODUCT_ACTIONS.DELETE_ONE_PRODUCT; payload: number}; 

type SelectedProductsContextType = {
  selectedProducts: product[];
  dispatch: Dispatch<Action>;
  addProduct: (product: product) => void;
  deleteProduct: (product: product) => void;
  deleteOneProduct: (product: product) => void;
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

export const SelectedProductsContext = createContext<SelectedProductsContextType | undefined>(undefined);


