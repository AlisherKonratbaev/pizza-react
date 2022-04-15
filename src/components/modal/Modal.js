
import {useContext } from 'react';
import { MyContext } from '../MyContext';
import { Link } from "react-router-dom";

function Modal() {
    const {orders, setOrders} = useContext(MyContext);

    const close = (e) => {
        e.target.closest(".modal").classList.remove("show");
        document.querySelector(".overlay").classList.remove("show");
    }
    const getTotalPrice = () =>{
        let price2 = orders.reduce((curret,next) => curret+next.count*next.price, 0)
        return price2
    }
    return (
        <div className="modal" data-modal="">
            <svg className="modal__cross" onClick={close}  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 96 96" enableBackground="new 0 0 96 96">
                <polygon fill="black" points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 " />
            </svg>
            <p className='center'>Your order</p>
            <ol>
                {orders.map((order, index) => {
                    if(order.count > 0)
                        return (
                            <li key={index}>{order.name} - {order.count}</li>
                        )
                })}
            </ol>
            <h4 className='center'>Total price {getTotalPrice()}$</h4>
            <div className='modal_bottom'>
                
                <a type="button" onClick={close} className="btn btn-dark">Cancel</a>
                <Link to="/checkout" type="button" className="btn btn-primary">Continue</Link>
                
            </div>
        </div>
    )
}


export default Modal;