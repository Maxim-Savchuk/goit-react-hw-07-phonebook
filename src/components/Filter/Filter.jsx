import { connect } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';

import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
    return (
        <Label>
            Filter contacts by name
            <Input
                type="text"
                value={value}
                onChange={onChange} />
        </Label>
    );
};

const mapStateToProps = (state) => ({
    value: state.contacts.filter,
})

const mapDispatchToProps = dispatch => ({
    onChange: event => dispatch(changeFilter(event.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);