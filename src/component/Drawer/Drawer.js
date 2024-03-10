import { useState } from 'react';
import './Drawer.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Drawer({ className, children, drawer_right, drawer_left, open }) {
    const [show, setShow] = useState(open || false);

    const generateClassString = () => {
        return classNames(className, {
            drawer_right,
            drawer_left,
            drawer: true,
            drawer_open: show,
        });
    };

    return (
        <div className={generateClassString()}>
            <div
                className="drawer_overlay"
                onClick={() => {
                    setShow(false);
                }}
            ></div>
            <div className="drawer_body">
                <div className="drawer_inner">{children}</div>
            </div>
        </div>
    );
}

Drawer.propTypes = {
    drawer_right: PropTypes.bool,
    drawer_left: PropTypes.bool,
};
export default Drawer;
