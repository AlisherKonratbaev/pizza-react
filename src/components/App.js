import React, { useState } from 'react';
import { products } from './products';
import Content from './content/Content';
import Sidebar from './sidebar/Sidebar';
import { MyContext } from './MyContext';
import Overlay from './modal/Overlay';
import Modal from './modal/Modal';
import Chekout from './checkout/Checkout';

import {
    Route,
    BrowserRouter,
    Routes
} from 'react-router-dom';

function App() {
    let initOrders = JSON.parse(JSON.stringify(products))
    initOrders.forEach(product => product.count = 0);
    initOrders[0].count = 1;

    const [orders, setOrders] = useState([...initOrders]);
    const [savedOrders, setSavedOrders] = useState([]);
    const [modal, setModal] = useState(false);
    return (
        <BrowserRouter>
            <section className='order'>
                <div className='container'>
                    <div className='row'>
                    <MyContext.Provider value={{ orders, setOrders, savedOrders, setSavedOrders, modal, setModal}}>
                        <Routes>
                            <Route path='/' element = {
                                <>
                                    <Content /> 
                                    <Sidebar /> 
                                    <Overlay /> 
                                    <Modal />
                                </>
                            } />
                            <Route path="/checkout" element={<Chekout />} />
                        </Routes>
                    </MyContext.Provider>
                    </div>
                </div>
            </section>

        
        </BrowserRouter>
    )
}
export default App;