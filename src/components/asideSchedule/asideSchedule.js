import React from 'react';

import './asideSchedule.css'

const Match = ({ teamname1, teamlogo1, teamname2, teamlogo2, tournament, game, time, tournamentlogo }) => (
  <div className="match">
    <div className="team1">
      <img width="18" height="18" src={teamlogo1}/>
      <p>{teamname1}</p>
    </div>
    <div className="team2">
      <img width="18" height="18" src={teamlogo2}/>
      <p>{teamname2}</p>
    </div>
    <div className="match-info">
      <div className="match-info-time">
        <p>{time}</p>
      </div>
      <div className="match-info-tournament">
        <p>{tournament}</p>
        <img height="18" width="auto"  src={tournamentlogo}/>
      </div>
    </div>
  </div>
);

export default class AsideSchedule extends React.Component {

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
      
      <div className="aside">
        <div className="aside-header">
          <h2>UPCOMING MATCHES</h2>
        </div>
        {this.state.matches.map((match) => (
            <Match teamname1={match.teamname1} teamlogo1={match.teamlogo1} teamname2={match.teamname2} teamlogo2={match.teamlogo2} tournament={match.tournament} game={match.game} time={match.time} tournamentlogo={match.tournamentlogo}/>
          ))}
      </div>     

    );
  }
}
