import './FormSectionBig.scss';
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
      'template_xi5h4sn',
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

const FormSectionBig = ({ language, FORMSECTIONBIG, FORMSECTION }) => {
  let formInfo = [
    {
      name: FORMSECTIONBIG.formInfo1[language],
      method: 'Temperature',
      result: 'Temperature',
    },
    {
      name: FORMSECTIONBIG.formInfo2[language],
      method: 'PressureVolume',
      result: 'PressureVolume',
    },
    {
      name: FORMSECTIONBIG.formInfo3[language],
      method: 'Density',
      result: 'Density',
    },
    {
      name: FORMSECTIONBIG.formInfo4[language],
      method: 'Density20',
      result: 'Density20',
    },
    {
      name: FORMSECTIONBIG.formInfo5[language],
      method: 'Density15',
      result: 'Density15',
    },
    {
      name: FORMSECTIONBIG.formInfo6[language],
      method: 'Water',
      result: 'Water',
    },
    {
      name: FORMSECTIONBIG.formInfo7[language],
      method: 'Salt',
      result: 'Salt',
    },
    {
      name: FORMSECTIONBIG.formInfo8[language],
      method: 'Impurities',
      result: 'Impurities',
    },
    {
      name: FORMSECTIONBIG.formInfo9[language],
      method: 'Sulfur',
      result: 'Sulfur',
    },
    {
      name: FORMSECTIONBIG.formInfo10[language],
      method: 'PressureVapor',
      result: 'PressureVapor',
    },
  ];
  return (
    <section className='formBig'>
      <div className='Сontainer formBig-block'>
        <img className='formBig-img' src={octanLogo} alt='octanLogoIMG' />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className='formBig-payForm' onSubmit={handleSubmit}>
              <div className='BackgroundTitle'>
                {' '}
                {FORMSECTION.title[language]}
              </div>
              <div className='formBig-forms'>
                <Field name='nameOrganization' validate={requiredValidator}>
                  {({ input, meta }) => (
                    <input
                      className={`formBig-form ${
                        meta.error && meta.touched && 'formBig-formError'
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
                      className={`formBig-form ${
                        meta.error && meta.touched && 'formBig-formError'
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
                      className={`formBig-form ${
                        meta.error && meta.touched && 'formBig-formError'
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
                      className={`formBig-form ${
                        meta.error && meta.touched && 'formBig-formError'
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
                    className='formBig-formComment'
                    {...input}
                    type='textarea'
                    placeholder={FORMSECTION.comments[language]}
                  />
                )}
              </Field>
              <table className='formBig-table'>
                <tbody>
                  <tr>
                    <th style={{ width: '90%' }}>
                      {FORMSECTIONBIG.formIndicator[language]}
                    </th>
                    <th>{FORMSECTIONBIG.formTesting[language]}</th>
                    <th>{FORMSECTIONBIG.formResult[language]}</th>
                  </tr>
                  {formInfo.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td className='formBig-formTableTD'>
                        <Field name={`method${item.method}`}>
                          {({ input }) => (
                            <textarea
                              className='formBig-formTable'
                              {...input}
                              type='textarea'
                            />
                          )}
                        </Field>
                      </td>
                      <td className='formBig-formTableTD'>
                        <Field name={`result${item.result}`}>
                          {({ input }) => (
                            <textarea
                              className='formBig-formTable'
                              {...input}
                              type='textarea'
                            />
                          )}
                        </Field>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className='Button formBig-formBtn' type='submit'>
                {FORMSECTIONBIG.formBtn[language]}
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
    FORMSECTIONBIG: state.language.FORMSECTIONBIG,
    FORMSECTION: state.language.FORMSECTION,
  };
};

export default connect(mapStateToProps, { undefined })(FormSectionBig);
