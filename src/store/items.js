import {createStore} from 'redux';
import products from '../reducers/mainReducer';

const store = createStore(products, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
// 