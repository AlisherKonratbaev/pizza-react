import React, { useState, useContext, useEffect } from 'react';
import { MyContext } from '../../MyContext';
import Modal from '../../modal/Modal';

import WidgetHead from './WidgetHead';
import WidgetContent from './WidgetContent';
import WidgetBottom from './WidgetBottom';

import { products } from "../../products";

function ProductWidget(props) {
    const { orders, setOrders, idOrders, setIdOrders } = useContext(MyContext);
    
    const getTotalPrice = () => {
        let price = orders.reduce((curret, next) => curret + next.count * next.price, 0)
        return price
    }
   
    return (
        <div className="widget">
            <WidgetHead title={props.title} totalPrice={getTotalPrice()}/>
            <WidgetContent />
            <WidgetBottom  totalPrice={getTotalPrice()}/>
        </div>
    )
}

export default ProductWidget;