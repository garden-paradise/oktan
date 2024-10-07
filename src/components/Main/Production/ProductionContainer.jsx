import { connect } from 'react-redux';
import Production from './Production';

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    PRODUCTCARD: state.language.PRODUCTCARD,
  };
};

export default connect(mapStateToProps, { undefined })(Production);
