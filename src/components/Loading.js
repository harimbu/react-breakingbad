import React from 'react';
import spinner from '../img/spinner.gif';

const Loading = () => {
    return (
        <div className='spinner'>
            <img src={spinner} alt='' />
        </div>
    );
};

export default Loading;
