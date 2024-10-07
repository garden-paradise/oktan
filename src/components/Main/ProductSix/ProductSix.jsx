import { connect } from 'react-redux';
import FormSection from '../../../reusable/FormSection/FormSection';
import ImagesCarousel from '../../../reusable/ImagesCarousel/ImagesCarousel';
import './ProductSix.scss';

const ProductSix = ({ language, PRODUCT6, CAROUSEL }) => {
  return (
    <section className='PagePadding productSix'>
      <section className='Сontainer productSix-one'>
        <div className='productSix-oneInfo'>
          <div className='SectionTitle'>{PRODUCT6.title[language]}</div>
          <div className='productSix-oneSubtitle'>
            {PRODUCT6.subtitle[language]}
          </div>
          <div className='productSix-text'>{PRODUCT6.text[language]}</div>
        </div>
        <iframe
          className='productSix-iframe'
          src='https://www.youtube.com/embed/6obySpiZUvI'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </section>
      <div className='productSix-bottom'>
        <ImagesCarousel
          videos={[
            'rrTuow-Bcbc',
            'vZ4rss-Eb9Y',
            'owmJyIsJ4T0',
            'Q5JMTyiyDxk',
            'CQnwlVLP-a4',
          ]}
          title={CAROUSEL.title[language]}
          green={true}
        />
      </div>

      <FormSection />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    PRODUCT6: state.language.PRODUCT6,
    CAROUSEL: state.language.CAROUSEL,
  };
};

export default connect(mapStateToProps, { undefined })(ProductSix);
