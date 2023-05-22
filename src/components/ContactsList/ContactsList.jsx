import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { List } from './ContactsList.styled';

export function ContactsList({ contacts, title, deleteContact }) {
  return (
    <List>
      <h2>{title}</h2>
      {contacts().map(({ id, name, number }) => (
        <ContactListItem
          name={name}
          number={number}
          key={id}
          deleteContact={() => deleteContact(id)}
        />
      ))}
    </List>
  );
}
ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
