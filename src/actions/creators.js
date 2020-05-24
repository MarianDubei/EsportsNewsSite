import { SET_ARTICLES, SET_TOP_ARTICLE, SET_MATCHES  } from "./types"

const setArticles = (articles) => ({ type: SET_ARTICLES, articles });

const setTopArticle = (topArticle) => ({ type: SET_TOP_ARTICLE, topArticle });

const setMatches = (matches) => ({ type: SET_MATCHES, matches });

export { setArticles, setTopArticle, setMatches };