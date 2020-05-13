import React from 'react';
import ArticleMedium from "./articlemedium"
import { Link } from 'react-router-dom';
import './sectionNews.css'

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
          img: "https://img.resized.co/dexerto/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5kZXhlcnRvLmNvbVxcXC91cGxvYWRzXFxcLzIwMjBcXFwvMDVcXFwvMDEwMDU4MjdcXFwvdGkxMC1jYW5jZWxlZC5qcGdcIixcIndpZHRoXCI6OTMwLFwiaGVpZ2h0XCI6NTIwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVxcXC9wcGx1cy5pbWFnZXMuZGV4ZXJ0by5jb21cXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzExXFxcLzExMjE0OTQzXFxcL3BsYWNlaG9sZGVyLmpwZ1wifSIsImhhc2giOiJiMmQ3ZmEyOTAyYTY0YzI3M2U5ZWU0OWZmYmYwODdiZmNiNzBiZGI0In0=/dota-2-s-the-international-10-delayed-until-likely-2021.jpg",
          gameLink: "/dota-2",
          articleLink: "/dota-2s-the-international-10-delayed",
          time: "2 Apr 14:30",
        },
        {
          title: "Leaked CSGO source code could lead to more hacks & cheats",
          game: "CS:GO",
          img: "https://img.resized.co/dexerto/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5kZXhlcnRvLmNvbVxcXC91cGxvYWRzXFxcLzIwMjBcXFwvMDRcXFwvMjIyMDA4MDdcXFwvbGVha2VkLWNzZ28tc291cmNlLWNvZGUtY291bGQtbGVhZC10by1tb3JlLWhhY2tzLWNoZWF0cy5qcGdcIixcIndpZHRoXCI6NjAwLFwiaGVpZ2h0XCI6MzM2LFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVxcXC9wcGx1cy5pbWFnZXMuZGV4ZXJ0by5jb21cXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzExXFxcLzExMjE0OTQzXFxcL3BsYWNlaG9sZGVyLmpwZ1wifSIsImhhc2giOiJlZTE5YzgwMDExOTVlMGVkYWY4MTgwNGMwZGEyOWJjZGMyYTU5OGU4In0=/leaked-csgo-source-code-could-lead-to-more-hacks-cheats.jpg",
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
        <div className="top-article" style={{backgroundImage: 'url(' + this.state.topArticle.img + ')'}}>
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
              <ArticleMedium key={article.id} articleMediumDict={article}/>
            ))}
          </div>

          <div className="trending-news">
            <div className="trending-news-header">
              <h2>TRENDING</h2>
            </div>
            {this.state.trendingArticles.map((article) => (
              <ArticleMedium key={article.id} articleMediumDict={article}/>
            ))}
          </div>
        </div>
      </div>

    );
  }
}
