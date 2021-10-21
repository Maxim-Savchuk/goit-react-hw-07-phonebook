import { connect } from 'react-redux';
import ContactList from './ContactList';
import { fetchContacts, deleteContact } from 'redux/contacts/contactsOperations';
import { getVisibleContacts } from 'redux/contacts/contactsSelectors';

const mapStateToProps = (state) => ({
    contacts: getVisibleContacts(state),
})

const mapDispatchToProps = dispatch => ({
    onDeleteContact: contactId => dispatch(deleteContact(contactId)),
    firstFetchContacts: () => dispatch(fetchContacts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);