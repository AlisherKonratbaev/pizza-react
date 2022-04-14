import React, {useState, useContext } from 'react';
import { MyContext } from '../MyContext';

function Content() {
    const {orders, setOrders} = useContext(MyContext);
    
    return (
        <div className='col-md-8'>
            <div className='product_wrap'>
                {orders.map(item =>{
                    if(item.count > 0) {
                        return (
                            <div className='product_card'>
                                <img src={item.photo}/>
                            </div>      
                        )
                    }
                    
                })}
            </div>
        </div>
    )
}

export default Content;