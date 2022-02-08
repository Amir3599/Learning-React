import React from "react";
import ImageOne from '../images/eggs1.jpg';
import ImageTwo from '../images/eggs2.jpg';
import ImageThree from '../images/eggs3.jpg';

const Content = () => {
    return (
        <>
            <div className="menu-card" >
                <img src={ImageOne}
                    alt="Egg"
                    className=" h-full mb-20 rounded shadow"
                />
                <div className="center-content">
                    <h2 className=" text-2xl mb-2">Egg & wheat</h2>
                    <p className="mb-2">Crispy, delicious And nutritious</p>
                    <span>$15</span>
                </div>
            </div>
            <div className="menu-card" >
                <img src={ImageTwo}
                    alt="Egg"
                    className=" h-full mb-20 rounded shadow"
                />
                <div className="center-content">
                    <h2 className=" text-2xl mb-2">Egg & wheat</h2>
                    <p className="mb-2">Crispy, delicious And nutritious</p>
                    <span>$15</span>
                </div>
            </div>
            <div className="menu-card" >
                <img src={ImageThree}
                    alt="Egg"
                    className=" h-full mb-20 rounded shadow"
                />
                <div className="center-content">
                    <h2 className=" text-2xl mb-2">Egg & wheat</h2>
                    <p className="mb-2">Crispy, delicious And nutritious</p>
                    <span>$15</span>
                </div>
            </div>
        </>
    )
};

export default Content;
