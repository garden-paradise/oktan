import './ProductOne.scss';
import img1 from '../../../images/main/ProductOne/img1.png';
import img2 from '../../../images/main/ProductOne/img2.png';
import img3 from '../../../images/main/ProductOne/img3.png';
import img4 from '../../../images/main/ProductOne/img4.png';
import img4EN from '../../../images/main/ProductOne/img4EN.png';
import img5 from '../../../images/main/ProductOne/img5.png';
import img5EN from '../../../images/main/ProductOne/img5EN.png';
import galleryOne1 from '../../../images/main/ProductOne/galleryOne1.jpg';
import galleryOne2 from '../../../images/main/ProductOne/galleryOne2.jpg';
import galleryOne3 from '../../../images/main/ProductOne/galleryOne3.jpg';
import galleryOne4 from '../../../images/main/ProductOne/galleryOne4.jpg';
import galleryOne5 from '../../../images/main/ProductOne/galleryOne5.jpg';
import galleryOne6 from '../../../images/main/ProductOne/galleryOne6.jpg';
import galleryOne7 from '../../../images/main/ProductOne/galleryOne7.jpg';
import galleryOne8 from '../../../images/main/ProductOne/galleryOne8.jpg';
import galleryOne9 from '../../../images/main/ProductOne/galleryOne9.jpg';
import galleryOne10 from '../../../images/main/ProductOne/galleryOne10.jpg';
import galleryOne11 from '../../../images/main/ProductOne/galleryOne11.jpg';
import galleryOne12 from '../../../images/main/ProductOne/galleryOne12.jpg';
import UlLi from '../../../reusable/UlLi/UlLi';
import FormSectionBig from '../../../reusable/FormSectionBig/FormSectionBig';
import ImagesCarousel from '../../../reusable/ImagesCarousel/ImagesCarousel';
import { connect } from 'react-redux';

const ProductOne = ({ language, PRODUCT1, CAROUSEL }) => {
  return (
    <section className='PagePadding productOne productOne-fon'>
      <section className='Сontainer productOne-one'>
        <div className='productOne-oneInfo'>
          <div className='SectionTitle'> {PRODUCT1.title[language]}</div>
          <div className='productOne-oneSubtitle'>
            {PRODUCT1.subtitle[language]}
          </div>
          <div className='productOne-text'> {PRODUCT1.text1[language]}</div>
          <div className='productOne-text'> {PRODUCT1.text2[language]}</div>
        </div>
        <img src={img1} alt='img1IMG' />
      </section>

      <section className='Сontainer productOne-two'>
        <img src={img2} alt='img1IMG' />
        <div className='productOne-twoInfo'>
          <div className='productOne-text'>{PRODUCT1.text3[language]}</div>
          <div className='productOne-text'>{PRODUCT1.text4[language]}</div>
        </div>
      </section>

      <section className='Сontainer productOne-three'>
        <div className='productOne-threeText'>{PRODUCT1.text5[language]}</div>
        <div className='productOne-threeText'>{PRODUCT1.text6[language]}</div>
      </section>

      <section className='Сontainer productOne-four'>
        <div className='SectionTitle productOne-fourTitle'>
          {PRODUCT1.title1[language]}
        </div>
        <div className='productOne-fourText'>{PRODUCT1.text7[language]}</div>
        <div className='productOne-fourText productOne-fourTextBold productOne-down'>
          {PRODUCT1.text8[language]}
        </div>
        <div className='productOne-fourUlLi'>
          <UlLi
            data={PRODUCT1.UlLi[language]}
            title={PRODUCT1.UlLiTitle[language]}
            width='600px'
          />
          <UlLi
            data={PRODUCT1.UlLi1[language]}
            title={PRODUCT1.UlLiTitle1[language]}
            width='600px'
          />
        </div>
      </section>

      <section className='Сontainer productOne-three'>
        <div className='productOne-threeText'>{PRODUCT1.text9[language]}</div>
        <div className='productOne-threeText'>{PRODUCT1.text10[language]}</div>
        <div className='productOne-threeText'>{PRODUCT1.text11[language]}</div>
        <div className='productOne-threeText productOne-down'>
          {PRODUCT1.text12[language]}
        </div>
        <div className='productOne-threeText home-oneTextBold'>
          {PRODUCT1.text13[language]}
        </div>
        <div className='productOne-threeText productOne-down'>
          {PRODUCT1.text14[language]}
        </div>
      </section>

      <section className='Сontainer productOne-four'>
        <div className='productOne-fourText'>{PRODUCT1.text15[language]}</div>
        <div className='productOne-fourText'>{PRODUCT1.text16[language]}</div>
        <div className='productOne-fourText productOne-fourTextBold productOne-down '>
          {PRODUCT1.text17[language]}
        </div>
      </section>

      <section className='Сontainer productOne-four'>
        <div className='productOne-fourUlLi'>
          <UlLi
            data={PRODUCT1.UlLi2[language]}
            title={PRODUCT1.UlLiTitle2[language]}
            width='600px'
          />
        </div>
        <div className='productOne-threeText productOne-blockBold productOne-mini'>
          {PRODUCT1.text18[language]}
        </div>
      </section>

      <section className='Сontainer productOne-eight'>
        <img className='productOne-eightImg' src={img3} alt='img1IMG' />
        <div className='productOne-eightInfo'>
          <div className='productOne-text productOne-eightTextBold'>
            {PRODUCT1.text19[language]}
          </div>
          <UlLi
            data={PRODUCT1.UlLi3[language]}
            title={PRODUCT1.UlLiTitle3[language]}
          />
          <div className='productOne-text'>{PRODUCT1.text20[language]}</div>
          <div className='productOne-text'>{PRODUCT1.text21[language]}</div>
        </div>
      </section>

      <section className='Сontainer productOne-nine'>
        <img src={language === 'RU' ? img4 : img4EN} alt='img1IMG' />
        <div className='productOne-nineInfo'>
          <div className='productOne-text productOne-eightTextBold'>
            {PRODUCT1.text22[language]}
          </div>
          <div className='productOne-text'>{PRODUCT1.text23[language]}</div>
          <div className='productOne-text'>{PRODUCT1.text24[language]}</div>
        </div>
      </section>

      <section className='Сontainer productOne-nine'>
        <img src={language === 'RU' ? img5 : img5EN} alt='img1IMG' />
        <div className='productOne-nineInfo'>
          <div className='productOne-text'>{PRODUCT1.text25[language]}</div>
        </div>
      </section>

      <section className='Сontainer productOne-four'>
        <div className='productOne-fourText productOne-fourTextBold productOne-down '>
          {PRODUCT1.text26[language]}
        </div>
        <div className='productOne-fourUlLi'>
          <UlLi
            data={PRODUCT1.UlLi4[language]}
            title={PRODUCT1.UlLiTitle4[language]}
            width='600px'
          />
        </div>
        <div className='productOne-textBold productOne-mini'>
          {PRODUCT1.text27[language]}
        </div>
      </section>

      <section className='productOne-galleryCarousel'>
        <ImagesCarousel
          images={[
            galleryOne1,
            galleryOne2,
            galleryOne3,
            galleryOne4,
            galleryOne5,
            galleryOne6,
            galleryOne7,
            galleryOne8,
            galleryOne9,
            galleryOne10,
            galleryOne11,
            galleryOne12,
          ]}
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
    PRODUCT1: state.language.PRODUCT1,
    CAROUSEL: state.language.CAROUSEL,
  };
};

export default connect(mapStateToProps, { undefined })(ProductOne);
