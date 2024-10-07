import { connect } from 'react-redux';
import FormSection from '../../../reusable/FormSection/FormSection';
import './ProductFive.scss';

const ProductFive = ({ language, PRODUCT5 }) => {
  return (
    <section className='PagePadding productFive'>
      <section className='Сontainer productFive-one'>
        <div className='productFive-oneInfo'>
          <div className='SectionTitle'> {PRODUCT5.title[language]}</div>
          <div className='productFive-oneSubtitle'>
            {PRODUCT5.subtitle[language]}
          </div>
          <div className='productFive-text'> {PRODUCT5.text[language]}</div>
        </div>
        <iframe
          className='productFive-iframe'
          src='https://www.youtube.com/embed/CQnwlVLP-a4'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </section>
      <FormSection />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    PRODUCT5: state.language.PRODUCT5,
  };
};

export default connect(mapStateToProps, { undefined })(ProductFive);
