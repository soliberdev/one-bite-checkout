import { SelectedProductsContext } from "./SelectedProductsContext";
import { PRODUCT_ACTIONS, type product } from '../types/product';
import { useReducer, useState, type ReactNode } from "react";

type Action =
    | { type: PRODUCT_ACTIONS.ADD_PRODUCT; payload: product }
    | { type: PRODUCT_ACTIONS.DELETE_PRODUCT; payload: number }
    | { type: PRODUCT_ACTIONS.DELETE_ONE_PRODUCT; payload: number}; 

type Props = {
  children: ReactNode;
};

function reducer(state: product[], action: Action) {
    switch(action.type) {
        case PRODUCT_ACTIONS.ADD_PRODUCT:
            return [...state, action.payload]
        case PRODUCT_ACTIONS.DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload);
        case PRODUCT_ACTIONS.DELETE_ONE_PRODUCT: {
            const invertedStatus = [...state].reverse();
            const index = invertedStatus.findIndex(product => product.id === action.payload);
            if (index === -1) return state;

            const newState = [...invertedStatus];
            newState.splice(index, 1);
            newState.reverse();
            return newState;
        }

        default:
            return state
    }
}

const SelectedProductsProvider = ({ children }: Props) => {

    // State for tips
    const [tip, setTip] = useState<number>(0);

    // Selected Products
    const initialState: product[] = [];
    const [selectedProducts, dispatch] = useReducer(reducer, initialState);

    const addProduct = (product: product) : void => {
        dispatch( { type: PRODUCT_ACTIONS.ADD_PRODUCT, payload: product});
    }

    const deleteProduct = (product: product) : void => {
        dispatch( { type: PRODUCT_ACTIONS.DELETE_PRODUCT, payload: product.id})
    }

    const deleteOneProduct = (product: product) : void => {
        dispatch( { type: PRODUCT_ACTIONS.DELETE_ONE_PRODUCT, payload: product.id })
    }

    return (
        <SelectedProductsContext.Provider value={{selectedProducts, dispatch, addProduct, deleteProduct, deleteOneProduct, tip, setTip }}>
            {children}
        </SelectedProductsContext.Provider>
    )
}

export default SelectedProductsProvider;