import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* With a balise img, take picture only in the directory public  */}
            <img src="/logo192.png" alt="Logo world"/>
            <h3>React World</h3>
        </div>
    );
};

export default Logo;