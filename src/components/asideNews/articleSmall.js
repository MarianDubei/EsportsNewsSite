import React from 'react';
import { Link } from 'react-router-dom';
import './asideNews.css'

const ArticleSmall = ({ articleSmallData }) => (
    <div className="article">
      <div className="article-text">
        <Link to={articleSmallData.gameLink}>
          <p>{articleSmallData.game}</p>
        </Link>
        <Link to={`${articleSmallData.gameLink}${articleSmallData.articleLink}`}>
          <h4>{articleSmallData.title}</h4>
        </Link>
        <p>{articleSmallData.time}</p>        
      </div>
    </div>
);

export default ArticleSmall;