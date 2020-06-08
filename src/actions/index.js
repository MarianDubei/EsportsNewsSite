import { setArticles, setTopArticle, setMatches } from './creators';


const fetchArticles = () => (dispatch) => {
  fetch('/articles').then(resp => {
    return resp.json();
  }).then(body => {
    dispatch(setArticles(body));
  })
}

const fetchTopArticle = () => (dispatch) => {
  fetch('/topArticle').then(resp => {
    return resp.json();
  }).then(body => {
    dispatch(setTopArticle(body));
  })
}

const fetchMatches = () => (dispatch) => {
  fetch('/matches').then(resp => {
    return resp.json();
  }).then(body => {
    dispatch(setMatches(body));
  })
}


export { fetchArticles, fetchTopArticle, fetchMatches };
