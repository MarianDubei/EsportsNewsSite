import React from 'react';
import { Link } from 'react-router-dom';
import './sectionNews.css'

const ArticleMedium = ({ articleMediumDict }) => (
    <div className="article">
      <div className="article-img" style={{backgroundImage: 'url(' + articleMediumDict.img + ')'}} />
      <div className="article-text">
        <Link to={articleMediumDict.gameLink}>
          <p>{articleMediumDict.game}</p>
        </Link>
        <Link to={`${articleMediumDict.gameLink}${articleMediumDict.articleLink}`}>
          <h3>{articleMediumDict.title}</h3>
        </Link>
        <p>{articleMediumDict.time}</p>        
      </div>
    </div>
);

export default ArticleMedium;