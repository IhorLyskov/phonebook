import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectVisibledContacts } from '../../redux/selectors';
import {
  ContactListStyled,
  ContactItemStyled,
  ContactStyled,
  DeleteButton,
} from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(selectVisibledContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, phone }) => (
        <ContactItemStyled key={id}>
          <ContactStyled>{name}:</ContactStyled>{' '}
          <ContactStyled>{phone}</ContactStyled>
          <DeleteButton type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};

export default ContactsList;
