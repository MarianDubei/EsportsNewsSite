import React from 'react';
import './asideSchedule.css'

const Match = ({ matchDict }) => (
  <div className="match">
    <div className="team1">
      <img src={matchDict.teamlogo1}/>
      <p>{matchDict.teamname1}</p>
    </div>
    <div className="team2">
      <img src={matchDict.teamlogo2}/>
      <p>{matchDict.teamname2}</p>
    </div>
    <div className="match-info">
      <div className="match-info-time">
        <p>{matchDict.time}</p>
      </div>
      <div className="match-info-tournament">
        <p>{matchDict.tournament}</p>
        <img src={matchDict.tournamentlogo}/>
      </div>
    </div>
  </div>
);

export default Match;