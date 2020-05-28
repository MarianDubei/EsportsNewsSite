import React from 'react';
import ArticleSmall from "./articlesmall"
import { Link } from 'react-router-dom';
import './asideNews.css'


export default class AsideNews extends React.Component {

	render() {
		const { articles } = this.props;
		return (
				<div class='aside-latest-articles'>
					<div className="latest-news-header">
		              <h2>LATEST</h2>
		            </div>
		            {articles.map((article) => (
		              <ArticleSmall key={article.id} articleSmallDict={article}/>
		            ))}
				</div>
		);
	}
}