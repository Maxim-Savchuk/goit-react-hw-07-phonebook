import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { Container, PhonebookTitle, ContactsTitle, Phonebook, People } from './App.styled';

export const App = () => {

  return (
    <Container>
      <PhonebookTitle>Phonebook<Phonebook /></PhonebookTitle>
      <ContactForm />

      <ContactsTitle>Contacts<People /></ContactsTitle>
      <Filter />
      <ContactList />

      <ToastContainer autoClose={2000} />
    </Container>
  )
}