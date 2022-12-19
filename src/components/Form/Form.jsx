import { selectContacts } from '../../redux/contacts/selectors';
import { addContacts } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { FormStyle, InputStyled } from './Form.styled';
import { ButtonStyled, LabelStyled } from '../Elements/Elements.styled';
import { Notify } from 'notiflix';
import { Formik } from 'formik';

export function FormInput() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const contactInfo = {
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      Notify.warning(`${name} is already in contacts`, {
        timeout: 1000,
        position: 'center-top',
      });
      return;
    }

    dispatch(addContacts(contactInfo));
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <FormStyle>
        <LabelStyled>
          Name
          <InputStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name..."
            required
          />
        </LabelStyled>
        <LabelStyled>
          Number
          <InputStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter telephone number..."
            required
          />
        </LabelStyled>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyle>
    </Formik>
  );
}
