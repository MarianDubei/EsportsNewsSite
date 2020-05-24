import React from 'react';
import Match from "./match"
import './asideSchedule.css'
import { connect } from 'react-redux';

class AsideSchedule extends React.Component {

  render() {
    const {matches} = this.props;

    return (
      
      <div className="aside">
        <div className="aside-header">
          <h2>UPCOMING MATCHES</h2>
        </div>
        {matches.map((match) => (
            <Match key={match.id} matchData={match}/>
          ))}
      </div>     

    );
  }
}

const mapStateToProps = (state) => ({
  matches: state.matches,
});

export default connect(mapStateToProps, null)(AsideSchedule);
