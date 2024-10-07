import './Contact.scss';
import contacts from './../../../images/main/contacts/contacts.png';
import Contacts from '../../../reusable/Contacts/Contacts';

const Contact = ({ language, CONTACTS }) => {
  return (
    <section className='contacts'>
      <img className='contacts-img' src={contacts} alt='contactIMG' />
      <div className='contacts-block'>
        <div className='Сontainer BackgroundTitle contacts-title'>
          {CONTACTS.title[language]}
        </div>
        <Contacts
          data={[CONTACTS.contacts1[language], CONTACTS.contacts2[language]]}
          classComp='down'
          black={true}
        />
      </div>
    </section>
  );
};

export default Contact;
