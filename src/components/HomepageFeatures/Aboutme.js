import React from 'react';
import LogoImg from "../../../static/assets/images/Logos/Logo-Two.png";
 
export default function() {
 
    return(
        <div className="About-me-wrapper">
                <div className='Photo-of-me-wrapper'>
                    PICTURE GOES HERE
                </div>

                <div className='Info-text-mission-text'>
                    <h2>About-Me and My Goal</h2>
                    <p className='Text-ITMT'>
                    Hello, my name is Austin Lilygren. I am a full-stack web developer with varying web skills. My primary mission is to provide top-notch skills for future employers and top-notch sites. In addition, I'd love to learn more from future opportunities and expand my knowledge in web development. The coding community is a developing community, and I hope you and prospective employers would like to work with someone as open-minded and ready to learn new topics as I am.
                    </p>
                </div>

                <div className='Logo-wrapper'>
                    <div 
                        className="Logo-img"
                        style = {{ backgroundImage:`url(${LogoImg})`}}
                    />
                </div>
            </div>
    )
}