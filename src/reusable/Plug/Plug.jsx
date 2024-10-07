import { connect } from 'react-redux';
import './Plug.scss';

const Plug = ({ language, PLUG }) => {
  return (
    <section className='plug'>
      <div className='Сontainer plug-text'>{PLUG.text[language]}</div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    PLUG: state.language.PLUG,
  };
};

export default connect(mapStateToProps, { undefined })(Plug);
