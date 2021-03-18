// reducer das actions de carrinho

// importação da tipagem de reducer do redux
import { Reducer } from 'redux';

// importação da função produce do immer, que cria um esboço de estado que é usado para formar
// o novo estado a ser devolvido para o redux
import produce from 'immer';

// importação da tipagem do estado de produtos no carrinho e dos tipos de actions do carrinho,
// respectivamente
import { ProductsState, CartTypes } from './types';

// declaração de um estado inicial padrão que contem um array de produtos vazio
// a tipagem dele é definida como ProductsState, a tipagem do estado de produtos do carrinho
const INITIAL_STATE: ProductsState = {
  products: [],
};

// declaração do redux reducer, que recebe a tipagem de Reducer, que por sua vez recebe
// o tipo productsState
const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // action case de adição de produtos ao carrinho
    case CartTypes.ADD_SUCCESS:
      // é retornado um esboço (draft) do immer que recebe o estado original do carrinho
      // mais o produto que foi adicionado
      return produce(state, draft => {
        const { product } = action.payload;

        draft.products.push(product);
      });
    // action case de remoção de produtos do carrinho
    case CartTypes.REMOVE:
      // é retornado um esboço do immer que recebe o estado original do carrinho
      // menos o produto que foi removido
      return produce(state, draft => {
        // é procurado o índice do produto que possui o id repassado no payload
        const productIndex = draft.products.findIndex(
          p => p.id === action.payload.id,
        );

        // o índice encontrado é repassado como parâmetro de uma função splice() usada para remover
        // o produto que está armazenado nesse índice do vetor
        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
      });
    // action case de atualização do número de unidades (quantidade) de um produto no carrinho
    case CartTypes.UPDATE_AMOUNT_SUCCESS: {
      // é retornado um esboço do immer que recebe o estado original, mas com a quantidade
      // do produto atualizada
      return produce(state, draft => {
        // é procurado dentro do vetor de produtos o produto a ser alterado e é retornado seu índice
        const productIndex = draft.products.findIndex(
          p => p.id === action.payload.id,
        );

        // a quantidade do produto desse índice é alterada para a nova quantidade recebida
        // do payload da action
        if (productIndex >= 0) {
          // eslint-disable-next-line no-param-reassign
          draft.products[productIndex].amount = Number(action.payload.amount);
        }
      });
    }
    // action case padrão, que retorna o mesmo estado original
    default:
      return state;
  }
};

// exportação do reducer
export default reducer;
