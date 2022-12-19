import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from '../../redux/contacts/operations';
import ContactsList from '../Contacts/Contacts';
import { FormInput } from '../Form/Form';
import Filter from '../Filter/Filter';
import Box from 'components/Box';
import { TitleStyle } from './Phonebook.styled';

function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = ({ id }) => {
    dispatch(deleteContacts(id));
  };

  return (
    <Box
      as={'section'}
      m={40}
      gridGap={16}
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      <div>
        <TitleStyle>Add new phone contact</TitleStyle>
        <FormInput />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <p>Loading...</p>}
        {isError && (
          <p style={{ color: 'red' }}>
            Net error! Please, reload the page and try again...
          </p>
        )}
        <ContactsList onDelete={handleDelete} />
      </div>
    </Box>
  );
}

export default Phonebook;
