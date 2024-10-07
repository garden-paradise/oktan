import { NavLink } from 'react-router-dom';
import './Footer.scss';
import logo from './../../images/header/logoW.svg';
import NavigLinkFooter from './reuse/NavigLinkFooter/NavigLinkFooter';

const Footer = ({ language, FOOTER }) => {
  return (
    <header className='footer'>
      <div className='Сontainer footer-section'>
        <NavLink to='/'>
          <img className='footer-logo' src={logo} alt='img' />
        </NavLink>
        <NavigLinkFooter
          links={[
            {
              link: '/',
              name: FOOTER.home[language],
            },
            { link: '/about#news', name: FOOTER.news[language] },
            {
              link: '/about#about',
              name: FOOTER.about[language],
            },
            { link: '/contacts', name: FOOTER.contacts[language] },
            { link: '/production', name: FOOTER.products[language] },
            { link: '/about#benefits', name: FOOTER.advantages[language] },
            { link: '/questionary', name: FOOTER.interrogatory[language] },
          ]}
        />

        <div className='footer-telBlock'>
          <div className='footer-telTitle'>{FOOTER.moscow[language]}</div>
          <div className='footer-tel'>
            <a href='tel: +74956646732'>+ 7 (495) 664-67-32</a>
          </div>
          <div className='footer-tel'>
            <a href='tel: +74956769102'>+ 7 (495) 676-91-02</a>
          </div>
          <div className='footer-telTitle'>{FOOTER.estonia[language]}</div>
          <div className='footer-tel'>
            <a href='tel: +37258820226'>+3 725 882 02 26</a>
          </div>
        </div>
      </div>
      <div className='footer-argo'>
      </div>
      <div className='footer-allRights'>© 2024 {FOOTER.rights[language]} </div>
    </header>
  );
};
export default Footer;
