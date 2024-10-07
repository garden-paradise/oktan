import { Field, Form } from 'react-final-form';
import {
  emailValidator,
  phoneValidator,
  requiredValidator,
} from '../../../utils/validators';
import './Questionary.scss';
import emailjs from '@emailjs/browser';

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

const Questionary = ({ language, QUESTIONARY, FORMSECTIONBIG }) => {
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
    <section className='PagePadding questionary'>
      <section className='Сontainer'>
        <section className=' questionary-one'>
          <div className='SectionTitle'>{QUESTIONARY.title[language]}</div>
          <div className='questionary-text'>{QUESTIONARY.text[language]}</div>
        </section>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className='formMini-forms' onSubmit={handleSubmit}>
              <div className='formMini-title'>
                {QUESTIONARY.formTitle[language]}
              </div>
              <Field name='nameOrganization' validate={requiredValidator}>
                {({ input, meta }) => (
                  <input
                    className={`formMini-form ${
                      meta.error && meta.touched && 'formMini-formError'
                    }`}
                    {...input}
                    type='text'
                    placeholder={QUESTIONARY.formName[language]}
                  />
                )}
              </Field>
              <Field name='fullName' validate={requiredValidator}>
                {({ input, meta }) => (
                  <input
                    className={`formMini-form ${
                      meta.error && meta.touched && 'formMini-formError'
                    }`}
                    {...input}
                    type='text'
                    placeholder={QUESTIONARY.formContact[language]}
                  />
                )}
              </Field>
              <Field name='addressCompany' validate={requiredValidator}>
                {({ input, meta }) => (
                  <input
                    className={`formMini-form ${
                      meta.error && meta.touched && 'formMini-formError'
                    }`}
                    {...input}
                    type='text'
                    placeholder={QUESTIONARY.formAddress[language]}
                  />
                )}
              </Field>
              <Field name='phone' validate={phoneValidator}>
                {({ input, meta }) => (
                  <input
                    className={`formMini-form ${
                      meta.error && meta.touched && 'formMini-formError'
                    }`}
                    {...input}
                    type='number'
                    placeholder={QUESTIONARY.formPhone[language]}
                  />
                )}
              </Field>
              <Field name='email' validate={emailValidator}>
                {({ input, meta }) => (
                  <input
                    className={`formMini-form ${
                      meta.error && meta.touched && 'formMini-formError'
                    }`}
                    {...input}
                    type='email'
                    placeholder={QUESTIONARY.formEmail[language]}
                  />
                )}
              </Field>
              <Field name='laboratory' validate={requiredValidator}>
                {({ input, meta }) => (
                  <input
                    className={`formMini-form ${
                      meta.error && meta.touched && 'formMini-formError'
                    }`}
                    {...input}
                    type='text'
                    placeholder={QUESTIONARY.formLaboratory[language]}
                  />
                )}
              </Field>
              <Field name='date' validate={requiredValidator}>
                {({ input, meta }) => (
                  <input
                    className={`formMini-form ${
                      meta.error && meta.touched && 'formMini-formError'
                    }`}
                    {...input}
                    type='text'
                    placeholder={QUESTIONARY.formDate[language]}
                  />
                )}
              </Field>

              <table className='formBig-tableQuestionary'>
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
                              className='formBig-formTable formBig-formBlack'
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
                              className='formBig-formTable formBig-formBlack'
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
              <button className='Button formMini-btn' type='submit'>
                {QUESTIONARY.formBtn[language]}
              </button>
            </form>
          )}
        />
      </section>
    </section>
  );
};

export default Questionary;
