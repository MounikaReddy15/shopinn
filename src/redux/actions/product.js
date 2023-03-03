export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const BOOKMARK_PRODUCT = 'BOOKMARK_PRODUCT';
export const UNBOOKMARK_PRODUCT = 'UNBOOKMARK_PRODUCT';
export const FILTER_PRODUCTS_REQUEST = 'FILTER_PRODUCTS_REQUEST';
export const FILTER_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SEARCH_PRODUCTS_REQUEST = 'SEARCH_PRODUCTS_REQUEST'
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS'
export const SEARCH_PRODUCTS_FAILURE = 'SEARCH_PRODUCTS_FAILURE'


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

export const filterProductsRequest = () => {
	return {
		type: FILTER_PRODUCTS_REQUEST
	}
}

export const filterProducts = (category) => ({
	type: FILTER_PRODUCTS_SUCCESS,
	payload: category,
});


export const loginRequest = () => {
	return {
		type: LOGIN_REQUEST
	}
}

export const login = (user, token) => ({
	type: LOGIN_SUCCESS,
	payload: { user, token }
});

export const loginFailure = error => {
	return {
		type: LOGIN_FAILURE,
		payload: error
	}
}

export const logout = () => {
	return { type: LOGOUT }
}


export const searchProductsRequest = () => {
	return {
		type: SEARCH_PRODUCTS_REQUEST,
	}
}

export const searchProductsSuccess = products => {
	return {
		type: SEARCH_PRODUCTS_SUCCESS,
		payload: products
	}
}

export const searchProductsFailure = error => {
	return {
		type: SEARCH_PRODUCTS_FAILURE,
		payload: error
	}
}