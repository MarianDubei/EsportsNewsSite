import React from 'react';
import AsideSchedule from '../asideSchedule';
import AsideNews from '../asideNews';
import './article.css'

export default class Article extends React.Component {

	constructor() {
	    super();
	    this.state = {

	    	articles: [
	    	{
	    		game: "dota-2",
	    		link: "dota-2s-the-international-10-delayed",
	    		title: "Dota 2's The International 10 delayed until 'likely' 2021",
	    		text: `Dota 2’s TI10, set to be held in Stockholm, Sweden, in August, will be delayed until “likely” 2021, although no dates have been locked in as of yet.
Dota 2 fans will have to wait another few months for The International this year. The multi-million dollar tournament has been delayed indefinitely, although it’s “likely” the date will be pushed back into 2021.

The Battle Pass, alongside other rewards associated with the event, have also been postponed.

In an announcement on April 30, Valve noted that it was almost impossible to commit to their August date given the current global situation.`
	    	},
	    	{
	    		game: "counter-strike",
	    		link: "leaked-csgo-source-code-could-lead-to-more-hacks-n-cheats",
	    		title: "Leaked CSGO source code could lead to more hacks & cheats",
	    		text: `Exposure for leaked source code to Counter-Strike: Global Offensive and Team Fortress 2 has experts concerned that it could possibly lead to cheats, exploits, and a fastrack to Valve’s Source 2.
Though an outdated model, source code for Valve’s beloved FPS title has been getting shared online. This gives everyone from CSGO enthusiasts to malicious actors a way to “literally build the game,” according to ‘2Eggss,’ an ethical hacker and Steamworks developer.
To be clear, everything that hackers and exploit makers needed to make cheats in CSGO was already out in the wild, which is why services like the Valve anti-cheat (VAC) system exist to try to thwart any potential hacks that may come out of them.`
	    	},
	    	{
	    		game: "",
	    		link: "",
	    		title: "",
	    		text: ""
	    	}
	    	]

	    }	    
	}

	render() {
		const { game, articleLink } = this.props;
		const currentArticle = this.state.articles.find((article) => article.link == articleLink);
		return (
			<div className="content">
				<AsideNews/>
				<div className='main-article'>
					<h1>{currentArticle.title}</h1>
					<p>{currentArticle.text}</p>
				</div>
				<AsideSchedule/>
			</div>
		);
	}
}
