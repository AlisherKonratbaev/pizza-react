

import React, { useContext,useEffect } from 'react';
import { MyContext } from '../../MyContext';


export default function WidgetContent() {
    const { orders, setOrders, savedOrders, setSavedOrders } = useContext(MyContext);

    const creatPorduct = (product) => {
        orders.forEach(order => {
            if (order.id === product.id) {
                order.count += 1;
            }
        });
        setOrders([...orders]);
    }

    const deletePorduct = (product) => {
        orders.forEach(order => {
            if (order.id === product.id) {
                order.count > 0 ? order.count -= 1 : order.count = 0
            }
        });
      
        setOrders([...orders]);
    }
    // useEffect(() => {
    //     console.log(orders);
    // })
    return (
        <div className="widget__content">
                {orders.map((product, index) => {
                    return (
                        <div className="item" key={index}>
                            <div>
                                {product.name}<br />
                                {product.price}$
                            </div>
                            <div>
                                <input type="submit" onClick={() => { creatPorduct(product) }} value="+" />
                                <span className='order_count'>{product.count}</span>
                                <input type="submit" onClick={() => { deletePorduct(product) }} value="-" />
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}