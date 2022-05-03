import React from 'react';
import image404 from '../../images/image404.png'
const NotFound = () => {
    return (
        <div className="text-center">
            <img src={image404} alt="404" className="py-5"></img>
        </div>
    );
};

export default NotFound;