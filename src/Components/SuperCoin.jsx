import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux';

const SuperCoin = () => {
    const [superCoin, setSuperCoin] = useState(0);

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
    useEffect(() => {
        if (totalAmount < 100) {
            setSuperCoin(0);
        }
        else if (totalAmount < 200) {
            setSuperCoin(10);
        }
        else if (totalAmount < 300) {
            setSuperCoin(20);
        }
        else {
            setSuperCoin(30);
        }
    }, [totalAmount]);

    return (
        <div className="super-coins" style="text-align: center">
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoin} super coins with this purchase!</p>
        </div>
    );
};

export default SuperCoin;