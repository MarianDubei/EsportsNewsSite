import React from 'react';
import './schedule.css'

const MatchBig = ({ matchBigData }) => (
  <div className="match-big">
  	<div className="match-info-time-big">
        <p>{matchBigData.time}</p>
      </div>
    <div className="team1-big">
      <div className="team1-big-img"><img src={matchBigData.team1.logo}/>
      <p>{matchBigData.team1.name}</p></div>
    </div>
    <div className="team2-big">
      <p>{matchBigData.team2.name}</p>
      <img src={matchBigData.team2.logo}/>
    </div>
    <div className="match-info-big">
      
      <div className="match-info-tournament-big">
        <p>{matchBigData.tournament}</p>
        <div className="match-info-tournament-big-img"><img src={matchBigData.tournamentlogo}/></div>
      </div>
    </div>
  </div>
);

export default MatchBig;