import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    newsArr: state.news.newsArr,
    HOME: state.language.HOME,
    NEWS: state.language.NEWS,
    CONTACTS: state.language.CONTACTS,
    PRODUCTCARD: state.language.PRODUCTCARD,
  };
};

export default connect(mapStateToProps, { undefined })(Home);
