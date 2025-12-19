import PropTypes from 'prop-types';

const SectionTitle = ({ title, className = '' }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center mb-6">
        <h3 className="text-2xl font-semibold text-[#223d71] mr-8 whitespace-nowrap">
          {title}
        </h3>
        <div className="flex-1 border-b-2 border-gray-300"></div>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SectionTitle;
