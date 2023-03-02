import {
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
	FILTER_PRODUCTS,
	BOOKMARK_PRODUCT,
	UNBOOKMARK_PRODUCT,
} from '../actions/product';

const initialState = {
	loading: false,
	products: [],
	productsList: [],
	bookmarks: [],
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
				products: action.payload,
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
		case FILTER_PRODUCTS:
			const searchText = action.payload;
			const filteredProducts = state.products.filter((prod) => prod.category === searchText);
			return { ...state, productsList: filteredProducts };
		default:
			return state;
	}
};

export default productReducer;
