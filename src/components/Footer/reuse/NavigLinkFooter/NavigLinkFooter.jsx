import './NavigLinkFooter.scss';
import { HashLink as Link } from 'react-router-hash-link';

const NavigLinkFooter = ({ links }) => {
  return (
    <nav className='NavigLinkFooter'>
      <ul className='NavigLinkFooter-ul'>
        {links.map((item, i) => (
          <Link key={i} to={item.link} className='NavLink'>
            <li  className='NavigLinkFooter-li'>
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavigLinkFooter;
