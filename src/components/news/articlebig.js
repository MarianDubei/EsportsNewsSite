import React from 'react';
import './news.css'
import { Link } from 'react-router-dom';

const ArticleBig = ({ articleBigDict }) => (
    <div className="article-big">
      <div className="article-big-img" style={{backgroundImage: 'url(' + articleBigDict.img + ')'}} />
      <div className="article-big-text">
        <Link to={articleBigDict.gameLink}>
          <p>{articleBigDict.game}</p>
        </Link>
        <Link to={`${articleBigDict.gameLink}${articleBigDict.articleLink}`}>
          <h2>{articleBigDict.title}</h2>
        </Link>
        <p>{articleBigDict.time}</p>        
      </div>
    </div>
);

export default ArticleBig;