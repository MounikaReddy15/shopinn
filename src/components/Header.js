import React from 'react';
import '../styles/Header.scss';

const Header = () => {
	return (
		<div className="navbar">
			<div className="search-box">
				<input type="search" />
			</div>
			<div className="navbar-options">
				<div className="bookmark-icon">
					<i className="fa-light fa-bookmark"></i>
					<p> Bookmark </p>
				</div>
				<p className="logout">
					Logout
				</p>
			</div>
		</div>
	);
};

export default Header;
