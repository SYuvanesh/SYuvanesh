import { legacy_createStore as createStore } from 'redux';
import reduxReducer from './Reducer';
const store = createStore(reduxReducer)

export default store