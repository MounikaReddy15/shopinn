import React from 'react';
import '../styles/Header.scss';

const Header = ({ cartCount, onLogout, onSearch }) => {
	return (
		<div className="navbar">
			<div className="search-box">
				<input type="text" onChange='' />
			</div>
			<div className="navbar-options">
				<div className="bookmark-icon">
					<i class="fa-light fa-bookmark"></i>
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
