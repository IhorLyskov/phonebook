import React, { useState } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import debounce from 'lodash.debounce';
import { useLocalStorage, useDebounce } from 'react-use';

import { initialContacts, storageKey } from './constants/Constants';
import * as Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(storageKey, initialContacts);
  const [filter, setFilter] = useState('');
  const [debouncedFilter, setDebouncedFilter] = useState('');

  useDebounce(() => setDebouncedFilter(filter), 300, [filter]);

  const handleSubmit = ({ id, name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      Notify.info(`${name} is already in contacts`);
      return false;
    }
    setContacts([...contacts, { id, name, number }]);
    return true;
  };

  const handleContactDelete = ({ id }) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = ({ value }) => setFilter(value);

  let filteredContacts = contacts;
  if (debouncedFilter) {
    filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(debouncedFilter.toLowerCase());
    });
  }

  return (
    <>
      <GlobalStyle />
      <Section.H1 title="Phonebook">
        <ContactForm onSubmit={handleSubmit} />
      </Section.H1>
      <Section.H2 title="Contacts">
        <Filter onInput={handleFilterChange} />
        <ContactsList
          contacts={filteredContacts}
          onDelete={handleContactDelete}
        />
      </Section.H2>
    </>
  );
};
