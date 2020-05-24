import React from 'react';
import '../page.css';
import Header from '../header';
import Home from '../home';
import News from '../news';
import Schedule from '../schedule';
import About from '../about';
import Article from '../article'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArticles, fetchTopArticle, fetchMatches } from '../../actions';

class Main extends React.Component {

	componentDidMount() {
		this.props.fetchArticles();
		this.props.fetchTopArticle();
		this.props.fetchMatches();
	}

	render() {
		return (
			
				<BrowserRouter>
				    <div className="container">
				    
				      	<Header/>

						<Switch>
							<Route exact path='/' component={Home}/>
							<Route exact path='/news' component={News}/>
							<Route exact path='/schedule' component={Schedule}/>
							<Route exact path='/about' component={About} />
							<Route exact path='/search' render={(props) => (
								<News search={props.location.search.split("=")[1].toLowerCase()}/>
								)}/>
							<Route exact path='/:game' render={(props) => (
								<News game={props.match.params.game}/>
								)}/>
							<Route exact path='/:game/:articleLink' render={(props) => (
								<Article articleLink={props.match.params.articleLink}/>
								)}/>
						</Switch>

				    </div>
			    </BrowserRouter>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticles()),
  fetchTopArticle: () => dispatch(fetchTopArticle()),
  fetchMatches: () => dispatch(fetchMatches())
});

export default connect(null, mapDispatchToProps)(Main)