import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { login } from '../redux/actions/product';
import '../styles/Login.scss';

const Login = () => {
	const dispatch = useDispatch();
	const nav = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		nav("/products");
		dispatch(login(username, password))


	};

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

				<label htmlFor="password">Password:</label>
				<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

				<button type="submit">Log in</button>
			</form>
		</div>
	);
};

export default Login;
