import React from 'react';

import './asideNews.css'
import { Link } from 'react-router-dom';

const ArticleSmall = ({ title, game, gameLink, articleLink, time }) => (
    <div className="article">
      <div className="article-text">
        <Link to={gameLink}>
          <p>{game}</p>
        </Link>
        <Link to={`${gameLink}${articleLink}`}>
          <h4>{title}</h4>
        </Link>
        <p>{time}</p>        
      </div>
    </div>
);

export default class AsideNews extends React.Component {

	constructor() {
		super();
		this.state = {
			latestArticles: [
		        {
		          title: "Dota 2's The International 10 delayed until 'likely' 2021",
		          game: "DOTA 2",
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
		      ]
		}
	}

	render() {
		return (
				<div class='aside-latest-articles'>
					<div className="latest-news-header">
		              <h2>LATEST</h2>
		            </div>
		            {this.state.latestArticles.map((article) => (
		              <ArticleSmall title={article.title} game={article.game} gameLink={article.gameLink} articleLink={article.articleLink} time={article.time}/>
		            ))}
				</div>
		);
	}

}