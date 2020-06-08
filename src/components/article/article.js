import React from 'react';
import AsideSchedule from '../asideSchedule';
import AsideNews from '../asideNews';
import './article.css';
import { connect } from 'react-redux';

class Article extends React.Component {

	render() {
		const { articles, articleLink, matches } = this.props;
		const article = articles.find((article) => article.articleLink.includes(articleLink))
		return (
			<div className="content">
				<AsideNews/>
				<div className='main-article'>
					<h1>{article.title}</h1>
					<p>{article.text}</p>
				</div>
				<AsideSchedule/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  matches: state.matches,
});

export default connect(mapStateToProps, null)(Article);
