import ContactForm from './ContactForm/ContactForm';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import ContactsList from './ContactsList/ContactsList';
import { PhoneBookTitle, ContactTitle, Container } from './App.styled';
import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <PhoneBookTitle>Phonebook</PhoneBookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <ContactsFilter />
      <ContactsList />
    </Container>
  );
};
