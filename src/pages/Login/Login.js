import { useEffect, useState } from 'react';
import './Login.scss';
import Button from '../../component/Button';
import config from '../../config';

function isCCCDNumber(text) {
    // Biểu thức chính quy để kiểm tra số CCCD
    const cccdRegex = /^[0-9]{9,12}$/;
    return cccdRegex.test(text);
}

function Login() {
    const [option, setOption] = useState(null);
    const [personalDocs, setPersonalDocs] = useState('');
    const [checkIn, setCheckIn] = useState(false);
    const [isValidCCCD, setIsValidCCCD] = useState(false);

    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', 'true');
    };

    useEffect(() => {
        setIsValidCCCD(isCCCDNumber(personalDocs));
        setCheckIn(option !== null && isValidCCCD);
    }, [option, personalDocs, isValidCCCD]);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setPersonalDocs(inputValue);
    };

    return (
        <div className="login_bg">
            <div className="login_page">
                <h2>Đăng nhập</h2>
                <p>cung cấp thông tin đã đăng ký hợp đồng để tiến hành đăng nhập</p>
                <div className="login_container">
                    <div className="login_option">
                        <label>
                            <input
                                type="radio"
                                value="cccd"
                                checked={option === 'cccd'}
                                onChange={() => {
                                    setOption('cccd');
                                }}
                            />
                            Căn cước công dân
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="cmnd"
                                checked={option === 'cmnd'}
                                onChange={() => {
                                    setOption('cmnd');
                                }}
                            />
                            Chứng minh nhân dân
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="hochieu"
                                checked={option === 'hochieu'}
                                onChange={() => {
                                    setOption('hochieu');
                                }}
                            />
                            Hộ chiếu
                        </label>
                    </div>
                    <div className="login_input">
                        <p>Số giấy tờ tuỳ thân</p>
                        <input type="text" value={personalDocs} onChange={handleInputChange} />
                        {!isValidCCCD && (
                            <p style={{ color: 'red', fontSize: 14, marginTop: 6 }}>Nhập đúng số thông tin cá nhân</p>
                        )}
                    </div>
                    <div className="login_btn">
                        <Button bg_color disabled={!checkIn} onClick={handleLogin} href={config.routes.home}>
                            Đăng nhập
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
