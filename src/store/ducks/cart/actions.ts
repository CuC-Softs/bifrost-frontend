// actions usadas pelo estado de carrinho

// importação da função action do typesafe-actions, que cria uma action redux
import { action } from 'typesafe-actions';

// importação dos tipos de actions e da tipagem de produto, respectivamente
import { CartTypes, Product } from './types';

// função que chama a action de request de adicionar um produto ao carrinho, recebendo
// o id do produto a ser adicionado como parâmetro, e então passando ele como payload da action
export const addToCartRequest = (id: number) =>
  action(CartTypes.ADD_REQUEST, id);

// função que chama a action que realmente adiciona um produto ao carrinho, recebendo
// o produto inteiro como parâmetro, e então passando ele como payload da action
export const addToCartSuccess = (product: Product) =>
  action(CartTypes.ADD_SUCCESS, { product });

// função que chama a action de request de atualização do número de unidades de um produto no
// carrinho, recebendo o id do produto e a nova quantidade dele como parâmetros, e então passando
// eles como payload da action
export const updateAmountRequest = (data: { id: number; amount: number }) =>
  action(CartTypes.UPDATE_AMOUNT_REQUEST, data);

// função que chama a action que realmente atualiza o número de unidades de um produto no
// carrinho, recebendo o id do produto e a nova quantidade dele como parâmetros, e então passando
// eles como payload da action
export const updateAmountSuccess = (data: { id: number; amount: number }) =>
  action(CartTypes.UPDATE_AMOUNT_SUCCESS, data);

// função que chama a action que remove um produto do do carrinho
export const removeFromCart = (id: number) => action(CartTypes.REMOVE, { id });
