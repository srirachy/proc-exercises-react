import React from 'react';
import SFC from '../components/fourteen/SFC';
import CC from '../components/fourteen/CC';

const Fourteen = () => {
    return ( 
        <div className='container d-flex flex-column justify-content-center align-items-center'>
            <SFC name='Jane'/>
            <CC name='XYZ'/>
        </div>
     );
}
 
export default Fourteen;