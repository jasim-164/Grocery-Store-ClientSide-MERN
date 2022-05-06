import React from 'react';
import { Button } from 'react-bootstrap';
import image404 from '../../images/image404.png'
import RequireAuth from '../RequireAuth/RequireAuth';

const NotFound = () => {

    return (
        <div className="text-center">
            <img src={image404} alt="404" className="py-5"></img>
        </div>
    );
};

export default NotFound;