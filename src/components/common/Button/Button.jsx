import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ type, onClick, disabled, children, text, ariaLabelText }) => {
  const normalazedText = text.toUpperCase();
  return (
    <button
      className={s.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabelText}
    >
      {children}
      <span className={s.text}>{normalazedText}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  text: PropTypes.string,
  ariaLabelText: PropTypes.string,
};

export default Button;
