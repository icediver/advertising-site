import {createStore} from 'redux';
import items from '../reducers/resultReducer'

const store = createStore(items, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
// 