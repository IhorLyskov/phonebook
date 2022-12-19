import {
  ContactsListStyled,
  ContactsItemStyled,
  TextStyle,
} from './Contacts.styled';
import { ButtonStyled } from '../Elements/Elements.styled';
import { selectFilterContacts } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ContactsList({ onDelete }) {
  const contacts = useSelector(selectFilterContacts);
  return (
    <div>
      <ContactsListStyled>
        {contacts.map(({ id, name, number }) => (
          <ContactsItemStyled key={nanoid(3)}>
            <TextStyle>
              {name}: {number}
            </TextStyle>
            <ButtonStyled type="button" onClick={() => onDelete({ id })}>
              Delete
            </ButtonStyled>
          </ContactsItemStyled>
        ))}
      </ContactsListStyled>
    </div>
  );
}

export default ContactsList;

ContactsList.propTypes = {
  onDelete: PropTypes.func,
};
