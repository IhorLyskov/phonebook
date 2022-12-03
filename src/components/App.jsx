import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import ContactsList from './ContactsList/ContactsList';
import { PhoneBookTitle, ContactTitle, Container, Loading } from './App.styled';
import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <GlobalStyle />
      <PhoneBookTitle>Phonebook</PhoneBookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <ContactsFilter />
      {isLoading && !error && <Loading>Request in progress...</Loading>}
      <ContactsList />
    </Container>
  );
};
