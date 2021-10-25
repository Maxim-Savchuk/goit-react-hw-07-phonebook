import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { Container, PhonebookTitle, ContactsTitle, Phonebook, People } from './App.styled';

const App = ({ firstFetchContacts }) => {
  useEffect(() => {
    firstFetchContacts();
  }, [firstFetchContacts]);

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

const mapDispatchToProps = dispatch => ({
  firstFetchContacts: () => dispatch(fetchContacts()),
})

export default connect(null, mapDispatchToProps)(App);