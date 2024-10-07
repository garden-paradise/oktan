import { connect } from 'react-redux';
import Questionary from './Questionary';

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    QUESTIONARY: state.language.QUESTIONARY,
    FORMSECTIONBIG: state.language.FORMSECTIONBIG,
  };
};

export default connect(mapStateToProps, { undefined })(Questionary);
