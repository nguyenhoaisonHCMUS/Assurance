import Slide from '../../component/Slide';
import imgs from '../../assets/imgs';
import Apart from '../../component/Apart';
import Question from '../../component/Question/Question';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './component/ContactForm/ContactForm';

function BhNhantho({ className }) {
    return (
        <div className="bhnhantho">
            <div className="bhnhantho_main">
                <Slide content={`Bảo hiểm nhân thọ `} content_black src={imgs.nhantho} />
                <Apart className="mcareyou_questions" src={imgs.question_img} heading="Chi tiết sản phẩm">
                    <Question
                        className="mcareyou_question"
                        ques="Quyền lợi"
                        render={
                            <Fragment>
                                <li>Hưởng 100% Giá trị tài khoản khi kết thúc hợp đồng</li>
                                <li>
                                    Thưởng duy trì vào các năm hợp đồng thứ 10, 13, 16 & mỗi 3 năm sau đó với tỷ lệ
                                    tương ứng 150%, 100%, 50% Phí bảo hiểm cơ bản của 1 năm hợp đồng vào Giá trị tài
                                    khoản đóng thêm.
                                </li>
                                <li>
                                    Bồi thường giá trị lớn hơn giữa Số tiền bảo hiểm và Giá trị tài khoản hợp đồng khi
                                    Người được bảo hiểm không may tử vong hoặc thương tật toàn bộ vĩnh viễn.
                                </li>
                                <li>
                                    Tạm ứng không tính lãi đến 50% Giá trị tài khoản, tối đa 6 tháng khi Người được bảo
                                    hiểm được chẩn đoán mắc bệnh hiểm nghèo giai đoạn cuối.
                                </li>
                                <p>
                                    Xem chi tiết quyền lợi và các điều khoản khác{' '}
                                    <Link
                                        target="_blank"
                                        to="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/pdf/tai-lieu-bieu-mau/pru-vung-chac-tnc.pdf"
                                        style={{ color: 'blue' }}
                                    >
                                        tại đây
                                    </Link>{' '}
                                </p>
                            </Fragment>
                        }
                    />
                    <Question
                        className="mcareyou_question"
                        ques="Điều kiện tham gia"
                        render={
                            <Fragment>
                                <li>Tuổi tham gia: 0 - 65 tuổi</li>
                                <li>Tuổi tối đa khi kết thúc HĐ: 100 tuổi</li>
                                <li>Thời hạn đóng phí: linh hoạt, tối thiểu là 5 năm.</li>
                            </Fragment>
                        }
                    />

                    <Question
                        className="mcareyou_question"
                        ques="Tính năng chính"
                        render={
                            <Fragment>
                                <li>Thay đổi Số tiền bảo hiểm kể từ năm hợp đồng thứ 3</li>
                                <li>Bổ sung/Chấm dứt sản phẩm bổ trợ</li>
                                <li>Rút tiền từ Giá trị tài khoản hợp đồng kể từ năm hợp đồng thứ 3</li>
                                <li>Tạm ngưng đóng phí bảo hiểm kể từ năm hợp đồng thứ 6</li>
                                <li>
                                    Chấm dứt hiệu lực hợp đồng trước hạn và nhận Giá trị hoàn lại sau khi trừ (các)
                                    khoản nợ (nếu có)
                                </li>
                                <li>Khôi phục hiệu lực hợp đồng</li>
                            </Fragment>
                        }
                    />
                </Apart>
                <ContactForm />
            </div>
        </div>
    );
}

export default BhNhantho;
