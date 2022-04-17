import {useContext } from 'react';
import { MyContext } from '../MyContext';

function Overlay() {
    const {modal ,setModal} = useContext(MyContext);

    const close = (e) => {
        setModal(false);
    }
    return (
        <div onClick={close} className= {`overlay ${modal? "show":"hide"}`}></div>
    )
}

export default Overlay;