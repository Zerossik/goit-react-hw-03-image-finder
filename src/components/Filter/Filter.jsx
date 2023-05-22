import PropTypes from 'prop-types';
import { Input } from 'components/PhonebookForm/PhonebookForm.styled';
export function Filter({ filter, handlerChangeFilter }) {
  return (
    <label>
      Find Contacts by name
      <br />
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handlerChangeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerChangeFilter: PropTypes.func.isRequired,
};
