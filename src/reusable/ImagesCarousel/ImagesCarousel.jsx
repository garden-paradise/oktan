import './ImagesCarousel.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Arrows from '../Arrows/Arrows';
import { NavLink } from 'react-router-dom';

const ImagesCarousel = ({ images, videos, news, item, title, green }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 5000, min: 3000 },
      items: item ? item : 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: item ? item : 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='Сontainer imagesCarousels'>
      <Carousel
        responsive={responsive}
        shouldResetAutoplay={false}
        infinite={true}
        customButtonGroup={<Arrows title={title} green={green} />}
        renderButtonGroupOutside
        arrows={false}
        itemClass='imagesCarousels-carouselItem'
      >
        {images &&
          images.map((image, i) => (
            <img key={i} src={image} alt='CarouselIMG' />
          ))}
        {videos &&
          videos.map((video, i) => (
            <iframe
              key={i}
              width='380'
              height='400'
              src={`https://www.youtube.com/embed/${video}`}
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              showinfo='0'
            ></iframe>
          ))}
        {news ? (
          news.map((news, i) => (
            <NavLink key={i} to={`/news/${i}`} className='NavLink'>
              <div className='NewsCarousel'>
                <div className='NewsCarousel-date'>
                  {new Date(news.date).toLocaleDateString()}
                </div>
                <div className='NewsCarousel-title'>{news.title}</div>
                <div className='NewsCarousel-text'>{news.text}</div>
              </div>
            </NavLink>
          ))
        ) : (
          <div className='donut'></div>
        )}
      </Carousel>
    </section>
  );
};

export default ImagesCarousel;
