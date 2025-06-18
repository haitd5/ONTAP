import React, { useState } from "react";

function InitStateCallback() {
    const [totalAmount, setTotalAmount] = useState(() => {
        const bills = [200, 250, 540, 230];
        const total = bills.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
        return total;
    });
    const [amount, setAmount] = useState(0);
    const handleInputAmount = (e) => {
        setAmount(Number(e.target.value));
    };

    const handlePayment = () => {
        setTotalAmount(totalAmount + amount);
    };

    return (
        <>
            <div className="container">
                <input type="number" className="form-control" onInput={handleInputAmount} />
                <button className="btn btn-success" onClick={handlePayment}>
                    Payment
                </button>
                <br />
                <h1>Total amount: {totalAmount}</h1>
            </div>
        </>
    );
}
export default InitStateCallback;
