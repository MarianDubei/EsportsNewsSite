import React from 'react';
import Match from "./match"
import './asideSchedule.css'


export default class AsideSchedule extends React.Component {

  constructor() {
    super();

    this.state = {
      matches: [
        {
          teamname1: "Na'Vi",
          teamlogo1: "https://cdn.escharts.com/uploads/public/588/a1f/515/thumb_315_0x72_0_0_auto.png",
          teamname2: "Secret",
          teamlogo2: "https://upload.wikimedia.org/wikipedia/ru/7/71/Team_Secret_logo_notext.png",
          game: "DotA 2",
          tournament: "WePlay Pushka League",
          time: "1 Apr 20:30",
          tournamentlogo: "https://escharts.com/themes/responsiv-flat/assets/images/products/trust/weplay1.png"
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
            <Match key={match.id} matchDict={match}/>
          ))}
      </div>     

    );
  }
}
