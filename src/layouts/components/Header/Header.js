import imgs from '../../../assets/imgs';
import config from '../../../config';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import Button from '../../../component/Button';
import { ChevronDown, Menubar, Xmark } from '../../../assets/icons/Icons';
import './Header.scss';
import { Fragment, useState } from 'react';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [showModal, setShowModal] = useState(false);

    const handleLogOut = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleShowOffModal = () => {
        setShowModal(false);
    };
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
                        appendTo={document.body}
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

                    {isLoggedIn === true ? (
                        <div className="header_uerInfo">
                            <Button className="header_btn" border>
                                Quản lý hợp đồng
                            </Button>
                            <div className="header_user">
                                <div className="header_user-img">
                                    <img alt="user" src={imgs.user} />
                                    <ChevronDown className="header_user_icon" />
                                </div>
                                <ul className="header_user_des">
                                    {/* <li>{userInfo.username}</li> */}
                                    <li>username</li>
                                    <Button border onClick={handleLogOut} href={config.routes.home}>
                                        Đăng xuất
                                    </Button>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Button className="header_btn " border href={config.routes.login}>
                            Đăng nhập/Đăng ký
                        </Button>
                    )}
                </div>
                <div className="header_menu_mobile" onClick={handleShowModal}>
                    <Menubar className="header_menu_mobile_icon" />
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal_overlay"></div>
                    <div className="modal_body">
                        <div className="modal_inner">
                            <div>
                                <div className="modal_heading">
                                    <div className="header_drawer_logo header_logo">
                                        <Link to={config.routes.home}>
                                            <img alt="logo" src={imgs.logo}></img>
                                        </Link>
                                    </div>
                                    <div className="header_drawer_icon" onClick={handleShowOffModal}>
                                        <Xmark />
                                    </div>
                                </div>
                                <div className="modal_inner_body">
                                    <ul className="modal_inner_list">
                                        {isLoggedIn === true ? (
                                            <Fragment>
                                                <div className="header_user-img">
                                                    <img alt="user" src={imgs.user} />
                                                </div>
                                                <li className="modal_inner_item">Quản lý hợp đồng</li>
                                            </Fragment>
                                        ) : (
                                            ''
                                        )}

                                        <li className="modal_inner_item">
                                            <p>
                                                Hỗ trợ <ChevronDown />
                                            </p>
                                            <ul className="modal_help_list">
                                                <li className="header_custom-tooltip_li">
                                                    <Link to={config.routes.home}>
                                                        Hotline MSB <span>1900 6083</span>
                                                    </Link>
                                                </li>
                                                <li className="header_custom-tooltip_li">
                                                    <Link to={config.routes.mcareyou}>
                                                        Bảo hiểm sức khoẻ M - CareYou
                                                    </Link>
                                                </li>
                                                <li className="header_custom-tooltip_li">
                                                    <Link to={config.routes.home}>Bảo hiểm ô tô Bảo Minh</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        {isLoggedIn === true ? (
                                            <li className="modal_inner_item">
                                                <Link onClick={handleLogOut} to={config.routes.home}>
                                                    Đăng xuất
                                                </Link>
                                            </li>
                                        ) : (
                                            <li className="modal_inner_item">
                                                <Link
                                                    to={config.routes.login}
                                                    onClick={() => {
                                                        handleShowModal();
                                                    }}
                                                >
                                                    Đăng nhập/Đăng ký
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// require('./Header.scss');
export default Header;
