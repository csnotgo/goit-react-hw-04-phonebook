import { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';

const STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storageContacts = localStorage.getItem(STORAGE_KEY);
    const parsedContacts = JSON.parse(storageContacts);
    return parsedContacts || [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts === []) {
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const onFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filtredContacts;
  };

  const onFormSubmitState = ({ ...data }) => {
    const enterName = contacts.map(contact => contact.name);
    if (enterName.includes(data.name)) {
      alert(`${data.name} is allready in contact`);
    } else {
      setContacts([data, ...contacts]);
    }
  };

  const deleteContact = contactId => {
    setContacts([...contacts.filter(contact => contact.number !== contactId)]);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onFormSubmitState} />

      <h2>Contacts</h2>
      <Filter onChange={onFilterChange} value={filter} />
      <ContactList
        contacts={onFilteredContacts()}
        deleteContact={deleteContact}
      />
    </Container>
  );
};
