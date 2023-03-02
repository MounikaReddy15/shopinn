export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const BOOKMARK_PRODUCT = 'BOOKMARK_PRODUCT';
export const UNBOOKMARK_PRODUCT = 'UNBOOKMARK_PRODUCT';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';


// action creators
export const fetchProductsRequest = () => {
	return {
		type: FETCH_PRODUCTS_REQUEST
	}
}

export const fetchProductsSuccess = products => {
	return {
		type: FETCH_PRODUCTS_SUCCESS,
		payload: products
	}
}

export const fetchProductsFailure = error => {
	return {
		type: FETCH_PRODUCTS_FAILURE,
		payload: error
	}
}

export const bookmarkProduct = (productId) => ({
	type: 'BOOKMARK_PRODUCT',
	payload: productId
})

export const unbookmarkProduct = (productId) => ({
	type: 'UNBOOKMARK_PRODUCT',
	payload: productId
})

export const filterProducts = (category) => ({
	type: FILTER_PRODUCTS,
	payload: category,
});
