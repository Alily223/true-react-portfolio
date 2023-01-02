import React from 'react';
import LogoImg from "../../../static/assets/images/Logos/Logo-Two.png";

export default function(){
    return(
        <div className='Home-Page-Wrapper'>

            <div className="About-me-wrapper">
                <div className='Photo-of-me-wrapper'>
                    PICTURE GOES HERE
                </div>

                <div className='Info-text-mission-text'>
                    <h2>About-Me and My Mission</h2>
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

            <div className='More-Facts-About-Me-Grid-Wrapper'>
                <div className='Skills-Wrapper'>
                    <div className='Header-MFAMGW-SW'>
                        <h2>Skills & Percent Confidence</h2>
                    </div>

                    <div className='Skill-bar-confidence-wrapper'>
                        <div className='Skill-Item-wrapper'>

                            <div className="Skill-Name">
                                <p>HTML5</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-HTML">
                                    <p>95%</p>
                                </div>
                            </div>
    
                        </div>

                        <div className='Skill-Item-wrapper'>
                        
                            <div className="Skill-Name">
                                <p>SCSS/CSS</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-CSS">
                                    <p>95%</p>
                                </div>
                            </div>
    
                        </div>

                        <div className='Skill-Item-wrapper'>
                        
                            <div className="Skill-Name">
                                <p>Python3</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-Python">
                                    <p>75%</p>
                                </div>
                            </div>
    
                        </div>

                        <div className='Skill-Item-wrapper'>
                        
                            <div className="Skill-Name">
                                <p>Flask</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-Flask">
                                    <p>55%</p>
                                </div>
                            </div>
    
                        </div>

                        <div className='Skill-Item-wrapper'>
                        
                            <div className="Skill-Name">
                                <p>MongoDB</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-MongoDB">
                                    <p>65%</p>
                                </div>
                            </div>

                        </div>

                        <div className='Skill-Item-wrapper'>
                        
                            <div className="Skill-Name">
                                <p>UML</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-UML">
                                    <p>90%</p>
                                </div>
                            </div>

                        </div>

                        <div className='Skill-Item-wrapper'>
                        
                            <div className="Skill-Name">
                                <p>UI/UX</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-UIUX">
                                    <p>100%</p>
                                </div>
                            </div>

                        </div>

                        <div className='Skill-Item-wrapper'>
                        
                            <div className="Skill-Name">
                                <p>Javascript</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-Javascript">
                                    <p>85%</p>
                                </div>
                            </div>

                        </div>

                        <div className='Skill-Item-wrapper'>
                        
                            <div className="Skill-Name">
                                <p>GIT</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-GIT">
                                    <p>85%</p>
                                </div>
                            </div>

                        </div>

                        <div className='Skill-Item-wrapper'>
                        
                            <div className="Skill-Name">
                                <p>ReactJS</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-ReactJS">
                                    <p>75%</p>
                                </div>
                            </div>

                        </div>

                        <div className='Skill-Item-wrapper'>
                        
                            <div className="Skill-Name">
                                <p>MySQL</p>
                            </div>

                            <div className='Skill-Bar'>
                                <div className="Skill-Percent-SQL">
                                    <p>90%</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='Hobbies-Wrapper'>
                    <div className='Header-MFAMGW-HW'>
                        <h2>Hobbies</h2>
                    </div>

                    
                </div>

                <div className='Currently-Learning-Wrapper'>
                    <div className='Header-MFAMGW-CLW'>
                        <h2>Currently Learning</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}