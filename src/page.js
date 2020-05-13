import React from 'react';

import './page.css';

const MainLink = ({ text, link }) => (
  <div className="main-link">
    <a href={link}>{text}</a>
  </div>
);

const GameLink = ({ text, link, src }) => (
  <div className="game-link">
    <img src={src}/>
    <a href={link}  >{text}</a>
  </div>
);

export class NavBars extends React.Component {

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
          link: "/",
        },
        {
          text: "Blogs",
          link: "/",
        },
        {
          text: "Schedule",
          link: "/",
        }
      ],
      gamelinks: [
        {
          text: "DotA 2",
          link: "/",
          src: ""
        },
        {
          text: "CS:GO",
          link: "/",
          src: ""
        },
        {
          text: "Heartstone",
          link: "/",
          src: ""
        },
        {
          text: "LOL",
          link: "/",
          src: ""
        },
        {
          text: "PUBG",
          link: "/",
          src: ""
        },
        {
          text: "Fortnite",
          link: "/",
          src: ""
        },
        {
          text: "Apex Legends",
          link: "/",
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
            <h2>ESPORTS NEWS</h2>
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

const Article = ({ title, game, src, full, time }) => (
  <a href={full}>
    <div className="article">
      <img src={src} width="80" height="80" />
      <div className="article-text">
        <p>{game}</p>
        <h3>{title}</h3>
        <p>{time}</p>        
      </div>
    </div>
  </a>
);

function getBgImageStyle(path) {
  return {
      width: '100%',
      height: '300px',
      marginBottom: '20px',
      border: '1px solid black',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundImage: 'url(' + path + ')',
    };
}

export class News extends React.Component {

  constructor() {
    super();

    this.state = {
      topArticle: 
      {
          title: "Dota 2's The International 10 delayed until 'likely' 2021",
          img: "https://img.resized.co/dexerto/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5kZXhlcnRvLmNvbVxcXC91cGxvYWRzXFxcLzIwMjBcXFwvMDVcXFwvMDEwMDU4MjdcXFwvdGkxMC1jYW5jZWxlZC5qcGdcIixcIndpZHRoXCI6NjIwLFwiaGVpZ2h0XCI6MzQ3LFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVxcXC9wcGx1cy5pbWFnZXMuZGV4ZXJ0by5jb21cXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzExXFxcLzExMjE0OTQzXFxcL3BsYWNlaG9sZGVyLmpwZ1wifSIsImhhc2giOiI5N2U5NTg3ZWNmYmY1MGY3ODEzYjI4NGY4OTEwOTk2NjAxN2I2ZDFhIn0=/dota-2-s-the-international-10-delayed-until-likely-2021.jpg",
          full: "/"
      },
      latestArticles: [
        {
          title: "Dota 2's The International 10 delayed until 'likely' 2021",
          game: "DOTA 2",
          img: "article.png",
          full: "/",
          time: "2 Apr 14:30",
        },
        {
          title: "",
          game: "",
          img: "",
          full: "/",
          time: "",
        }
      ],
      trendingArticles: [
        {
          title: "",
          game: "",
          img: "",
          full: "/",
          time: "",
        },
        {
          title: "",
          game: "",
          img: "",
          full: "/",
          time: "",
        }
      ]
    }
  }

  render() {
    return (
      
      <div className="main">
        <div className="top-article" style={getBgImageStyle(this.state.topArticle.img)}>
          <div className="top-article-text">
            <h1>{this.state.topArticle.title}</h1>
          </div>
        </div>
      
        <div className="news">
          <div className="latest-news">
            <div className="latest-news-header">
              <h2>LATEST</h2>
            </div>
            {this.state.latestArticles.map((article) => (
              <Article title={article.title} game={article.game} src={article.img} full={article.full} time={article.time}/>
            ))}
          </div>

          <div className="trending-news">
            <div className="trending-news-header">
              <h2>TRENDING</h2>
            </div>
            {this.state.trendingArticles.map((article) => (
              <Article title={article.title} game={article.game} src={article.img} full={article.full} time={article.time}/>
            ))}
          </div>
        </div>
      </div>

    );
  }
}

const Match = ({ teamname1, teamlogo1, teamname2, teamlogo2, tournament, game, time }) => (
  <div className="match">
    <div className="team1">
      <img src={teamlogo1}/>
      <p>{teamname1}</p>
    </div>
    <div className="team2">
      <img src={teamlogo2}/>
      <p>{teamname2}</p>
    </div>
    <div className="match-info">
      <div className="match-info-time">
        <p>{time}</p>
      </div>
      <div className="match-info-tournament">
        <p>{tournament}</p>
        <img src={game}/>
      </div>
    </div>
  </div>
);

export class Schedule extends React.Component {

  constructor() {
    super();

    this.state = {
      matches: [
        {
          teamname1: "Na'Vi",
          teamlogo1: "navi.png",
          teamname2: "VP",
          teamlogo2: "vp.png",
          game: "DotA 2",
          tournament: "WePlay Pushka League D.1",
          time: "1 Apr 20:30"
        },
        {
          teamname1: "",
          teamlogo1: "",
          teamname2: "",
          teamlogo2: "",
          game: "",
          tournament: "",
          time: ""
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
            <Match teamname1={match.teamname1} teamlogo1={match.teamlogo1} teamname2={match.teamname2} teamlogo2={match.teamlogo2} tournament={match.tournament} game={match.game} time={match.time}/>
          ))}
      </div>     

    );
  }
}
