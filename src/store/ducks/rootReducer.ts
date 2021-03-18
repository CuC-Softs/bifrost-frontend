// importação da função combineReducers do redux
import { combineReducers } from 'redux';

// importação dos reducers do carrinho
import cart from './cart';

// exportação do reducer raiz, que combina todos os reducers, embora o único que
// existe na aplicação é o de carrinho
export default combineReducers({
  cart,
});
