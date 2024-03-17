import './ProductList.scss';
import PropTypes from 'prop-types';
import React from 'react';

function ProductList({ className, children }) {
    const productList = 'productList';
    const generateClassString = () => {
        const classes = { [className]: className, productList };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };

    return (
        <div className={generateClassString()}>
            <h1 className="productList_header">Các sản phẩm bảo hiểm</h1>
            <div className="productList_content">{children}</div>
        </div>
    );
}

ProductList.propTypes = {
    className: PropTypes.string,
};

export default ProductList;
