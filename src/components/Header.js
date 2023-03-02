import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../styles/Header.scss';

const Header = () => {
	const [showCart, setShowCart] = useState(false)
	const bookmarks = useSelector(state => state.products.bookmarks);

	const handleHover = () => {
		setShowCart(true)
	}

	const handleLeave = () => {
		setShowCart(false)
	}
	return (
		<div className="navbar">
			<div className="search-box">
				<input type="search" />
			</div>
			<div className="navbar-options">
				<p className="logout">
					Logout
				</p>
				<div className="bookmark" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
					<i className="fa fa-shopping-cart"></i>
					<p>Bookmark</p>
					{bookmarks.length > 0 && <span className="bookmark-count">{bookmarks.length}</span>}
					{showCart && (
						<div className="bookmark-items">
							<ul>
								{bookmarks.map(item => (
									<li key={item.id}>
										{item.title} x {item.price}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
