import React, {useState, useContext } from 'react';
import { MyContext } from '../MyContext';

import { products } from "../products";

function ProductWidget(props) {
    const {orders, setOrders} = useContext(MyContext);

    const creatPorduct = (product) => {
        orders.forEach(order => {
            if(order.id === product.id){
                order.count +=1;
            } 
        });
        setOrders([...orders]);   
    }

    const deletePorduct = (product) => {
        orders.forEach(order => {
            if(order.id === product.id){
                order.count > 0 ? order.count -= 1 : order.count = 0
            } 
        });
        setOrders([...orders]);   
    }
    const getTotalPrice = () =>{
        let price2 = orders.reduce((curret,next) => curret+next.count*next.price, 0)
        return price2
    }

    return(
        <div className="widget">
            <div className="widget__head">
                <h4>{props.title}</h4>
                <span className="total_price">{getTotalPrice()}$</span>
                <button>Reset All</button>
            </div>
            <div className="widget__content">
                {orders.map((product,index) => {
                    return (
                        <div className="item" key={index}>
                            <div>
                                {product.name}<br />
                                {product.price}$
                            </div>
                            <div>
                                <input type="submit" onClick={() => {creatPorduct(product)}} value="+" />
                                    <span className='order_count'>{product.count}</span>
                                <input type="submit" onClick={() => {deletePorduct(product)}} value="-" />
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProductWidget;