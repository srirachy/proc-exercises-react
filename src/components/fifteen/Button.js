import React from 'react';

const Button = ({content, func}) => {
    return ( 
        <>
            <button className='w-25' onClick={func}>{content}</button>
        </>
    );
}
 
export default Button;