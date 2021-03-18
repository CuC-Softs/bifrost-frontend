/**
 * Action types
 */

// declaração do enumerador CartTypes, com todos os tipos de actions
// eslint-disable-next-line no-shadow
export enum CartTypes {
  ADD_REQUEST = '@cart/ADD_REQUEST',
  ADD_SUCCESS = '@cart/ADD_SUCCESS',
  UPDATE_AMOUNT_REQUEST = '@cart/UPDATE_AMOUNT_REQUEST',
  UPDATE_AMOUNT_SUCCESS = '@cart/UPDATE_AMOUNT_SUCCESS',
  REMOVE = '@cart/REMOVE',
}

/**
 * Data types
 */

// interface Product, com as tipagens de produto
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
  formattedPrice: string;
}

/**
 * State type
 */

// tipagens do estado de produtos do carrinho
export interface ProductsState {
  readonly products: Product[];
}
