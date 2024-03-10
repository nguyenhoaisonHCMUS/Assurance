import './Footer.scss';
import imgs from '../../../assets/imgs';
import { FaceBookIcon, LinkedIcon, YoutubeIcon } from '../../../assets/icons/Icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_logo">
                <img alt="logo" src={imgs.logo} />
            </div>
            <div className="footer_contact">
                <div className="footer_contact_1">
                    <h4 className="footer_contact_header">Liên hệ</h4>
                    <p className="footer_contact_content">
                        Ngân hàng TMCP Hàng Hải Việt Nam
                        <br /> Trụ sở chính: 54A Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội
                    </p>
                    <p className="footer_contact_content">
                        Tel: (024) 3 771 89 89
                        <br /> Email: cskhcanhan@msb.com.vn
                    </p>
                </div>
                <div className="footer_contact_2">
                    <h4 className="footer_contact_header">Mạng xã hội</h4>
                    <p className="footer_contact_social">
                        {' '}
                        <FaceBookIcon /> Facebook
                    </p>
                    <p className="footer_contact_social">
                        {' '}
                        <LinkedIcon /> Linkedln
                    </p>
                    <p className="footer_contact_social">
                        {' '}
                        <YoutubeIcon /> Youtube
                    </p>
                </div>
            </div>
            <div className="footer_rule">Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB</div>
        </footer>
    );
}

export default Footer;
