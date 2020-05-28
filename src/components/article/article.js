import React from 'react';
import AsideSchedule from '../asideSchedule';
import AsideNews from '../asideNews';
import './article.css'

export default class Article extends React.Component {

	render() {
		const { articles, article, matches } = this.props;

		return (
			<div className="content">
				<AsideNews articles={articles}/>
				<div className='main-article'>
					<h1>{article.title}</h1>
					<p>{article.text}</p>
				</div>
				<AsideSchedule matches={matches}/>
			</div>
		);
	}
}
