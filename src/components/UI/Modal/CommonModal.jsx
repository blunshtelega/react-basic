import React from 'react';
import classes from './CommonModal.module.css'

const CommonModal = ({children, visible, setVisible}) => {
    const rootClasses = [classes.commonModal]

    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.commonModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CommonModal;