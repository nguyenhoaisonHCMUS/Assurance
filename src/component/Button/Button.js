import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({
    className,
    border,
    bg_color,
    to,
    href,
    leftIcon,
    rightIcon,
    disabled = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const button_wrapper = 'button_wrapper';
    const generateClassString = () => {
        const classes = { [className]: className, border, bg_color, leftIcon, rightIcon, disabled, button_wrapper };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };
    return (
        <Comp className={generateClassString()} {...props}>
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <span className="title">{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    border: PropTypes.bool,
    bg_color: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

require('./Button.scss');
export default Button;
