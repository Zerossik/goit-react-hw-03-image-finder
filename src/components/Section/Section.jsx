import PropTypes from 'prop-types';
import { SectionEl } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionEl>
      <h1>{title}</h1>
      {children}
    </SectionEl>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
