import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { customAlphabet } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { namePattern, phonePattern } from '../constants/Constants';
import { selectContacts } from '../../redux/selectors';

import {
  FormStyled,
  ErrorMessageStyled,
  FieldStyled,
  ButtonStyled,
  LabelStyled,
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      namePattern,
      'Name may contain only letters, apostrophe, dash and spaces!'
    )
    .required('This field is required!'),

  phone: Yup.string()
    .matches(
      phonePattern,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!'
    )
    .required('This field is required!'),
});

function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    if (contacts.some(contact => contact.name === name)) {
      Notify.info(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: 'id-' + customAlphabet('1234567890', 3)(),
      name,
      phone,
    };
    console.log(contact);
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <LabelStyled htmlFor="name">Name</LabelStyled>
        <FieldStyled type="text" name="name" />
        <ErrorMessageStyled name="name" component="div" />

        <LabelStyled htmlFor="phone">Number</LabelStyled>
        <FieldStyled type="tel" name="phone" />
        <ErrorMessageStyled name="phone" component="div" />

        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </Formik>
  );
}

export default ContactForm;
