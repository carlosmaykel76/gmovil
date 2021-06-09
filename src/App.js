import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages';
import FormMovil from './pages/FormMovil';
import About from './pages/about';



function App() {
	return (
		<Router>			
			<NavBar/>
			<Route path='/' exact component={ Home } />			 
			<Route path='/new' component={ FormMovil } />	
			<Route path='/about' component={ About } />		
		</Router>
	);
}

export default App;
