import React from 'react';
import './news.css'
import { Link } from 'react-router-dom';

const ArticleBig = ({ articleBigData }) => (
    <div className="article-big">
      <div className="article-big-img" style={{backgroundImage: 'url(' + articleBigData.img + ')'}} />
      <div className="article-big-text">
        <Link to={articleBigData.gameLink}>
          <p>{articleBigData.game}</p>
        </Link>
        <Link to={`${articleBigData.gameLink}${articleBigData.articleLink}`}>
          <h2>{articleBigData.title}</h2>
        </Link>
        <p>{articleBigData.time}</p>        
      </div>
    </div>
);

export default ArticleBig;