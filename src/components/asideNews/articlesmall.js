import React from 'react';
import { Link } from 'react-router-dom';
import './asideNews.css'

const ArticleSmall = ({ articleSmallDict }) => (
    <div className="article">
      <div className="article-text">
        <Link to={articleSmallDict.gameLink}>
          <p>{articleSmallDict.game}</p>
        </Link>
        <Link to={`${articleSmallDict.gameLink}${articleSmallDict.articleLink}`}>
          <h4>{articleSmallDict.title}</h4>
        </Link>
        <p>{articleSmallDict.time}</p>        
      </div>
    </div>
);

export default ArticleSmall;