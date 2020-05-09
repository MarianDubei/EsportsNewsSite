import React from 'react';

import AsideNews from '../asideNews';
import './schedule.css'

const Match = ({ teamname1, teamlogo1, teamname2, teamlogo2, tournament, game, time, tournamentlogo }) => (
  <div className="match-big">
  	<div className="match-info-time-big">
        <p>{time}</p>
      </div>
    <div className="team1-big">
      <div className="team1-big-img"><img src={teamlogo1}/>
      <p>{teamname1}</p></div>
    </div>
    <div className="team2-big">
      <p>{teamname2}</p>
      <img src={teamlogo2}/>
    </div>
    <div className="match-info-big">
      
      <div className="match-info-tournament-big">
        <p>{tournament}</p>
        <div><img height="18" width="auto"  src={tournamentlogo}/></div>
      </div>
    </div>
  </div>
);

export default class Schedule extends React.Component {

	constructor() {
	    super();

	    this.state = {
	      matches: [
	        {
	          teamname1: "Na'Vi",
	          teamlogo1: "https://cdn.escharts.com/uploads/public/588/a1f/515/thumb_315_0x72_0_0_auto.png",
	          teamname2: "Secret",
	          teamlogo2: "secret.png",
	          game: "DotA 2",
	          tournament: "WePlay Pushka League",
	          time: "1 Apr 20:30",
	          tournamentlogo: "https://escharts.com/themes/responsiv-flat/assets/images/products/trust/weplay.png"
	        },
	        {
	          teamname1: "",
	          teamlogo1: "",
	          teamname2: "",
	          teamlogo2: "",
	          game: "",
	          tournament: "",
	          time: "",
	          tournamentlogo: ""
	        }
	      ]
	    }
	}

	render() {
		return (
			<div className="content">
				<AsideNews/>
				<div className="main-matches">
					{this.state.matches.map((match) => (
						<Match teamname1={match.teamname1} teamlogo1={match.teamlogo1} teamname2={match.teamname2} teamlogo2={match.teamlogo2} tournament={match.tournament} game={match.game} time={match.time} tournamentlogo={match.tournamentlogo}/>
					))}
				</div>
			</div>
		);
	}
}