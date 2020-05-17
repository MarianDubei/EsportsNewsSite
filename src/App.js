import React from 'react';
import logo from './logo.svg';
import './components/page.css';
import Header from './components/header';
import Home from './components/home';
import News from './components/news';
import Schedule from './components/schedule';
import About from './components/about';
import Article from './components/article'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (

  	<BrowserRouter>
	    <div className="container">
	    
	      	<Header/>

			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/news' component={News} />
				<Route exact path='/schedule' component={Schedule} />
				<Route exact path='/about' component={About} />
				<Route exact path='/:game' render={(props) => (
					<News game={props.match.params.game}/>
					)}/>
				<Route exact path='/:game/:articleLink' render={(props) => (
					<Article game={props.match.params.game} articleLink={props.match.params.articleLink}/>
					)}/>
			</Switch>

	    </div>
    </BrowserRouter>

  );
}

export default App;

