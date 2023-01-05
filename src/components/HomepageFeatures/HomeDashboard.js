import React from 'react';
import Twittericon from '../../../static/assets/images/Logos/Twittericonsmaller.png';
import Linkedinicon from '../../../static/assets/images/Logos/Linked-in.png';
import Instagramicon from '../../../static/assets/images/Logos/Instagram.png';
import { NavLink } from "react-router-dom";
 
export default function(){
 
    return(
        <div className='DashBoard-Grid-Wrapper'>

            <div className="Object-Wrapper">
                <div className ="Dashboard-Object-Name">
                    <h2>Projects</h2>
                </div>

                <div className ="Dashboard-Object-Material">
                    <p>4</p>
                </div>

                <div className ="Dashboard-Object-Link">
                    <NavLink to="/projects" activeClassName="nav-link-active">Go To Page</NavLink>
                </div>
            </div>
            
            <div className="Object-Wrapper">
                <div className ="Dashboard-Object-Name">
                    <h2>Certificates</h2>
                </div>

                <div className ="Dashboard-Object-Material">
                    <p>1</p>
                </div>

                <div className ="Dashboard-Object-Link">
                    <NavLink to="/certificates" activeClassName="nav-link-active">Go To Page</NavLink>
                </div>
            </div>

            <div className="Object-Wrapper">
                <div className ="Dashboard-Object-Name">
                    <h2>Testimonials</h2>
                </div>

                <div className ="Dashboard-Object-Material">
                    <p>0</p>
                </div>

                <div className ="Dashboard-Object-Link">
                    <NavLink to="/testimonials" activeClassName="nav-link-active">Go To Page</NavLink>
                </div>
            </div>

            <div className="Object-Wrapper">
                <div className ="Dashboard-Object-Name">
                    <h2>HackerRanks</h2>
                </div>

                <div className ="Dashboard-Object-Material">
                    <p>27</p>
                </div>

                <div className ="Dashboard-Object-Link">
                    <NavLink to="/hackeranks" activeClassName="nav-link-active">Go To Page</NavLink>
                </div>
            </div>

            <div className="Object-Wrapper">
                <div className ="Dashboard-Object-Name">
                    <h2>Un-finished Projects</h2>
                </div>

                <div className ="Dashboard-Object-Material">
                    <p>1</p>
                </div>

                <div className ="Dashboard-Object-Link">
                    <NavLink to="/unfinished-projects" activeClassName="nav-link-active">Go To Page</NavLink>
                </div>
            </div>

            <div className="Object-Wrapper">
                <div className ="Dashboard-Object-Name">
                    <h2>Coding Time Average a week</h2>
                </div>

                <div className ="Dashboard-Object-Material">
                    <p>6.14</p>
                </div>

                <div className ="Dashboard-Object-Material-Countby">
                    <p>Hours</p>
                </div>
            </div>

            <div className="Object-Wrapper">
                <div className ="Dashboard-Object-Name">
                    <h2>Blog Posts</h2>
                </div>

                <div className ="Dashboard-Object-Material">
                    <p>0</p>
                </div>

                <div className ="Dashboard-Object-Link">
                    <NavLink to="/blog" activeClassName="nav-link-active">Go To Page</NavLink>
                </div>
            </div>

            <div className="Object-Wrapper">
                <div className ="Dashboard-Object-Name">
                    <h2>Social Media Links</h2>
                </div>

                <div className="Social-link-grid">

                    <div className ="Dashboard-Object-Material item-a">
                        <a href="#">
                            <div className="image-wrapper">
                                <div 
                                    className="Dashboard-Object-Material-img"
                                    style = {{ backgroundImage:`url(${Twittericon})`}}
                                />
                                </div>
                            <p>Twitter</p>
                        </a>
                    </div>

                    <div className ="Dashboard-Object-Material item-b">
                        <a href="https://www.linkedin.com/in/austin-lilygren-7a2257141/">
                            <div className="image-wrapper">
                                <div 
                                    className="Dashboard-Object-Material-img"
                                    style = {{ backgroundImage:`url(${Linkedinicon})`}}
                                />
                            </div>
                            <p>Linked-In</p>
                        </a>
                    </div>

                    <div className ="Dashboard-Object-Material item-c">
                        
                        <a href="#">
                            <div className="image-wrapper">
                                <div 
                                    className="Dashboard-Object-Material-img"
                                    style = {{ backgroundImage:`url(${Instagramicon})`}}
                                />
                            </div>
                            <p>Instagram</p>
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )
}