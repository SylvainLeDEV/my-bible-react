import React from 'react';
import { NavLink } from 'react-router-dom';
const ReturnHome = () => {
    return (
        <div className="returnHome">
            <NavLink to="/"> Return Home </NavLink>
        </div>
    );
};

export default ReturnHome;