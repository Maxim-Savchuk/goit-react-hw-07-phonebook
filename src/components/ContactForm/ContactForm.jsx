import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-actions'
import { toast } from 'react-toastify';

import { Container, Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = ({ onSubmit, contacts }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        const duplicateName = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase());

        if (duplicateName) {
            toast.error(`${name} is already in contacts`);
            resetForm();
            return;
        }

        onSubmit(name, number);
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={handleChange}
                    />
                </Label>
                <Label>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={handleChange}
                    />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        </Container>
    );
}

const mapStateToProps = (state) => ({ contacts: state.contacts.items });

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, value) => dispatch(addContact(name, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);