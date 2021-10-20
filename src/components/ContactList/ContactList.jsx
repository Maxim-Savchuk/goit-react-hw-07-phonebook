import { connect } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';

import { Item, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div>
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <Item key={id}>
                            {name}: {number}
                            <Button
                                type="button"
                                onClick={() => onDeleteContact(id)}
                            >Delete</Button>
                        </Item>
                    );
                })}
            </ul>
        </div>
    );
};

const getFilteredContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter));
}

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getFilteredContacts(items, filter),
})

const mapDispatchToProps = dispatch => ({
    onDeleteContact: contactId => dispatch(deleteContact(contactId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);