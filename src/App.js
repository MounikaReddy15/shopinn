import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Products from './components/Products';

function App() {
	
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route exact path="/products" element={<Products />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
