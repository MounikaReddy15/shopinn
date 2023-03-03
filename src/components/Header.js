import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
import { searchProducts } from '../redux/actions/creators';
import { logout } from '../redux/actions/product';
import '../styles/Header.scss';

const Header = () => {
	const dispatch = useDispatch();
	// const nav = useNavigate();
	const [showCart, setShowCart] = useState(false)
	const bookmarks = useSelector(state => state.products.bookmarks);

	const handleHover = () => {
		setShowCart(true)
	}

	const handleLeave = () => {
		setShowCart(false)
	}

	const handleSearch = event => {
		const query = event.target.value
		dispatch(searchProducts(query))
	}

	const handleLogout = () => {
		// nav("/");
    dispatch(logout());
  };

	let isValid = localStorage.getItem("authenticated");

	return (
		<div>
			{isValid ?
				(
					<div className="navbar">
						<div className="search-box">
							<input type="search" placeholder="search" onChange={handleSearch} />
						</div>
						<div className="navbar-options">
							<p className="logout" onClick={handleLogout}>
								Logout
							</p>
							<div className="bookmark" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
								{bookmarks.length > 0 && <p className="bookmark-count">Bookmark{" "}{bookmarks.length}</p>}
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
				) :
				(<div className='main-title'>
					<h3>Welcome to ShopInn </h3>
				</div>)}
		</div>
	);
};

export default Header;
