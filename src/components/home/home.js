import React from 'react';
import SectionNews from './sectionNews';
import AsideSchedule from '../asideSchedule';

export default class Home extends React.Component {
	render() {
		const { articles, topArticle, matches } = this.props;
		return (
			<div className="content">
				<SectionNews articles={articles} topArticle={topArticle}/>
				<AsideSchedule matches={matches}/>
			</div>
		);
	}
}