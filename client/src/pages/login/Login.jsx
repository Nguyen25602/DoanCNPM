import { useContext, useRef, useState } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };
    console.log(error);// xem user
    return (
        <div className="login">
            <div className="loginLeft">
                <h3 className="loginLogo">Nhật Ký Online</h3>
                <span className="loginDesc">
                    Kết nối với mọi người, chia sẻ <br />khoảnh khắc cuộc sống
                </span>
            </div>
            <form className="loginContainer" onSubmit={handleClick}>
                <label className="loginTile">Account Login</label>
                <label>Email</label>
                <input
                    placeholder="Nhập Email"
                    type='email'
                    required
                    ref={email}
                />
                <label>Password</label>
                <input
                    placeholder="Nhập Mật Khẩu"
                    type='password'
                    required
                    minLength="6"
                    ref={password}
                />
                <div className='btnContainer'>
                    <button type="button" className='nhatky__button' type="submit" disabled={isFetching}>
                        {isFetching ? (
                            <CircularProgress color="white" size="14px" />
                        ) : (
                            "Đăng Nhập"
                        )}
                    </button>
                    <p>
                        <Link to="/register">
                            <span>
                                Đăng ký ngay ?
                            </span>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}