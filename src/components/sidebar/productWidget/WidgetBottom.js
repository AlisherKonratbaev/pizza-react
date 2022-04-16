import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../MyContext';
import randomChar from '../../randomChar';

export default function WidgetBottom(props) {
    const { orders, setOrders, savedOrders, setSavedOrders } = useContext(MyContext);
    const [code, setCode] = useState("");

    const openModal = () => {
        document.querySelector(".modal").classList.add("show");
        document.querySelector(".overlay").classList.add("show");
    }

    const resetOrders = () => {
        orders.forEach(order => order.count = 0);
        setOrders([...orders]);
    }

    const savePizza = () => {
        if (orders.filter(order => order.count > 0).length < 1) return
        const tempProducts = orders.filter(order => order.count > 0)
                                    .map(order => {
                                        return {
                                            product_id: order.id, 
                                            count: order.count,
                                        }
                                    });

        let tempObj = {
            "code": randomChar(),
            "products": [...tempProducts]
        }
        savedOrders.push(tempObj);
        setSavedOrders([...savedOrders]);
      
        document.querySelector('.product_code').textContent = `Your pizza configuration has been saved.Your number is ${tempObj.code}`
    }

    const loadPizza = (e) => {
        e.preventDefault();

        const findOrders = savedOrders.find(item => item.code === code);
        if (!findOrders) return

        resetOrders();
        for(let i = 0; i < orders.length; i++) {
            for(let k = 0; k < findOrders.products.length; k++) {
                if(orders[i].id === findOrders.products[k].product_id) {
                    orders[i].count = findOrders.products[k].count
                    break;
                }
            }
        }
        setOrders([...orders]);
    }

    return (
        <>
            <div className='widget__bottom'>
                <span>Total price</span><span>{props.totalPrice}$</span>
            </div>
            <div className='widget__bottom'>
                <button type="button" className="btn btn-success" onClick={savePizza}>Save pizza</button>
                <button type="button" className="btn btn-primary" onClick={() => { openModal() }}>Chekout</button>
            </div>

            <form onSubmit={loadPizza}>
                <div className='widget__bottom'>
                    <input type="text" value={code} onChange={(e) => { setCode(e.target.value) }} />
                    <button type="submit" className="btn btn-dark">Load pizza</button>
                </div>
            </form>
            <p className='product_code'></p>
        </>
    )
}