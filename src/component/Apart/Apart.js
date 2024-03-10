import './Apart.scss';
import ProTypes from 'prop-types';

function Apart({ className, heading, src, children, reff }) {
    const apart = 'apart';
    const generateClassString = () => {
        const classes = { [className]: className, apart };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };
    // console.log('re-render apart');
    return (
        <div className={generateClassString()} ref={reff}>
            <div className="apart_main">
                <div className="apart_heading">
                    <h1>{heading}</h1>
                </div>
                {children}
            </div>
            <div className="apart_img">
                <img alt="pic" src={src} />
            </div>
        </div>
    );
}

Apart.propTypes = {
    className: ProTypes.string,
    src: ProTypes.string,
    children: ProTypes.node,
};
export default Apart;
