import './CarList.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

function CarList({ className, icon, data }) {
    const [carCompName, setCarCompName] = useState('');
    const [show, setShow] = useState(false);
    const popupRef = useRef();

    const handleCarCompName = (e) => {
        setCarCompName(e.target.innerText);
        setShow(false);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShow(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className={classNames({ carlist: true, [className]: className })} ref={popupRef}>
            <div
                className={classNames({ carlist_name: true, carlist_active: show })}
                onClick={() => {
                    setShow(!show);
                }}
            >
                <p>{carCompName || <span>Chọn</span>}</p>
                {icon}
            </div>

            <ul className={classNames({ carlist_list: true, carlist_listactive: show })}>
                {data.map((name, index) => {
                    return (
                        <li key={index} onClick={handleCarCompName}>
                            {name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

CarList.proTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    data: PropTypes.array.isRequired,
};

export default CarList;
