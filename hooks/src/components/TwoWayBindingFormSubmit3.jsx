import React, { useState } from "react";
import SuccessAlert from "./Alert/SuccessAlert";
import ErrorAlert from "./Alert/ErrorAlert";

function TwoWayBindingFormSubmit3() {
    const [state, setState] = useState({
        email: "",
        mobile: "",
        password: "",
        isSuccess: false,
    });
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const [isSuccess, setIsSuccess] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (email === "haitd@gmail.com" && password === "12345678") {
            setState({
                ...state,
                isSuccess: true,
            });
        } else {
            setState({
                ...state,
                isSuccess: false,
            });
        }
        setShowAlert(true);
        // console.log(email, password);
    };

    const handleGetAccount = () => {
        //fetching data from API
        setState({
            ...state,
            email: "haitd@gmail.com",
            password: "12345678",
        });
    };
    const handleInputValue = (e) => {
        console.log(e.target.name, e.target.value);

        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const { email, mobile, password, isSuccess } = state;
    return (
        <>
            <div className="container">
                <h1>Login Form</h1>
                {(isSuccess && (
                    <SuccessAlert showAlert={showAlert} setShowAlert={setShowAlert} content={"Đăng nhập thành công"} />
                )) ||
                    (!isSuccess && (
                        <ErrorAlert showAlert={showAlert} setShowAlert={setShowAlert} content={"Đăng nhập thất bại"} />
                    ))}
                <form onSubmit={handleSubmitLogin}>
                    <div className="form-group">
                        <label className="form-lable">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            name="email"
                            onInput={handleInputValue}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Mobile</label>
                        <input
                            type="number"
                            className="form-control"
                            value={mobile}
                            name="mobile"
                            onInput={handleInputValue}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            name="password"
                            onInput={handleInputValue}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-dark me-3">
                            Login
                        </button>
                        <button type="button" className="btn btn-warning" onClick={handleGetAccount}>
                            Get Account
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default TwoWayBindingFormSubmit3;
