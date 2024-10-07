import ImagesCarousel from '../../../reusable/ImagesCarousel/ImagesCarousel';
import FormSectionBig from '../../../reusable/FormSectionBig/FormSectionBig';
import './ProductTwo.scss';
import { connect } from 'react-redux';

const ProductTwo = ({ language, PRODUCT2 }) => {
  return (
    <section className='PagePadding productTwo'>
      <section className='Сontainer productTwo-one'>
        <div className='productTwo-oneInfo'>
          <div className='SectionTitle'>{PRODUCT2.title[language]}</div>
          <div className='productTwo-oneSubtitle'>
            {PRODUCT2.subtitle[language]}
          </div>
          <div className='productTwo-text'>{PRODUCT2.text1[language]}</div>
          <div className='productTwo-text'>{PRODUCT2.text2[language]}</div>
        </div>
      </section>
      <FormSectionBig />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    PRODUCT2: state.language.PRODUCT2,
  };
};

export default connect(mapStateToProps, { undefined })(ProductTwo);
