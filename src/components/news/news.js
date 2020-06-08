import React from 'react';
import AsideSchedule from '../asideSchedule';
import './news.css';
import { Link } from 'react-router-dom';
import ArticleBig from "./articleBig";
import { connect } from 'react-redux';

class News extends React.Component {

	render() {
		let { articles, matches, search, game } = this.props;
		if (search) {
			articles = articles.filter((article) => article.title.toLowerCase().includes(search) || article.text.toLowerCase().includes(search) );
		}
		if (game) {
			articles = articles.filter((article) => article.gameLink.includes(game));
		}
		return (

			<div className="content">
				<div className="news-big">

					{articles.map((article) => (
					  <ArticleBig key={article.id} articleBigData = {article} />
					))}
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

export default connect(mapStateToProps, null)(News);
