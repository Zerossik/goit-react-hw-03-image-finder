import PropTypes from 'prop-types';
import { ContactItem, ContactListButton } from './ContactsList.styled';

export function ContactListItem({ name, number, deleteContact }) {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <ContactListButton type="button" onClick={deleteContact}>
        Delete
      </ContactListButton>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
