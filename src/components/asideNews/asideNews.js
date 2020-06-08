import React from 'react';
import ArticleSmall from "./articleSmall"
import { Link } from 'react-router-dom';
import './asideNews.css'
import { connect } from 'react-redux';

class AsideNews extends React.Component {

	render() {
		const { articles } = this.props;
		return (
				<div class='aside-latest-articles'>
					<div className="latest-news-header">
		              <h2>LATEST</h2>
		            </div>
		            {articles.map((article) => (
		              <ArticleSmall key={article.id} articleSmallData={article}/>
		            ))}
				</div>
		);
	}
}

const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps, null)(AsideNews);
