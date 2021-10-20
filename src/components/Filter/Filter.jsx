import { connect } from 'react-redux';
import { LoaderSpinner } from 'components/Loader/Loader';
import { changeFilter } from 'redux/contacts/contactsActions';

import { Container, Label, Input } from './Filter.styled';

const Filter = ({ value, onChange, isLoadingContacts }) => {
    return (
        <Container>
            <Label>
                Filter contacts by name
                <Input
                    type="text"
                    value={value}
                    onChange={onChange} />
            </Label>
            {isLoadingContacts && <LoaderSpinner />}
        </Container>

    );
};

const mapStateToProps = ({ contacts: { filter, loading } }) => ({
    value: filter,
    isLoadingContacts: loading,
})

const mapDispatchToProps = dispatch => ({
    onChange: event => dispatch(changeFilter(event.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);