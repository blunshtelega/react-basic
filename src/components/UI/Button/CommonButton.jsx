import React from 'react';
import classes from './CommonButton.module.css'

const CommonButton = ({children, ...buttonProps}) => {
    return (
        <button {...buttonProps} className={classes.cmButton}>
            {children}
        </button>
    );
};

export default CommonButton;