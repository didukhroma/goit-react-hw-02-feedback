import PropTypes from 'prop-types';

const Section = ({ title = 'Section', children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
