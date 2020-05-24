import React from 'react';
import SectionNews from './sectionNews';
import AsideSchedule from '../asideSchedule';

export default class Home extends React.Component {
	render() {
		return (
			<div className="content">
				<SectionNews/>
				<AsideSchedule/>
			</div>
		);
	}
}