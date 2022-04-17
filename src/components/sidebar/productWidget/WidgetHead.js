
import React, { useContext } from 'react';
import { MyContext } from '../../MyContext';


export default function WidgetHead(props) {
    const { orders, setOrders} = useContext(MyContext);

    const resetOrders = () => {
        orders.forEach(order => {
            (order.id === 1) ? order.count = 1 : order.count = 0;
        });
        setOrders([...orders]);
    }

    return (
        <div className="widget__head">
            <h4>{props.title}</h4>
            <span className="total_price">{props.totalPrice}$</span>
            <button onClick={resetOrders}>Reset All</button>
        </div>
    )
} 