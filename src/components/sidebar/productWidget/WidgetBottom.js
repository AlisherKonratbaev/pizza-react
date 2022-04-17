import React, { useContext, useState, useRef } from 'react';
import { MyContext } from '../../MyContext';
import randomChar from '../../randomChar';

export default function WidgetBottom(props) {
    const { orders, setOrders, savedOrders, setSavedOrders, setModal } = useContext(MyContext);
    const [code, setCode] = useState("");
    const ref = useRef(null)
    const openModal = () => {
        setModal(true);
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

        ref.current.textContent = `Your pizza configuration has been saved.Your number is ${tempObj.code}`
    }

    const loadPizza = (e) => {
        e.preventDefault();

        const findOrders = savedOrders.find(item => item.code === code);
        if (!findOrders) return

        resetOrders();

        orders.forEach(order => {
            findOrders.products.forEach(product => {
                if(order.id === product.product_id) order.count = product.count;
            })
        })

        setOrders([...orders]);
    }

    return (
        <>
            <div className='widget__bottom'>
                <span>Total price</span><span>{props.totalPrice}$</span>
            </div>
            <div className='widget__bottom'>
                <button type="button" className="btn btn-success" onClick={savePizza}>Save pizza</button>
                <button type="button" className="btn btn-primary" onClick={openModal}>Chekout</button>
            </div>

            <form onSubmit={loadPizza}>
                <div className='widget__bottom'>
                    <input type="text" value={code} onChange={(e) => { setCode(e.target.value) }} />
                    <button type="submit" className="btn btn-dark">Load pizza</button>
                </div>
            </form>
            <p ref={ref} className='product_code'></p>
        </>
    )
}