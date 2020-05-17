import React from 'react';
import Match from "./match"
import './asideSchedule.css'


export default class AsideSchedule extends React.Component {

  render() {
    const {matches} = this.props;

    return (
      
      <div className="aside">
        <div className="aside-header">
          <h2>UPCOMING MATCHES</h2>
        </div>
        {matches.map((match) => (
            <Match key={match.id} matchDict={match}/>
          ))}
      </div>     

    );
  }
}
