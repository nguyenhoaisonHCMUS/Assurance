import { useParams } from 'react-router-dom';
import './InsuranceDetail.scss';
import PropTypes from 'prop-types';

function InsuranceDetail() {
    const { id } = useParams();
    // const program = programs.find((program) => program.id.toString() === id);
    // if (!program) {
    //     return <h2>Không có chương trình bảo hiểm này</h2>;
    // }
    return (
        <div className="insurancedetail">
            <div className="insurancedetail_main"></div>
        </div>
    );
}

InsuranceDetail.propTypes = {};

export default InsuranceDetail;
