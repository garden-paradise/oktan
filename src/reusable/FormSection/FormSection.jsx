import './FormSection.scss';
import { Field, Form } from 'react-final-form';
import octanLogo from './../../images/main/home/b5.png';
import {
  emailValidator,
  phoneValidator,
  requiredValidator,
} from '../../utils/validators';
import emailjs from '@emailjs/browser';
import { connect } from 'react-redux';

const onSubmit = (values) => {
  emailjs
    .send(
      'service_57iiwdx',
      'template_buxvbip',
      values,
      'user_lLNrUqRUieynZC4CRrpH0'
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

const FormSection = ({ language, FORMSECTION }) => {
  return (
    <section className='form'>
      <div className='Сontainer form-block'>
        <img className='form-img' src={octanLogo} alt='octanLogoIMG' />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className='form-payForm' onSubmit={handleSubmit}>
              <div className='BackgroundTitle'>
                {FORMSECTION.title[language]}
              </div>
              <div className='form-forms'>
                <Field name='organization' validate={requiredValidator}>
                  {({ input, meta }) => (
                    <input
                      className={`form-form ${
                        meta.error && meta.touched && 'form-formError'
                      }`}
                      {...input}
                      type='text'
                      placeholder={FORMSECTION.organization[language]}
                    />
                  )}
                </Field>
                <Field name='fullName' validate={requiredValidator}>
                  {({ input, meta }) => (
                    <input
                      className={`form-form ${
                        meta.error && meta.touched && 'form-formError'
                      }`}
                      {...input}
                      type='text'
                      placeholder={FORMSECTION.name[language]}
                    />
                  )}
                </Field>
                <Field name='phone' validate={phoneValidator}>
                  {({ input, meta }) => (
                    <input
                      className={`form-form ${
                        meta.error && meta.touched && 'form-formError'
                      }`}
                      {...input}
                      type='number'
                      placeholder={FORMSECTION.phone[language]}
                    />
                  )}
                </Field>
                <Field name='email' validate={emailValidator}>
                  {({ input, meta }) => (
                    <input
                      className={`form-form ${
                        meta.error && meta.touched && 'form-formError'
                      }`}
                      {...input}
                      type='email'
                      placeholder={FORMSECTION.email[language]}
                    />
                  )}
                </Field>
              </div>
              <Field name='comment'>
                {({ input }) => (
                  <textarea
                    className='form-formComment'
                    {...input}
                    type='textarea'
                    placeholder={FORMSECTION.comments[language]}
                  />
                )}
              </Field>
              <button className='Button form-formBtn' type='submit'>
                {FORMSECTION.btn[language]}
              </button>
            </form>
          )}
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    FORMSECTION: state.language.FORMSECTION,
  };
};

export default connect(mapStateToProps, { undefined })(FormSection);
