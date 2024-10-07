import './Home.scss';
import about from '../../../images/main/home/b1.png';
import octan from '../../../images/main/home/b2.png';
import cardIMG from '../../../images/main/home/b3_2.png';
import doc1 from '../../../images/main/home/doc1.png';
import doc2 from '../../../images/main/home/doc2.png';
import doc3 from '../../../images/main/home/doc3.png';
import doc4 from '../../../images/main/home/doc4.png';
import ben1 from '../../../images/main/home/b4_1.png';
import ben2 from '../../../images/main/home/b4_2.png';
import ben3 from '../../../images/main/home/b4_3.png';
import ben4 from '../../../images/main/home/b4_4.png';
import ben5 from '../../../images/main/home/b4_5.png';
import contact from '../../../images/main/home/b6.png';
import ProductCard from '../../../reusable/ProductCard/ProductCard';
import { NavLink } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import BenefitsCards from '../../../reusable/BenefitsCards/BenefitsCards';
import FormSection from '../../../reusable/FormSection/FormSection';
import Contacts from '../../../reusable/Contacts/Contacts';
import UlLi from '../../../reusable/UlLi/UlLi';
import ImagesCarousel from '../../../reusable/ImagesCarousel/ImagesCarousel';
import { useEffect } from 'react';

const Home = ({ language, HOME, NEWS, CONTACTS, PRODUCTCARD, newsArr }) => {
  // useEffect(() => {}, [newsArr]);

  return (
    <section className='home'>
      <div className='PagePadding home-fon'>
        <section id='about' className='Column Сontainer home-one'>
          <div className='SectionPadding home-oneText'>
            <div className='SectionTitle'>{HOME.aboutTitle[language]}</div>
            <div>{HOME.aboutText1[language]}</div>
            <div className='home-oneTextBold'>{HOME.aboutText2[language]}</div>
            <div>{HOME.aboutText3[language]}</div>
          </div>
          <img className='SectionPadding ImgTop' src={about} alt='aboutIMG' />
        </section>
        <section className='SectionPadding ColumnRevers home-two'>
          <img className='ImgTop' src={octan} alt='octanIMG' />
          <div className=' home-twoText'>
            <div className='home-twoTextBold'>{HOME.aboutText4[language]}</div>
            <div className='home-twoTextSubtitle'>
              {HOME.aboutText5[language]}
            </div>

            <UlLi
              data={HOME.aboutText7[language]}
              title={HOME.aboutText6[language]}
            />
          </div>
        </section>
        <section className='SectionPadding home-three'>
          <ProductCard
            title={HOME.productCardTitle[language]}
            data={[
              {
                img: cardIMG,
                ...PRODUCTCARD.productCard1[language],
                link: 'product1',
              },
              {
                img: cardIMG,
                ...PRODUCTCARD.productCard4[language],
                link: 'product4',
              },
              {
                img: cardIMG,
                ...PRODUCTCARD.productCard5[language],
                link: 'product5',
              },
            ]}
          />
          <button className='Button home-threeBtn'>
            <NavLink to='/production' className='NavLink'>
              {HOME.productCardBtn[language]}
            </NavLink>
          </button>
        </section>
        <section className='home-four'>
          <div className='home-fourBlock'>
            <ImagesCarousel
              images={[doc1, doc2, doc3, doc4]}
              title={HOME.imagesCarousel[language]}
            />
          </div>
        </section>
        <section id='benefits' className='SectionPadding home-five'>
          <div className='SectionTitle Сontainer home-fiveTitle'>
            {HOME.benefitsTitle[language]}
          </div>
          <BenefitsCards
            data={[
              {
                img: ben1,
                ...HOME.benefitsCard1[language],
              },
              {
                img: ben2,
                ...HOME.benefitsCard2[language],
              },
              {
                img: ben3,
                ...HOME.benefitsCard3[language],
              },
            ]}
          />
          <BenefitsCards
            data={[
              {
                img: ben4,
                ...HOME.benefitsCard4[language],
              },
              {
                img: ben5,
                ...HOME.benefitsCard5[language],
              },
            ]}
            center='center'
          />
        </section>
        <section className='home-six'>
          <FormSection />
        </section>
        <section id='news' className='SectionPadding home-seven'>
          <ImagesCarousel
            news={newsArr}
            item={3}
            title={NEWS.title[language]}
            green={true}
          />
        </section>
        <section>
          <div className=' home-eight'>
            <img className='home-eightImg' src={contact} alt='contactIMG' />
            <div>
              <div className='Сontainer BackgroundTitle'>
                {CONTACTS.title[language]}
              </div>
              <Contacts
                data={[
                  CONTACTS.contacts1[language],
                  CONTACTS.contacts2[language],
                ]}
                classMenu='right'
                black={false}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
