import React from 'react';
import ArticleMedium from "./articleMedium"
import { Link } from 'react-router-dom';
import './sectionNews.css'
import { connect } from 'react-redux';

class SectionNews extends React.Component {

  render() {
    const { articles, topArticle } = this.props;
    const trendingArticles = articles.slice();
    trendingArticles.sort((a,b) => (a.likes < b.likes) ? 1 : ((b.likes < a.likes) ? -1 : 0));
    return (
      
      <div className="main">
        <div className="top-article" style={{backgroundImage: 'url(' + topArticle.img + ')'}}>
          <div className="top-article-text">
            <Link to={topArticle.link}>
              <h1>{topArticle.title}</h1>
            </Link>
          </div>
        </div>
      
        <div className="news">
          <div className="latest-news">
            <div className="latest-news-header">
              <h2>LATEST</h2>
            </div>
            {articles.map((article) => (
              <ArticleMedium key={article.id} articleMediumData={article}/>
            ))}
          </div>

          <div className="trending-news">
            <div className="trending-news-header">
              <h2>TRENDING</h2>
            </div>
            {trendingArticles.map((article) => (
              <ArticleMedium key={article.id} articleMediumData={article}/>
            ))}
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  topArticle: state.topArticle,
});

export default connect(mapStateToProps, null)(SectionNews);
