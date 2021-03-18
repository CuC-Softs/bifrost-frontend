// importação das funções createStore e applyMiddleware, assim como a tipagem de Store, do redux
import { createStore, applyMiddleware, Store } from 'redux';

// importação da função applySagaMiddleware do redux saga
import createSagaMiddleware from 'redux-saga';

// importação da tipagem do estado de produtos do carrinho
import { ProductsState } from './ducks/cart/types';

// importação do reducer raiz
import rootReducer from './ducks/rootReducer';
// importação do saga raiz
import rootSaga from './ducks/rootSaga';

// criação da interface do estado da aplicação, que tem apenas o duck de carrinho, portanto
// só tem uma variável "cart" do tipo ProductsState
export interface ApplicationState {
  cart: ProductsState;
}

// criação de um middleware saga
const sagaMiddleware = createSagaMiddleware();

// criação do redux store, do tipo Store, que por sua vez tem o tipo ApplicationState
// o store é criado com o reducer raiz e o middleware saga
const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

// o middleware saga coloca o saga raiz para rodar
sagaMiddleware.run(rootSaga);

// exportação da store
export default store;
