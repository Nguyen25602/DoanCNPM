import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const cityUser = useRef();
    const fromUser = useRef();
    const relationshipUser = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            cityUser: cityUser.current.value,
            fromUser: fromUser.current.value,
            relationshipUser: relationshipUser.current.value,
        };
        try {
            await axios.post("/auth/register", user);
            navigate('/login');
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="login">
            <div className="loginLeft">
                <h3 className="loginLogo">Nhật Ký Online</h3>
                <span className="loginDesc">
                    Kết nối với mọi người, chia sẻ <br />khoảnh khắc cuộc sống
                </span>
            </div>
            <form className="loginContainer" onSubmit={handleClick}>
                <label className="loginTile">Account Register</label>
                <label>Username</label>
                <input
                    placeholder="Nhập tên của bạn"
                    required
                    type='text'
                    ref={username}
                />
                <label>Email</label>
                <input
                    placeholder="Nhập Email"
                    required
                    type='email'
                    ref={email}
                />
                <label>Password</label>
                <input
                    placeholder="Nhập Mật Khẩu"
                    required
                    type='password'
                    ref={password}
                />
                <label>City</label>
                <input
                    placeholder="TP HCM || Đà Nẵng || ..."
                    required
                    type='text'
                    ref={cityUser}
                />
                <label>From</label>
                <input
                    placeholder="Quận 1 || Quận 2 || ..."
                    required
                    type='text'
                    ref={fromUser}
                />
                <label>Relationship</label>
                <input
                    placeholder="1.Cô đơn || 2.Có ny || 3.Khác"
                    required
                    type='number'
                    min="1"
                    max="3"
                    ref={relationshipUser}
                />
                <div className='btnContainer'>
                    <button type="button" className='nhatky__button' type="submit" >Đăng Ký</button>
                    <p>
                        <Link to="/login">
                            <span>
                                Đăng nhập ngay ?
                            </span>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}