import './Slide.scss';
import PropTypes from 'prop-types';

function Slide({ className, content, src, btn, content_black }) {
    const slide_wrapper = 'slide_wrapper';
    const generateClassString = () => {
        const classes = { [className]: className, slide_wrapper, content_black };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };

    return (
        <div className={generateClassString()}>
            <img alt="assurance" src={src} />
            <div className="slide_wrapper_content">
                <h2>{content}</h2>
                {btn}
            </div>
        </div>
    );
}

Slide.propTypes = {
    content: PropTypes.string,
    src: PropTypes.string.isRequired,
    btn: PropTypes.node,
    className: PropTypes.string,
};
export default Slide;
