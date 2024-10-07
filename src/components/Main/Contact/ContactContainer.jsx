import { connect } from 'react-redux';
import Contact from './Contact';

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    CONTACTS: state.language.CONTACTS,
  };
};

export default connect(mapStateToProps, { undefined })(Contact);
