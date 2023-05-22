import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormButton,
  Input,
  StyledLabel,
  Required,
} from './PhonebookForm.styled';

export class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  handlerSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const { addContact } = this.props;
    const id = nanoid(10);
    addContact({ id: id, name: name, number: number });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handlerSubmit}>
        <StyledLabel>
          Name<Required>*</Required>
          <br />
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handlerChange}
            placeholder="Your Name"
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          Number<Required>*</Required>
          <br />
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handlerChange}
            placeholder="+380000000000"
          />
        </StyledLabel>
        <br />
        <FormButton type="submit">Add contact</FormButton>
      </form>
    );
  }
}
PhoneForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
