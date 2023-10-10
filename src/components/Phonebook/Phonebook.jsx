
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Main, PhonebookForm, PhonebookInput, Button, Error } from './Phonebook.styled';
import { addContact } from '../redux/reducer';

export default function Phonebook() {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required('This field cannot be empty'),
    number: yup.string().min(6).max(18).required('This field cannot be empty'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Main>
          <PhonebookForm htmlFor="name">
            Name:
            <PhonebookInput
              name="name"
              type="text"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage name="name" render={message => <Error>{message}</Error>} />
          </PhonebookForm>
          <PhonebookForm htmlFor="number">
            Number:
            <PhonebookInput
              name="number"
              type="tel"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorMessage name="number" render={message => <Error>{message}</Error>} />
          </PhonebookForm>
          <Button type="submit">Add contact</Button>
        </Main>
      </Formik>
    </>
  );
}
