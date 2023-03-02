import React, { useEffect, useState } from 'react'
import '../styles/Products.scss'

const Products = () => {
	const [productsList, setProductsList] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch('https://fakestoreapi.com/products/');
			const products = await response.json();
			console.log('data', products);
			setProductsList(products);
		}

		fetchProducts()
	}, [])

	return (
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
	)
}

export default Products