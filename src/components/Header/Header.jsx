import { NavLink } from 'react-router-dom';
import NavigLink from './reuse/NavigLink/NavigLink';
import './Header.scss';
import logo from './../../images/header/logoW.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Header = ({ language, HEADER, getLanguage, getNews }) => {
  const location = useLocation();
  const [transparent, setTransparent] = useState(' ');
  useEffect(() => {
    getNews();
    location.pathname === '/'
      ? setTransparent('transparent')
      : setTransparent(' ');
  }, [location.pathname]);
  return (
    <header className={`header ${transparent}`}>
      <div className='header-section'>
        <NavLink to='/'>
          <img className='header-logo' src={logo} alt='img' />
        </NavLink>
        <NavigLink
          links={[
            { link: '/about#about', name: HEADER.about[language] },
            { link: '/about#benefits', name: HEADER.advantages[language] },
            { link: '/production', name: HEADER.products[language] },
            { link: '/about#news', name: HEADER.news[language] },
            { link: '/contacts', name: HEADER.contacts[language] },
            { link: '/questionary', name: HEADER.interrogatory[language] },
          ]}
          getLanguage={() => getLanguage(language === 'RU' ? 'EN' : 'RU')}
          language={language}
        />
        <div className='header-lang'>
          {language}
          <div
            onClick={() => getLanguage(language === 'RU' ? 'EN' : 'RU')}
            className='header-newLang'
          >
            {language === 'RU' ? 'EN' : 'RU'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
