import PropTypes from 'prop-types';
import './Estimatecost.scss';
import { useEffect, useState } from 'react';
import { ChevronDown, Iicon } from '../../../../assets/icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Button from '../../../../component/Button';
import { Link } from 'react-router-dom';

const relationshipOptions = ['Bản thân', 'Vợ/Chồng', 'Con ruột', 'Bố/ Mẹ đẻ', 'Bố/Mẹ chồng/vợ'];

function Estimatecost({ className, title, des }) {
    const [birthdate, setBirthdate] = useState('');
    const [relationship, setRelationship] = useState('');
    const [gender, setGender] = useState('male'); // Giới tính mặc định là nam
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
    const [formComplete, setFormComplete] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (birthdate === '' || relationship === '') {
            console.log('failed');
        } else {
            //xu ly khi dien day du thong tin
            console.log('successfully');
        }
    };

    useEffect(() => {
        const handleInputChange = () => {
            setFormComplete(birthdate !== '' && relationship !== '');
        };
        handleInputChange();
    }, [birthdate, relationship]);

    return (
        <div className={`estimatecost ${className || ''}`}>
            <div className="estim_header">
                <div className="estim_heading">
                    <h2>{title}</h2>
                </div>
                <p>{des}</p>
            </div>

            <form className="estim_form">
                <div className="estim_form_label">
                    <label htmlFor="estim_form_relationship">
                        Người được bảo hiểm là
                        <Tippy
                            interactive
                            // placement="top"
                            duration={'500,200'}
                            render={(attrs) => (
                                <div className="estim_form_tippyRender">
                                    Người được bảo hiểm là người có mối quan hệ hợp pháp với người mua bảo hiểm. Xem chi
                                    tiết tại{' '}
                                    <Link
                                        target="_blank"
                                        to="https://www.baoviet.com.vn/insurance/Uploads/Library/Images/SP04051917_Quy-t___c-B___o-Vi___t-An-Gia-final.pdf"
                                    >
                                        <strong style={{ color: 'blue' }}>Quy tắc, điều khoản sản phẩm</strong>
                                    </Link>
                                </div>
                            )}
                        >
                            <div className="estim_form_iicon">
                                <Iicon className="icon_i" />
                            </div>
                        </Tippy>
                    </label>
                    <Tippy
                        interactive
                        placement="bottom-start"
                        duration={'1000'}
                        trigger="click"
                        // appendTo={document.querySelector('.estim_form_label')}
                        render={(attrs) => (
                            <div className="estim_form_tippyRender estim_form_relationship">
                                <ul className="estim_form_relationshipList">
                                    {relationshipOptions.map((relationship3, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="estim_form_relationshipItem"
                                                onClick={() => {
                                                    setRelationship(relationship3);
                                                }}
                                            >
                                                {relationship3}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    >
                        <div className="estim_form_border">
                            <input
                                type="search"
                                id="estim_form_relationship"
                                placeholder="Chọn"
                                readOnly
                                required
                                value={relationship}
                            />
                            <span>
                                {' '}
                                <ChevronDown />
                            </span>
                        </div>
                    </Tippy>
                </div>

                <div className="estim_form_label">
                    <label className="estim_form_label" htmlFor="estim_form_birthday">
                        Ngày sinh
                    </label>
                    <div className="estim_form_border">
                        <input
                            type="date"
                            value={birthdate}
                            id="estim_form_birthday"
                            placeholder="Ngày sinh"
                            autoComplete="off"
                            onChange={(e) => {
                                setBirthdate(e.target.value);
                                console.log(formComplete);
                            }}
                        />
                    </div>
                </div>

                <div className="estim_form_label">
                    <label className="estim_form_label" htmlFor="estim_form_gender">
                        Giới tính
                        <div className="estim_form_gen">
                            <label>
                                Nam
                                <input
                                    type="radio"
                                    value="male"
                                    checked={gender === 'male'}
                                    onChange={() => setGender('male')}
                                />
                            </label>
                            <label>
                                Nữ
                                <input
                                    type="radio"
                                    value="female"
                                    checked={gender === 'female'}
                                    onChange={() => {
                                        setGender('female');
                                    }}
                                />
                            </label>
                        </div>
                    </label>
                </div>

                <div className="estim_form_label">
                    <label className="estim_form_label" htmlFor="estim_form_startday">
                        Ngày hiệu lực bảo hiểm
                    </label>
                    <div className="estim_form_border">
                        <input
                            type="date"
                            value={startDate}
                            id="estim_form_startday"
                            placeholder="DD/MM/YYYY"
                            autoComplete="off"
                            onChange={(e) => {
                                setStartDate(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="estim_form_sumit">
                    <Button bg_color onClick={handleSubmit} disabled={!formComplete}>
                        Tính phí
                    </Button>
                </div>
            </form>
        </div>
    );
}

Estimatecost.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    des: PropTypes.string,
};

export default Estimatecost;
