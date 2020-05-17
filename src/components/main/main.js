import React from 'react';
import '../page.css';
import Header from '../header';
import Home from '../home';
import News from '../news';
import Schedule from '../schedule';
import About from '../about';
import Article from '../article'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class Main extends React.Component {

	state = {
	    	articles: [],
	    	topArticle: {},
	    	matches: []
	}

	componentDidMount() {
	    fetch('/articles').then(resp => {
	      return resp.json();
	    }).then(body => {
	      console.log(body);
	      this.setState({
	        articles: body
	      })
	    });
	    fetch('/topArticle').then(resp => {
	      return resp.json();
	    }).then(body => {
	      console.log(body);
	      this.setState({
	        topArticle: body
	      })
	    });
	    fetch('/matches').then(resp => {
	      return resp.json();
	    }).then(body => {
	      console.log(body);
	      this.setState({
	        matches: body
	      })
	    })
	  }

	render() {
		console.log(this.state.articles.find((article) => article.articleLink.includes("dota-2s-the-international-10-delayed")));	
		return (

			<BrowserRouter>
			    <div className="container">
			    
			      	<Header/>

					<Switch>
						<Route exact path='/' render={() => (
							<Home articles={this.state.articles} matches={this.state.matches} topArticle={this.state.topArticle}/>
							)}/>
						<Route exact path='/news' render={() => (
							<News articles={this.state.articles} matches={this.state.matches}/>
							)}/>
						<Route exact path='/schedule' render={() => (
							<Schedule articles={this.state.articles} matches={this.state.matches}/>
							)}/>
						<Route exact path='/about' component={About} />
						<Route exact path='/search' render={(props) => (
							<News search={props.location.search.split("=")[1]} articles={this.state.articles.filter((article) => article.title.toLowerCase().includes(props.location.search.split("=")[1].toLowerCase()) || article.text.toLowerCase().includes(props.location.search.split("=")[1].toLowerCase()) )} matches={this.state.matches}/>
							)}/>
						<Route exact path='/:game' render={(props) => (
							<News articles={this.state.articles.filter((article) => article.gameLink.includes(props.match.params.game) || !props.match.params.game )} matches={this.state.matches}/>
							)}/>
						<Route exact path='/:game/:articleLink' render={(props) => (
							<Article articles={this.state.articles} article={this.state.articles.find((article) => article.articleLink.includes(props.match.params.articleLink))} matches={this.state.matches}/>
							)}/>
					</Switch>

			    </div>
		    </BrowserRouter>
		);
	}
}