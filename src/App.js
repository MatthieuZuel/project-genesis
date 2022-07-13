import React, { useState } from 'react';
import { Footer, Navbar, Sidebar } from './Components';
import { ContactPage, Home } from './Pages';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Router>
			<GlobalStyle />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/contact' exact element={<ContactPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
