import React from 'react';
import AsideNews from '../asideNews';
import MatchBig from "./matchBig";
import './schedule.css';
import { connect } from 'react-redux';

class Schedule extends React.Component {

	render() {
		const { articles, matches } = this.props;
		return (
			<div className="content">
				<AsideNews/>
				<div className="main-matches">
					{matches.map((match) => (
						<MatchBig key={match.id} matchBigData={match}/>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  matches: state.matches,
});

export default connect(mapStateToProps, null)(Schedule);
