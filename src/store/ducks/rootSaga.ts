// importaç]ao da função all dos effects do redux saga
import { all } from 'redux-saga/effects';

// importação das funções de saga do carrinho
import cart from './cart/sagas';

// exportação de uma função que combina todos os sagas, chamada rootSaga
export default function* rootSaga() {
  return yield all([cart]);
}
