import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/creators';
import { bookmarkProduct, filterProducts, unbookmarkProduct } from '../redux/actions/product';
import '../styles/Products.scss'

const Products = () => {
	const dispatch = useDispatch();

	const productsList = useSelector(state => state.products.productsList);
	const bookmarks = useSelector(state => state.products.bookmarks);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch])

	const filterCategory = (category) => {
		dispatch(filterProducts(category));
	}

	const handleBookmark = (product) => {
		dispatch(bookmarkProduct(product))
	}

	const handleUnbookmark = (product) => {
		dispatch(unbookmarkProduct(product))
	}

	return (
		<div className='row'>
			<div className="sidebar">
				<h2>Categories</h2>
				<ul>
					<li onClick={() => dispatch(fetchProducts())}>All</li>
					<li onClick={() => filterCategory("electronics")}>Electronic</li>
					<li onClick={() => filterCategory("jewelery")}>Jewelery</li>
					<li onClick={() => filterCategory("men's clothing")}>Men</li>
					<li onClick={() => filterCategory("women's clothing")}>Women</li>
				</ul>
			</div>
			<div className="products-list">
				{productsList.map(product => (
					<div key={product.id} className="product-card">
						<img src={product.image} alt={product.title} />
						<div className="product-details">
							<h3>{product.title}</h3>
							<p>{product.price}</p>
							{bookmarks.some(p => p.id === product.id) ? (
								<button onClick={() => handleUnbookmark(product)}>Unbookmark</button>
							) : (
								<button onClick={() => handleBookmark(product)}>Bookmark</button>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Products