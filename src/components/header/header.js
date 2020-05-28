import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';


export default class Header extends React.Component {

  render() {
    const mainlinks = [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "News",
          link: "/news",
        },
        {
          text: "Schedule",
          link: "/schedule",
        },
        {
          text: "About",
          link: "/about",
        }
      ];

  const gamelinks = [
        {
          text: "DotA 2",
          link: "/dota-2"
        },
        {
          text: "CS:GO",
          link: "/counter-strike"
        },
        {
          text: "Heartstone",
          link: "/heartstone"
        },
        {
          text: "LOL",
          link: "/lol"
        },
        {
          text: "PUBG",
          link: "/pubg"
        },
        {
          text: "Fortnite",
          link: "/fortnite"
        },
        {
          text: "Apex Legends",
          link: "/apex-legends"
        }
      ];

    return (
      
      <div className="header">
        <div className="main-navbar">
          <div className="site-title">
            <Link to="/">
              <h2>ESPORTS NEWS</h2>
            </Link>
          </div>
          <div className="main-link-wrapper">
            <div className="search-container">
              <form action="/search" method="get">
                <input className="search expandright" id="searchright" type="search" name="q" placeholder="Search news"/>
                <input className="searchsubmit" type="submit" value=""/>
                <label className="button searchbutton" htmlFor="searchright"><span class="mglass">&#9906;</span></label>
              </form>
            </div>
            {mainlinks.map((mainlink) => (
              <div className="main-link">
                <NavLink key={mainlink.id} to={mainlink.link} activeClassName="selected">{mainlink.text}</NavLink>
              </div>
            ))}
          </div>
        </div>
      
        <div className="games-navbar">
          <div className="games-link-wrapper">
            {gamelinks.map((gamelink) => (
              <div className="game-link">
                <NavLink key={gamelink.id} to={gamelink.link} activeClassName="selected">{gamelink.text}</NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

    );
  }
}