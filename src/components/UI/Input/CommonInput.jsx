import React from 'react';
import classes from './CommonInput.module.css'

const CommonInput = (inputProps) => {
    return (
        <input {...inputProps} className={classes.cmInput}/>
            
    );
};
// Для неуправляемых компонентов
// const CommonInput = React.forwardRef((inputProps, ref) => {
//     return (
//         <input ref={ref} {...inputProps} className={classes.cmInput}/>
            
//     );
// });

export default CommonInput;