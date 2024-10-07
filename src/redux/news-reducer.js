import { newsAPI } from '../api/news-api';

const initialState = {
  newsArr: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEWS': {
      return {
        ...state,
        newsArr: action.newsArr,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setNews: (newsArr) => ({
    type: 'SET_NEWS',
    newsArr,
  }),
};

export const getNews = () => async (dispatch) => {
  const data = await newsAPI();
  dispatch(actions.setNews(data));
};

export default newsReducer;
