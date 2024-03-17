import './ProductItem.scss';
import PropTypes from 'prop-types';
import { memo } from 'react';

function ProductItem({ className, src, children }) {
    const productItem = 'productItem';
    const generateClassString = () => {
        const classes = { [className]: className, productItem };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };

    return (
        <div className={generateClassString()}>
            <div className="productItem_img">
                <img alt="pic" src={src} />
            </div>
            <div className="productItem_content">{children}</div>
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

export default memo(ProductItem);
