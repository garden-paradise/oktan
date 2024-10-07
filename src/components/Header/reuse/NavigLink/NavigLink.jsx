import './NavigLink.scss';
import { useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logoG from './../../../../images/header/logoG.svg';
import { NavLink } from 'react-router-dom';

const NavigLink = ({ links, language, getLanguage }) => {
  const [backdrop, setBackdrop] = useState(false);
  const menuCheckboxRef = useRef(null);

  let hideMenu = () => {
    menuCheckboxRef.current.checked = false;
    setBackdrop(false);
  };

  return (
    <nav className='NavigLink'>
      <input
        type='checkbox'
        id='hmt'
        className='hidden_menu_ticker'
        ref={menuCheckboxRef}
      ></input>
      <label
        onClick={() => setBackdrop(!backdrop)}
        className='btn_menu'
        htmlFor='hmt'
      >
        <span className='first'></span>
        <span className='second'></span>
        <span className='third'></span>
      </label>

      {backdrop && (
        <div onClick={hideMenu} className='NavigLink_backdrop'></div>
      )}

      <div className='NavigLink_block hidden_menu'>
        <NavLink onClick={hideMenu} to='/'>
          <img className='NavigLink_logoG' src={logoG} alt='logoGIMG' />
        </NavLink>

        <ul className='NavigLink_ul'>
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              onClick={hideMenu}
              className='NavigLink_link'
            >
              <li className='NavigLink_li'>{item.name}</li>
            </Link>
          ))}
        </ul>
        <div onClick={() => getLanguage()} className='NavigLink_lang'>
          {language}
        </div>
      </div>
    </nav>
  );
};

export default NavigLink;
