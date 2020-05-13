import React from 'react';
import './schedule.css'

const MatchBig = ({ matchBigDict }) => (
  <div className="match-big">
  	<div className="match-info-time-big">
        <p>{matchBigDict.time}</p>
      </div>
    <div className="team1-big">
      <div className="team1-big-img"><img src={matchBigDict.teamlogo1}/>
      <p>{matchBigDict.teamname1}</p></div>
    </div>
    <div className="team2-big">
      <p>{matchBigDict.teamname2}</p>
      <img src={matchBigDict.teamlogo2}/>
    </div>
    <div className="match-info-big">
      
      <div className="match-info-tournament-big">
        <p>{matchBigDict.tournament}</p>
        <div className="match-info-tournament-big-img"><img src={matchBigDict.tournamentlogo}/></div>
      </div>
    </div>
  </div>
);

export default MatchBig;