import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../../redux/news-reducer';
import ImagesCarousel from '../../../reusable/ImagesCarousel/ImagesCarousel';
import './ArticleNews.scss';

const ArticleNews = (props) => {
  let [news, setNews] = useState(null);
  useEffect(() => {
    props.getNews();
    props.newsArr && setNews(props.newsArr[props.match.params.newsId]);
  }, [props]);

  return (
    news && (
      <section className='PagePadding'>
        <section className='Сontainer articleNews'>
          <div className='articleNews-date'>
            {new Date(news.date).toLocaleDateString()}
          </div>
          <div className='articleNews-title'>{news.title}</div>
          <div className='articleNews-text'>{news.text}</div>
        </section>

        <ImagesCarousel
          news={props.newsArr}
          item={3}
          title={props.NEWS.title[props.language]}
          green={true}
        />
      </section>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    newsArr: state.news.newsArr,
    language: state.language.language,
    NEWS: state.language.NEWS,
  };
};

export default connect(mapStateToProps, { getNews })(ArticleNews);
