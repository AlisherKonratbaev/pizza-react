import React, { useState, useContext, useEffect } from 'react';
import { MyContext } from '../MyContext';
import Modal from '../modal/Modal';
import randomChar from '../randomChar';

import { products } from "../products";

function ProductWidget(props) {
    const { orders, setOrders, idOrders, setIdOrders } = useContext(MyContext);
    const [code, setCode] = useState("");
    
    const creatPorduct = (product) => {
        orders.forEach(order => {
            if (order.id === product.id) {
                order.count += 1;
            }
        });
        setOrders([...orders]);
    }

    const resetOrders = () => {
        orders.forEach(order => {
            (order.id === 1) ? order.count = 1 : order.count = 0;
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
    const getTotalPrice = () => {
        let price = orders.reduce((curret, next) => curret + next.count * next.price, 0)
        return price
    }

    const openModal = () => {
        document.querySelector(".modal").classList.add("show");
        document.querySelector(".overlay").classList.add("show");
    }

    const savePizza = () => {
        if (orders.filter(order => (order.id != 1 && order.count > 0) ? true : false).length < 1) return

        const productsFilter = orders.filter(order => order.count > 0);

        let tempObj = {
            "code": randomChar(),
            "products": productsFilter
        }
        idOrders.push(tempObj);
        setIdOrders([...idOrders]);
        console.log(idOrders);
        document.querySelector('.product_code').textContent = `Your number is ${tempObj.code}`
    }

    const loadPizza = (e) => {
        e.preventDefault();

        const findOrders = idOrders.find(item => item.code === code);
        if (!findOrders) return

        console.log(findOrders)

        
    }

    return (
        <div className="widget">
            <div className="widget__head">
                <h4>{props.title}</h4>
                <span className="total_price">{getTotalPrice()}$</span>
                <button onClick={() => { resetOrders() }}>Reset All</button>
            </div>
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
            <div className='widget__bottom'>
                <span>Total price</span><span>{getTotalPrice()}$</span>
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


        </div>
    )
}

export default ProductWidget;