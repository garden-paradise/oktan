import './UlLi.scss';

const UlLi = ({ data, title, width }) => {
  return (
    <section className='UlLi' style={{ maxWidth: `${width}` }}>
      <div className='UlLi-title'>{title}</div>
      <ul>
        {data.map((item, i) => (
          <li key={i} className='UlLi-subtitle'>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UlLi;
