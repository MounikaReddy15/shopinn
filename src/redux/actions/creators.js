import {
	fetchProductsRequest,
	fetchProductsSuccess,
	fetchProductsFailure,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SEARCH_PRODUCTS_REQUEST,
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_FAILURE,
} from './product';

export const fetchProducts = () => {
	return async dispatch => {
		dispatch(fetchProductsRequest());
		try {
			const response = await fetch('https://dummyjson.com/products');
			const data = await response.json();
			dispatch(fetchProductsSuccess(data));
		} catch (error) {
			dispatch(fetchProductsFailure(error.message));
		}
	}
}

export const login = (username, password) => {
	return async dispatch => {
		try {
			dispatch({ type: LOGIN_REQUEST })

			// Simulate API call with POST request
			const response = await fetch('https://dummyjson.com/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			})

			if (response.ok) {
				// Simulate JWT token generation
				const accessToken = 'jwt_token'

				// Get user data from response
				const user = await response.json()

				dispatch({
					type: LOGIN_SUCCESS,
					payload: {
						user,
						accessToken
					}
				})
			} else {
				dispatch({ type: LOGIN_FAILURE, payload: 'Invalid username or password' })
			}
		} catch (error) {
			dispatch({ type: LOGIN_FAILURE, payload: error.message })
		}
	}
}


export const searchProducts = (query) => async dispatch => {
  dispatch({ type: SEARCH_PRODUCTS_REQUEST })

  try {
    // Simulate API call
    const data = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    const products = await data.json()

    dispatch({ type: SEARCH_PRODUCTS_SUCCESS, payload: products })
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCTS_FAILURE, payload: error.message })
  }
}

export const filterProducts = (category) => async dispatch => {
  dispatch({ type: SEARCH_PRODUCTS_REQUEST })

  try {
    // Simulate API call
    const data = await fetch(`https://dummyjson.com/products/category/${category}`)
    const products = await data.json()

    dispatch({ type: SEARCH_PRODUCTS_SUCCESS, payload: products })
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCTS_FAILURE, payload: error.message })
  }
}








