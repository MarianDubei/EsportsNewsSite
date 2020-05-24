import { SET_ARTICLES, SET_TOP_ARTICLE, SET_MATCHES } from '../actions/types';

export default function articles(state, action) {
  switch (action.type) {
    case SET_ARTICLES:
      return { ...state, articles: action.articles };

    case SET_TOP_ARTICLE:
      return { ...state, topArticle: action.topArticle };

    case SET_MATCHES:
      return { ...state, matches: action.matches };

    default:
      return state;
  }
}