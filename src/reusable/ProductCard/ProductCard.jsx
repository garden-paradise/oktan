import { NavLink } from 'react-router-dom';
import './ProductCard.scss';
import ArrowB from './../../images/main/fon/ArrowB.svg';
import ArrowW from './../../images/main/fon/ArrowW.svg';

const ProductCard = ({ data, title }) => {
  return (
    <section className='Сontainer'>
      <div className='SectionTitle title'>{title}</div>
      <section className='productCards'>
        {data.map((card, i) => (
          <NavLink
            key={i}
            className='NavLink productCards-link'
            to={`/${card.link}`}
          >
            <section className='productCard'>
              <img
                className='productCard-img'
                src={card.img}
                alt='ProductCardIMG'
              />
              <div className='productCard-title'>
                {card.title}
                <img
                  className='productCard-arrow'
                  src={ArrowB}
                  alt='ArrowBIMG'
                />
                <img
                  className='productCard-arrowW'
                  src={ArrowW}
                  alt='ArrowWIMG'
                />
              </div>
              <div className='productCard-subtitle'>{card.subtitle}</div>
            </section>
          </NavLink>
        ))}
      </section>
    </section>
  );
};

export default ProductCard;
