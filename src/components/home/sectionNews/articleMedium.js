import React from 'react';
import { Link } from 'react-router-dom';
import './sectionNews.css'

const ArticleMedium = ({ articleMediumData }) => (
    <div className="article">
      <div className="article-img" style={{backgroundImage: 'url(' + articleMediumData.img + ')'}} />
      <div className="article-text">
        <Link to={articleMediumData.gameLink}>
          <p>{articleMediumData.game}</p>
        </Link>
        <Link to={`${articleMediumData.gameLink}${articleMediumData.articleLink}`}>
          <h3>{articleMediumData.title}</h3>
        </Link>
        <p>{articleMediumData.time}</p>        
      </div>
    </div>
);

export default ArticleMedium;