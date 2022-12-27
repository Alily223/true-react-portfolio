import React from 'react';
import LogoImg from "../../../static/assets/images/Logos/Logo-Two.png";

export default function(){
    return(
        <div className='Home-Page-Wrapper'>

            <div className='Logo-wrapper'>
                <div 
                    className="Logo-img"
                    style = {{ backgroundImage:`url(${LogoImg})`}}
                />
            </div>
            

        </div>
    )
}