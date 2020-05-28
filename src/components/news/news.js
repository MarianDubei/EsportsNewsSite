import React from 'react';
import AsideSchedule from '../asideSchedule';
import './news.css'
import { Link } from 'react-router-dom';
import ArticleBig from "./articlebig"


export default class News extends React.Component {

	render() {
		const { articles, matches } = this.props;

		return (

			<div className="content">
				<div className="news-big">

					{articles.map((article) => (
					  <ArticleBig key={article.id} articleBigDict = {article} />
					))}
				</div>

				<AsideSchedule matches={matches}/>
			</div>
		);
	}
}
