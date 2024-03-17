import { CheckIcon, ChevronDown } from '../../../../assets/icons/Icons';
import Button from '../../../../component/Button';
import { useState, Fragment } from 'react';
import './ChildrenProductHome.scss';

function ChildrenProductHome({ heading, content, advans, href }) {
    const [show, setShow] = useState(false);
    return (
        <Fragment>
            <div>
                <h2 className="productItem_header">{heading}</h2>
                <p className="productItem_des">{content}</p>
                <div className="productItem_more">
                    <div className="productItem_more_btn" onClick={() => setShow(!show)}>
                        Xem ưu điểm sản phẩm <ChevronDown />
                    </div>

                    <ul className={`productItem_advans ${show ? 'active' : ''}`}>
                        {advans.map((advan, index) => {
                            return (
                                <li className="productItem_advan" key={index}>
                                    <CheckIcon className="productItem_advan_icon" /> <p>{advan}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <Button bg_color className="productItem_advans_btn" href={href}>
                Mua mới
            </Button>
        </Fragment>
    );
}

export default ChildrenProductHome;
