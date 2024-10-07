import { connect } from 'react-redux';
import { getLanguage } from '../../redux/language-reducer';
import Footer from './Footer';

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    FOOTER: state.language.FOOTER,
  };
};

export default connect(mapStateToProps, { getLanguage })(Footer);
