export interface product {
    id: number;
    name: string;
    price: number;
}

export interface totalProducts extends product {
    quantity: number;
    totalPrice: number;
}

export enum PRODUCT_ACTIONS {
    ADD_PRODUCT = 'ADD_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    DELETE_ONE_PRODUCT = 'DELETE_ONE_PRODUCT'
}