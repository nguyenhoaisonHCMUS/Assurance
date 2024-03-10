import './Cost.scss';
import PropTypes from 'prop-types';

function Cost({ className }) {
    return(
        <div className={`cost ${className}`}>
            <div className="cost_header">
                <div className="extim_heading">
                    <h2>{title}</h2>
                </div>
                <p>{des}</p>
            </div>
            <div className="estim_form">
                <input type="search" id="estim_form_relationship" />
            </div>
        </div>,
    );
}

Cost.propTypes = {
    className: PropTypes.string,
};

export default Cost;
