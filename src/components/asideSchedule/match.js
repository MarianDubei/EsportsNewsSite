import React from 'react';
import './asideSchedule.css'

const Match = ({ matchData }) => (
  <div className="match">
    <div className="team1">
      <img src={matchData.team1.logo}/>
      <p>{matchData.team1.name}</p>
    </div>
    <div className="team2">
      <img src={matchData.team2.logo}/>
      <p>{matchData.team2.name}</p>
    </div>
    <div className="match-info">
      <div className="match-info-time">
        <p>{matchData.time}</p>
      </div>
      <div className="match-info-tournament">
        <p>{matchData.tournament}</p>
        <img src={matchData.tournamentlogo}/>
      </div>
    </div>
  </div>
);

export default Match;