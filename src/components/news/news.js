import React from 'react';

import AsideSchedule from '../asideSchedule';
import './news.css'
import { Link } from 'react-router-dom';

const ArticleBig = ({ title, game, src, gameLink, articleLink, time }) => (
    <div className="article-big">
      <img src={src} width="120" height="120" />
      <div className="article-big-text">
        <Link to={gameLink}>
          <p>{game}</p>
        </Link>
        <Link to={`${gameLink}${articleLink}`}>
          <h2>{title}</h2>
        </Link>
        <p>{time}</p>        
      </div>
    </div>
);

export default class News extends React.Component {

	constructor() {
	    super();
	    this.state = {

	    	articlesTitles: [
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
		const { game } = this.props;
		return (

			<div className="content">
				<div className="news-big">
					{this.state.articlesTitles.filter((article) => article.gameLink.includes(game) || !game ).map((article) => (
					  <ArticleBig title={article.title} game={article.game} src={article.img} gameLink={article.gameLink} articleLink={article.articleLink} time={article.time}/>
					))}
				</div>

				<AsideSchedule/>
			</div>
		);
	}
}