import React, { useState } from "react";
import SuccessAlert from "./Alert/SuccessAlert";
import ErrorAlert from "./Alert/ErrorAlert";

function TwoWayBindingFormSubmit2() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isSuccess, setIsSuccess] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (email === "haitd@gmail.com" && password === "12345678") {
            setIsSuccess(true);
        } else {
            setIsSuccess(false);
        }
        setShowAlert(true);
        // console.log(email, password);
    };

    const handleGetAccount = () => {
        //fetching data from API
        setEmail("haitd@gmail.com");
        setPassword("12345678");
    };
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
                            onInput={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onInput={(e) => setPassword(e.target.value)}
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

export default TwoWayBindingFormSubmit2;
