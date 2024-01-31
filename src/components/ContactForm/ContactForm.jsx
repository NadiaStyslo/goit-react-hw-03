import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';


const userSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too short, Name must has at least 3 characters')
        .max(50, 'Too long, please stop')
        .required('This is a required field'),
    number:Yup.string()
        .min(3, 'Too short, Number must has at least 3 digits')
        .max(50, 'Too long, please stop')
        .required('This is a required field')
})
const ContactForm = ({ onAdd }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();
    
  return (
      <Formik
          initialValues={{
              name: '',
              number: ''
          }}
          validationSchema ={userSchema}
          onSubmit={(values, actions) => {
              onAdd({ id: nanoid(), ...values })
              actions.resetForm()
      }}>
          <Form>
              <div>
                  <label htmlFor={nameFieldId}>Name:</label>
                  <Field type="text" name="name" id={nameFieldId} />
                  <ErrorMessage className={css.error} name="name" component="span"/>
              </div>
              <div>
                  <label htmlFor={numberFieldId}>Number:</label>
                  <Field type="text" name="number" id={numberFieldId} />
                  <ErrorMessage className={css.error} name="number" component="span"/>
              </div>
              <div>
                  <button type='sumbit'>Add contact</button>
              </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
