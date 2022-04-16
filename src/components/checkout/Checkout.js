import React, { useContext, useRef } from 'react';
import { MyContext } from '../MyContext';

function Chekout() {
    const { orders } = useContext(MyContext);
    const ref = useRef(null);

    const crateCoupone = (e) => {
        if(e.target.checked) {
            ref.current.disabled = false
            ref.current.focus();
        } else {
            ref.current.value = "";
            ref.current.disabled = true
        }
        
    }
    const send = () => {
        alert("Submitet")
    }
    return (
        <>
        <div className='col-md-12'>
            <h3>Your Order</h3>
            <div className='product_wrap'>
                {orders.map((item,index) =>{
                    if(item.count > 0) {
                        return (
                            <div key={index} className='product_card center'>
                                <img src={item.photo}/>
                                <span>{item.count}</span>
                            </div>      
                        )
                    }
                })}
            </div>
        </div>
        <div className='col-md-8'>
          <h3>Checkout info</h3>
          <div className="mb-3 row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
              <input type="text" className="form-control" id="inputName" />
              </div>
          </div>
          <div className="mb-3 row">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail" />
              </div>
          </div>
          <div className="mb-3 row">
              <label htmlFor="inputDelivery" className="col-sm-5 col-form-label">Choose deleviry method</label>
              <div className="col-sm-7">
              <select className="form-select" aria-label="Default select example" id="inputDelivery">
                    <option value="1">Delivery</option>
                    <option value="2">Local pick up</option>
                </select>
              </div>
          </div>
          <div className="mb-3 row">
              <label htmlFor="inputNotes" className="col-sm-4 col-form-label">Additional notes</label>
              <div className="col-sm-8">
                <textarea className="form-control" id="inputNotes" rows="3"></textarea>
              </div>
          </div>
          <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Are you regular client?</label>
              <div className="col-sm-2">
                <input className="form-check-input" type="radio" name="isClient" id="inputYes" />
                <label className="form-check-label" htmlFor="inputYes">Yes</label> 
              </div>
              <div className="col-sm-2">
                <input className="form-check-input" type="radio" name="isClient" id="inputNo" />
                <label className="form-check-label" htmlFor="inputNo">No</label>
              </div>
          </div>
          <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Do yoy have coupon?</label>
              <div className="col-sm-2">
                <div className="form-check">
                    <input className="form-check-input" onClick={crateCoupone} type="checkbox" value="" id="haveCoupon" />
                </div>
              </div>
          </div>
          <div className="mb-5 row">
              <label htmlFor="inputCupon" className="col-sm-2 col-form-label">Coupon:</label>
              <div className="col-sm-10">
                <input type="text" disabled className="form-control" id="inputName" ref={ref} placeholder="Coupon code"/>
              </div>
          </div>
          <div className="mb-3 row  justify-content-md-center">
            <div className='col-offset-8 col-sm-2 '>
                <button type="button" className="btn btn-dark">Reset</button>
            </div>
            <div className='col-sm-2'>
                <button type="button" onClick={send} className="btn btn-primary ">Submit</button>
            </div>
          </div>
        </div>
      </>
    )
}

export default Chekout;