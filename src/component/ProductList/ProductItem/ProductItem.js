import './ProductItem.scss';
import PropTypes from 'prop-types';
import { CheckIcon, ChevronDown } from '../../../assets/icons/Icons';
import Button from '../../Button';
import { useState } from 'react';

function ProductItem({ className, src, heading, content, advans, href }) {
    const productItem = 'productItem';
    const generateClassString = () => {
        const classes = { [className]: className, productItem };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };

    const [show, setShow] = useState(false);

    return (
        <div className={generateClassString()}>
            <div className="productItem_img">
                <img alt="pic" src={src} />
            </div>
            <div className="productItem_content">
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
                {/* <div className="productItem_content_x"></div> */}
                <Button bg_color className="productItem_advans_btn" href={href}>
                    Mua mới
                </Button>
            </div>
        </div>
    );
}

ProductItem.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    heading: PropTypes.string,
    content: PropTypes.string,
    advans: PropTypes.array,
    href: PropTypes.string,
};

export default ProductItem;
