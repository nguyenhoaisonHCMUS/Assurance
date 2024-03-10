import imgs from '../../../assets/imgs';
import config from '../../../config';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import React from 'react';
import Button from '../../../component/Button';
import { ChevronDown } from '../../../assets/icons/Icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSign } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <div className="header_wrapper">
                <div className="header_logo">
                    <Link to={config.routes.home}>
                        <img alt="logo" src={imgs.logo}></img>
                    </Link>
                </div>
                <div className="header_container">
                    <Tippy
                        placement="bottom-start"
                        duration={'100,50'}
                        interactive
                        render={(attrs) => (
                            <div className="header_custom-tooltip" tabIndex="-1" {...attrs}>
                                <li className="header_custom-tooltip_li">
                                    <Link to={config.routes.home}>
                                        Hotline MSB <span>1900 6083</span>
                                    </Link>
                                </li>
                                <li className="header_custom-tooltip_li">
                                    <Link to={config.routes.mcareyou}>Bảo hiểm sức khoẻ M - CareYou</Link>
                                </li>
                                <li className="header_custom-tooltip_li">
                                    <Link to={config.routes.home}>Bảo hiểm ô tô Bảo Minh</Link>
                                </li>
                            </div>
                        )}
                    >
                        <div className="header_navbar">
                            <li>
                                Hỗ trợ <ChevronDown className="header_navbar_icon" />
                            </li>
                        </div>
                    </Tippy>

                    <Button className="header_btn " border>
                        Đăng nhập/Đăng ký
                    </Button>
                </div>
            </div>
        </div>
    );
}

// require('./Header.scss');
export default Header;
