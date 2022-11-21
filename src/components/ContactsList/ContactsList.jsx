import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import {
  ContactListStyled,
  ContactItemStyled,
  ContactStyled,
  DeleteButton,
} from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const filteredContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListStyled>
      {filteredContacts(contacts, filter).map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          <ContactStyled>{name}:</ContactStyled>{' '}
          <ContactStyled>{number}</ContactStyled>
          <DeleteButton type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};

export default ContactsList;
