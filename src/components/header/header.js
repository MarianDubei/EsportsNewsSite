import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import './header.css';

const MainLink = ({ text, link }) => (
  <div className="main-link">
    <NavLink to={link} activeClassName="selected">{text}</NavLink>
  </div>
);

const GameLink = ({ text, link, src }) => (
  <div className="game-link">
    <img src={src}/>
    <NavLink to={link} activeClassName="selected">{text}</NavLink>
  </div>
);

export default class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      mainlinks: [
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
      ],
      gamelinks: [
        {
          text: "DotA 2",
          link: "/dota-2",
          src: ""
        },
        {
          text: "CS:GO",
          link: "/counter-strike",
          src: ""
        },
        {
          text: "Heartstone",
          link: "/heartstone",
          src: ""
        },
        {
          text: "LOL",
          link: "/lol",
          src: ""
        },
        {
          text: "PUBG",
          link: "/pubg",
          src: ""
        },
        {
          text: "Fortnite",
          link: "/fortnite",
          src: ""
        },
        {
          text: "Apex Legends",
          link: "/apex-legends",
          src: ""
        }
      ]
    };
  }

  render() {
    return (
      
      <div className="header">
        <div className="main-navbar">
          <div className="site-title">
            <Link to="/">
              <h2>ESPORTS NEWS</h2>
            </Link>
          </div>
          <div className="main-link-wrapper">
            {this.state.mainlinks.map((mainlink) => (
              <MainLink text={mainlink.text} link={mainlink.link} />
            ))}
          </div>
        </div>
      
        <div className="games-navbar">
          <div className="games-link-wrapper">
            {this.state.gamelinks.map((gamelink) => (
              <GameLink text={gamelink.text} link={gamelink.link} src={gamelink.src}/>
            ))}
          </div>
        </div>
      </div>

    );
  }
}