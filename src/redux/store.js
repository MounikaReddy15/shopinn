import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import productsReducer from './reducers/product';

const rootReducer = combineReducers({
	products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
