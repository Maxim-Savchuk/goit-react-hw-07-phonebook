import { useEffect } from 'react';

import { Item, Button, Trash } from './ContactList.styled';

const ContactList = ({ contacts, firstFetchContacts, onDeleteContact }) => {
    useEffect(() => {
        firstFetchContacts();
    }, [firstFetchContacts])

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
                            >Delete<Trash /></Button>
                        </Item>
                    );
                })}
            </ul>
        </div>
    );
};

export default ContactList;