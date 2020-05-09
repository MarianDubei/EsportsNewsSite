import React from 'react';

import { Link } from 'react-router-dom';
import './sectionNews.css'

const ArticleMedium = ({ title, game, src, gameLink, articleLink, time }) => (
    <div className="article">
      <img src={src} width="80" height="80" />
      <div className="article-text">
        <Link to={gameLink}>
          <p>{game}</p>
        </Link>
        <Link to={`${gameLink}${articleLink}`}>
          <h3>{title}</h3>
        </Link>
        <p>{time}</p>        
      </div>
    </div>
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

export default class SectionNews extends React.Component {

  constructor() {
    super();

    this.state = {
      topArticle: 
      {
          title: "Dota 2's The International 10 delayed until 'likely' 2021",
          img: "https://img.resized.co/dexerto/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5kZXhlcnRvLmNvbVxcXC91cGxvYWRzXFxcLzIwMjBcXFwvMDVcXFwvMDEwMDU4MjdcXFwvdGkxMC1jYW5jZWxlZC5qcGdcIixcIndpZHRoXCI6NjIwLFwiaGVpZ2h0XCI6MzQ3LFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVxcXC9wcGx1cy5pbWFnZXMuZGV4ZXJ0by5jb21cXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzExXFxcLzExMjE0OTQzXFxcL3BsYWNlaG9sZGVyLmpwZ1wifSIsImhhc2giOiI5N2U5NTg3ZWNmYmY1MGY3ODEzYjI4NGY4OTEwOTk2NjAxN2I2ZDFhIn0=/dota-2-s-the-international-10-delayed-untilLikely-2021.jpg",
          full: "/dota-2/dota-2s-the-international-10-delayed"
      },
      latestArticles: [
        {
          title: "Dota 2's The International 10 delayed until 'likely' 2021",
          game: "DOTA 2",
          img: "article.png",
          gameLink: "/dota-2",
          articleLink: "/dota-2s-the-international-10-delayed",
          time: "2 Apr 14:30",
        },
        {
          title: "Leaked CSGO source code could lead to more hacks & cheats",
          game: "CS:GO",
          img: "article.png",
          gameLink: "/counter-strike",
          articleLink: "/leaked-csgo-source-code-could-lead-to-more-hacks-n-cheats",
          time: "3 Apr 12:00",
        },
        {
          title: "",
          game: "",
          img: "",
          gameLink: "",
          articleLink: "",
          time: "",
        },
        {
          title: "",
          game: "",
          img: "",
          gameLink: "",
          articleLink: "",
          time: "",
        },
        {
          title: "",
          game: "",
          img: "",
          gameLink: "",
          articleLink: "",
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
          gameLink: "",
          articleLink: "",
          time: "",
        },
        {
          title: "",
          game: "",
          img: "",
          gameLink: "",
          articleLink: "",
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
            <Link to={this.state.topArticle.full}>
              <h1>{this.state.topArticle.title}</h1>
            </Link>
          </div>
        </div>
      
        <div className="news">
          <div className="latest-news">
            <div className="latest-news-header">
              <h2>LATEST</h2>
            </div>
            {this.state.latestArticles.map((article) => (
              <ArticleMedium title={article.title} game={article.game} src={article.img} gameLink={article.gameLink} articleLink={article.articleLink} time={article.time}/>
            ))}
          </div>

          <div className="trending-news">
            <div className="trending-news-header">
              <h2>TRENDING</h2>
            </div>
            {this.state.trendingArticles.map((article) => (
              <ArticleMedium title={article.title} game={article.game} src={article.img} gameLink={article.gameLink} articleLink={article.articleLink} time={article.time}/>
            ))}
          </div>
        </div>
      </div>

    );
  }
}
