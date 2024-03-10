import './ProductList.scss';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import React from 'react';

function ProductList({ className, products }) {
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
            <div className="productList_content">
                {products.map((product, index) => (
                    <ProductItem
                        src={product.src}
                        heading={product.heading}
                        content={product.content}
                        advans={product.advans}
                        key={index}
                        href={product.href}
                    />
                ))}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    className: PropTypes.string,
};

export default ProductList;
