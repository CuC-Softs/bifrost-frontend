// importação das funções call, select, put, all e takeLatest dos efeitos do redux saga
// a função call é usada para chamar funções, recebendo dois parâmetros: a função a ser usada
// e os parâmetros que serão usados na função do primeiro parâmetro
// pra ser honesto, não lembro o motivo da necessidade de usar isso
// a função select funciona da mesma forma que o hook useState do redux, permitindo acesso ao estado
// a função put funciona da mesma forma que o hook useDispatcher do redux, despachando redux actions
// a função takeLatest é usada para ouvir várias chamadas a ações, e se acontecerem várias chamadas
// do mesmo tipo em sucessão muito rápida, apenas a última é realmente chamada
// eslint-disable-next-line prettier/prettier
import {
  call, select, put, all, takeLatest,
} from 'redux-saga/effects';

// importação da função toast do react-toastfy, usada para criar um toast de aviso
import { toast } from 'react-toastify';

// importação das actions de adição de produtos ao carrinho e de atualização da quantidade do
// produto, respectivamente
import { addToCartSuccess, updateAmountSuccess } from './actions';

// importação da api do axios
import api from '../../../services/api';

// importação da função de formatação de preços
import { formatPrice } from '../../../utils/format';

// importação do enumerador com os tipos de actions
import { CartTypes } from './types';

// generetor function de adição ao carrinho
// recebe o id do produto a ser adicionado pelo payload
function* addToCart({ payload: id }) {
  // procura por um produto com o mesmo id repassado para descobrir se ele já está no carrinho
  const productExists = yield select(state =>
    state.cart.products.find(p => p.id === id),
  );

  // procura o estoque do produto buscando pelo id repassado
  const stock = yield call(api.get, `/stock/${id}`);

  // se o produto já existe no carrinho, a variável currentAmount (quantidade atual) recebe
  // o número de unidades que o produto tem no carrinho
  // caso contrário, ela recebe 0
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  // a variável amount recebe a nova quantidade do produto no carrinho somada a 1
  const amount = currentAmount + 1;

  // se a nova quantidade é maior que a quantidade em estoque, é criado um token avisando isso,
  // e então interrompe a requisição
  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque!');
    return;
  }

  // se o produto já está no carrinho, é chamada a action de atualização da quantidade do produto no
  // carrinho passando o id do produto e a nova quantidade como payload
  // se não, é feita uma chamada à api para trazer o produto usando o id como parâmetro, e é criado
  // um objeto com os valores trazidos da api, a quantidade do produto (iniciada como 1) e o preço
  // formatado do produto
  // este objeto é passado como payload da action de adição de produto ao carrinho, que é chamada
  if (productExists) {
    yield put(updateAmountSuccess({ id, amount }));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    // history.push('/cart');
  }
}

// generetor function de adição ao carrinho
// recebe um objeto com id e a nova quantidade (amount) do produto a ser atualizado
function* updateAmount({ payload }) {
  // recebe id e amount do payload por desestruturação
  const { id, amount } = payload;

  // se, por algum motivo, a quantidade for menor que 0, a função é interrompida
  if (amount <= 0) return;

  // a quantidade em estoque do produto a ser atualizado é chamado da api usando o id como parâmetro
  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  // se a nova quantidade for maior que o que há em estoque, é criado um toast de erro avisando isso
  // e a função é interrompida
  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque!');
    return;
  }

  // se tudo estiver certo, é chamada a action de atualização da quantidade, recebendo
  // o id do produto e a nova quantidade como parâmetros
  yield put(updateAmountSuccess({ id, amount }));
}

// é exportado o retorno da função all, que retorna uma configuração para que o saga middlware
// escute a múltiplas actions em paralelo
export default all([
  takeLatest<CartTypes, any>(CartTypes.ADD_REQUEST, addToCart),
  takeLatest<CartTypes, any>(CartTypes.UPDATE_AMOUNT_REQUEST, updateAmount),
]);
