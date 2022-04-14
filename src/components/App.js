import React, {useState, useContext } from 'react';
import { products } from './products';
import Content from './content/Content';
import Sidebar from './sidebar/Sidebar';
import { MyContext } from './MyContext';

function App() {
    let initOrders = JSON.parse(JSON.stringify(products))
    initOrders.forEach(product => product.count = 0);
    initOrders[0].count = 1;
    
    const [orders, setOrders] = useState([...initOrders]);
    return (
        <section className='order'>
            <div className='container'>
                <div className='row'>
                <MyContext.Provider value={{orders, setOrders}}>
                    <Content />
                    <Sidebar />
                </MyContext.Provider>
                </div>
            </div>
        </section>
    )
}
export default App;