import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ isDisabled, handleButton, label }) {
    return (
        <button className="button" type="button" disabled={isDisabled} onClick={handleButton}>
            {label}
        </button>
    );
}

Button.defaultProps = {
    isDisabled: false,
    handleButton: () => null,
    label: '',
};

Button.propTypes = {
    isDisabled: PropTypes.bool,
    handleButton: PropTypes.func,
    label: PropTypes.string,
};
