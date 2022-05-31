import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation();

    console.log(location);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Payment Succesfull.
                </p>
            </header>
        </div>
    )
}
export default PaymentSuccess;