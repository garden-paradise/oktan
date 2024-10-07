import './Contacts.scss';
import Clock from './../../images/main/contacts/Clock.svg';
import Envelope from './../../images/main/contacts/EnvelopeSimple.svg';
import House from './../../images/main/contacts/HouseLine.svg';
import Phone from './../../images/main/contacts/PhoneCall.svg';
import ClockB from './../../images/main/contacts/ClockB.svg';
import EnvelopeB from './../../images/main/contacts/EnvelopeSimpleB.svg';
import HouseB from './../../images/main/contacts/HouseLineB.svg';
import PhoneB from './../../images/main/contacts/PhoneCallB.svg';

const Contacts = ({ data, classMenu, classComp, black }) => {
  return (
    <section className={`Сontainer ${classMenu}`}>
      {data.map((item, i) => (
        <section key={i} className={`contact ${classComp}`}>
          <div className='contact-address'>{item.address}</div>
          <div className='contact-blocks'>
            <div className='contact-block'>
              <img
                className='contact-img'
                src={!black ? House : HouseB}
                alt='HouseIMG'
              />
              <div>{item.home}</div>
            </div>
            <div className='contact-block'>
              <img
                className='contact-img'
                src={!black ? Phone : PhoneB}
                alt='PhoneIMG'
              />
              <div>
                {item.tel.map((item, i) => (
                  <div key={i}>
                    <a  href={`tel: ${item}`}>{item}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className='contact-block'>
              <img
                className='contact-img'
                src={!black ? Clock : ClockB}
                alt='ClockIMG'
              />
              <div>{item.time}</div>
            </div>
            <div className='contact-block'>
              <img
                className='contact-img'
                src={!black ? Envelope : EnvelopeB}
                alt='EnvelopeIMG'
              />
              <div>{item.mail}</div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Contacts;
