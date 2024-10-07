import axios from 'axios';
import XMLParser from 'react-xml-parser';

export const newsAPI = () => {
  return (
    axios
      .get(`https://api.allorigins.win/raw?url=https://oilcapital.ru/rss`)
      // .get(`https://thingproxy.freeboard.io/fetch/https://oilcapital.ru/rss`)
      .then((res) => {
        let xml = new XMLParser().parseFromString(res.data);
        let newsArr = xml.children[0].children
          .filter((item) => item.name === 'item')
          .map((item) => item.children.map((item) => item))
          .map((item) =>
            item.filter((item) => {
              if (item.name === 'title') {
                return item.value;
              }
              if (item.name === 'yandex:full-text') {
                return item.value;
              }
              if (item.name === 'pubDate') {
                return item.value;
              }
            })
          )
          .map((item) => {
            let obj = {};
            return item.map((item) => {
              if (item.name === 'pubDate') {
                obj.date = item.value;
              }
              if (item.name === 'title') {
                obj.title = item.value;
              }
              if (item.name === 'yandex:full-text') {
                obj.text = item.value;
              }
              return obj;
            });
          })
          .map((item) => item[0]);
        return newsArr;
      })
  );
};
