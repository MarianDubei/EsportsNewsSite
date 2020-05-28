import React from 'react';
import AsideNews from '../asideNews';
import MatchBig from "./matchbig"
import './schedule.css'

export default class Schedule extends React.Component {

	render() {
		const { articles, matches } = this.props;
		return (
			<div className="content">
				<AsideNews articles={articles}/>
				<div className="main-matches">
					{matches.map((match) => (
						<MatchBig key={match.id} matchBigDict={match}/>
					))}
				</div>
			</div>
		);
	}
}