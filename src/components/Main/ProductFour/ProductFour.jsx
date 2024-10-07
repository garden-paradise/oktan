import './ProductFour.scss';
import FormSectionBig from '../../../reusable/FormSectionBig/FormSectionBig';
import ImagesCarousel from '../../../reusable/ImagesCarousel/ImagesCarousel';
import { connect } from 'react-redux';

const ProductFour = ({ language, PRODUCT4, CAROUSEL }) => {
  return (
    <section className='PagePadding productFour'>
      <section className='Сontainer productFour-one'>
        <div className='productFour-oneInfo'>
          <div className='SectionTitle'> {PRODUCT4.title[language]}</div>
          <div className='productFour-oneSubtitle'>
            {PRODUCT4.subtitle[language]}
          </div>
          <div className='productFour-text'>{PRODUCT4.text1[language]}</div>
        </div>
        <iframe
          className='productFour-iframe'
          src='https://www.youtube.com/embed/-dx9zHnQTao'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </section>
      <section className='Сontainer productFour-two'>
        <iframe
          className='productFour-iframe'
          src='https://www.youtube.com/embed/HL0PHMfwciU'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
        <div className='productFour-twoInfo'>
          <div className='home-oneTextBold'>{PRODUCT4.text2[language]}</div>
          <div className='productFour-text'>{PRODUCT4.text3[language]}</div>
        </div>
      </section>
      <section className='Сontainer productFour-three'>
        <div className='productFour-threeBlock'>
          <div className='productFour-text'>{PRODUCT4.text4[language]}</div>
          <div className='productFour-text'>{PRODUCT4.text5[language]}</div>
          <div className='productFour-text'>{PRODUCT4.text6[language]}</div>
        </div>
        <div className='productFour-threeBlock'>
          <div className='productFour-text'>{PRODUCT4.text7[language]}</div>
          <div className='productFour-text'>{PRODUCT4.text8[language]}</div>
          <div className='productFour-text'>{PRODUCT4.text9[language]}</div>
        </div>
      </section>
      <section className='Сontainer productFour-three'>
        <div className='productFour-threeBlock'>
          <div className='home-oneTextBold productFour-oneTextBoldText'>
            {PRODUCT4.text10[language]}
          </div>
          <div className='productFour-text'>{PRODUCT4.text11[language]}</div>
        </div>
        <div className='productFour-threeBlock'>
          <div className='productFour-text'>{PRODUCT4.text12[language]}</div>
          <div className='productFour-text'>{PRODUCT4.text13[language]}</div>
        </div>
      </section>
      <section className='productFour-four'>
        <ImagesCarousel
          videos={['-dx9zHnQTao', 'gfaXutelT-o', 'HL0PHMfwciU', 'm-rObxynaNo']}
          title={CAROUSEL.title[language]}
          green={true}
        />
      </section>
      <FormSectionBig />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    PRODUCT4: state.language.PRODUCT4,
    CAROUSEL: state.language.CAROUSEL,
  };
};

export default connect(mapStateToProps, { undefined })(ProductFour);
