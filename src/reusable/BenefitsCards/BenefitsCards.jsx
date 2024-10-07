import './BenefitsCards.scss';

const BenefitsCards = ({ data, center }) => {
  return (
    <section className={`Сontainer benefitsCards ${center}`}>
      {data.map((card, i) => (
        <section key={i} className='benefitsCard'>
          <img
            className='benefitsCard-img'
            src={card.img}
            alt='BenefitsCardsIMG'
          />
          <div className='benefitsCard-title'>{card.title}</div>
          <div className='benefitsCard-subtitle'>{card.subtitle}</div>
        </section>
      ))}
    </section>
  );
};

export default BenefitsCards;
