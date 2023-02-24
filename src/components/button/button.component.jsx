import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const buttonTypeClass = BUTTON_TYPE_CLASSES[buttonType];
  const buttonClassName = buttonTypeClass ? '' : buttonTypeClass;

  return (
    <button className={`button-container ${buttonClassName}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
