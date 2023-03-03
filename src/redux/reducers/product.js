import {
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
	BOOKMARK_PRODUCT,
	UNBOOKMARK_PRODUCT,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_REQUEST,
	FILTER_PRODUCTS_REQUEST,
	FILTER_PRODUCTS_SUCCESS,
} from '../actions/product';

const initialState = {
	loading: false,
	products: [],
	productsList: [],
	bookmarks: [],
	user: null,
	accessToken: null,
	error: ''
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS_REQUEST:
			return {
				...state,
				loading: true
			};
		case FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload.products,
				productsList: state.products,
				error: ''
			};
		case FETCH_PRODUCTS_FAILURE:
			return {
				...state,
				loading: false,
				products: [],
				error: action.payload
			};
		case BOOKMARK_PRODUCT:
			return {
				...state,
				bookmarks: [...state.bookmarks, action.payload]
			}
		case UNBOOKMARK_PRODUCT:
			return {
				...state,
				bookmarks: state.bookmarks.filter(id => id !== action.payload)
			}
		case FILTER_PRODUCTS_REQUEST:
			return {
				...state,
				loading: true
			};
		case FILTER_PRODUCTS_SUCCESS:
			const searchText = action.payload;
			const filteredProducts = state.products.filter((prod) => prod.category === searchText);
			return { ...state, productsList: filteredProducts };
		case LOGIN_REQUEST:
			return { ...state, loading: true, error: null }
		case LOGIN_SUCCESS:
			localStorage.setItem('authenticated', true)
			return {
				...state,
				user: action.payload.user,
				accessToken: action.payload.token,
				loading: false,
				error: null
			}
		case LOGIN_FAILURE:
			return { ...state, loading: false, error: action.payload }
		case LOGOUT:
			localStorage.removeItem("authenticated");
			return { ...state, user: null, accessToken: null }
		case SEARCH_PRODUCTS_REQUEST:
			return {
				...state,
				loading: true
			};
		case SEARCH_PRODUCTS_SUCCESS:
			return { ...state, productsList: action.payload.products }

		default:
			return state;
	}
};

export default productReducer;
