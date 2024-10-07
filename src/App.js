import Main from './components/Main/Main';
import ScrollToTop from './utils/scrollToTop.js';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';

const App = () => {
  return (
    <section className='app'>
      <div>
        <ScrollToTop />
        <HeaderContainer />
        <Main />
      </div>
      <FooterContainer />
    </section>
  );
};

export default App;
