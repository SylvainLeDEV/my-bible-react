import React, {useEffect, useState} from 'react';
import logo from "./Logo";

const Circle = () => {

    const [circle, setCircle] = React.useState({});


    const handleMouseMove = (e) => {
        setCircle({
            left: e.pageX + 'px',
            top: e.pageY + 'px',
        });
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div>
            <div
                style={
                    {
                        left: circle.left,
                        top: circle.top,
                    }
                }
                onMouseMove={(e) => {
                    handleMouseMove(e);
                }

                }
                id="circle"></div>
        </div>
    );
};

export default Circle;