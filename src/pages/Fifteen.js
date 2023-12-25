import React, { useState } from 'react';
import Button from '../components/fifteen/Button';

const Fifteen = () => {
    let [val, setVal] = useState(27);

    const incrementCounter = () => {
        val = val + 1;
        setVal(val);
    }
    return ( 
        <div className='container d-flex flex-column justify-content-center align-items-center'>
            <h1>{val}</h1>
            <Button content='+1' func={incrementCounter}/>
        </div>
     );
}
 
export default Fifteen;