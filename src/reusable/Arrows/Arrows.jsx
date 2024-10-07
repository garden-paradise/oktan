import './Arrows.scss';
import CaretLeft from './../../images/main/home/CaretLeft.svg';
import CaretRight from './../../images/main/home/CaretRight.svg';
import CaretLeftG from './../../images/main/home/CaretLeftG.svg';
import CaretRightG from './../../images/main/home/CaretRightG.svg';

const Arrows = ({ next, previous, title, green }) => {
  return (
    <section className={`arrows ${green && 'arrows-top'}`}>
      <div className={`arrows-${green ? 'titleB' : 'titleW'}`}>{title}</div>
      <div className='arrows-block'>
        <img
          onClick={previous}
          className='arrows-arrow'
          src={green ? CaretLeftG : CaretLeft}
          alt='CaretLeftIMG'
        />
        <img
          onClick={next}
          className='arrows-arrow'
          src={green ? CaretRightG : CaretRight}
          alt='CaretRightIMG'
        />
      </div>
    </section>
  );
};

export default Arrows;
