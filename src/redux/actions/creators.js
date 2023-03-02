import {
	fetchProductsRequest,
	fetchProductsSuccess,
	fetchProductsFailure
} from './product';

export const fetchProducts = () => {
	return async dispatch => {
		dispatch(fetchProductsRequest());
		try {
			const response = await fetch('https://fakestoreapi.com/products/');
			const data = await response.json();
			dispatch(fetchProductsSuccess(data));
		} catch (error) {
			dispatch(fetchProductsFailure(error.message));
		}
	}
}
