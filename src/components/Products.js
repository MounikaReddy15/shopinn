import React, { useEffect, useState } from 'react'
import '../styles/Products.scss'

const Products = () => {
	const [products, setProducts] = useState([]);
	const [productsList, setProductsList] = useState(products);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch('https://fakestoreapi.com/products/');
			const products = await response.json();
			console.log('data', products);
			setProducts(products);
			setProductsList(products);
		}

		fetchProducts()
	}, [])

	const filterCategory = (category) => {
		const filteredProducts = products.filter((prod) => prod.category === category);
		console.log('f', filteredProducts);
		setProductsList(filteredProducts);
	}

	return (
		<div className='row'>
			<div className="sidebar">
				<h2>Categories</h2>
				<ul>
					<li onClick={() => setProductsList(products)}>All</li>
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
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Products