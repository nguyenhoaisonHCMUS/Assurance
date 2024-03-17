import './Drawer.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { memo } from 'react';

function Drawer({ className, children, drawer_right, drawer_left, onClose }) {
    const generateClassString = () => {
        return classNames(className, {
            drawer_right,
            drawer_left,
            drawer: true,
        });
    };

    return (
        <div className={generateClassString()}>
            <div className="drawer_overlay" onClick={onClose}></div>
            <div className="drawer_body">
                <div className="drawer_inner">{children}</div>
            </div>
        </div>
    );
}

Drawer.propTypes = {
    drawer_right: PropTypes.bool,
    drawer_left: PropTypes.bool,
    drawer_open: PropTypes.bool,
    onClose: PropTypes.func,
};
export default memo(Drawer);
