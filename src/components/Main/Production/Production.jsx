import FormSection from '../../../reusable/FormSection/FormSection';
import ProductCard from '../../../reusable/ProductCard/ProductCard';
import './Production.scss';
import cardIMG from '../../../images/main/home/b3_2.png';

const Production = ({ language, PRODUCTCARD }) => {
  return (
    <section className='PagePadding production'>
      <ProductCard
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
          {
            img: cardIMG,
            ...PRODUCTCARD.productCard6[language],
            link: 'product6',
          },
          {
            img: cardIMG,
            ...PRODUCTCARD.productCard2[language],
            link: 'product2',
          },
          {
            img: cardIMG,
            ...PRODUCTCARD.productCard3[language],
            link: 'product3',
          },
        ]}
      />
      <div className='production-form'>
        <FormSection />
      </div>
    </section>
  );
};

export default Production;
