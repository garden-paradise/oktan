import { connect } from 'react-redux';
import { getLanguage } from '../../redux/language-reducer';
import { getNews } from '../../redux/news-reducer';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    HEADER: state.language.HEADER,
  };
};

export default connect(mapStateToProps, { getLanguage, getNews })(Header);
