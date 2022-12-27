import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import LogoImg from "../../../static/assets/images/Logos/Logo-Two.png";
import PersonIconImg from "../../../static/assets/images/Logos/PersonIcon.png";


const NavigationComponent = (props) => {
  return (
    <div className="navigation-wrapper">
        <div className="left-side">
            <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="nav-link-active">
                    <div className='Logo-wrapper'>
                        <div 
                            className="Logo-img"
                            style = {{ backgroundImage:`url(${LogoImg})`}}
                        />
                        <p className="Title-Wrapper">Home</p>
                    </div>
                </NavLink>

                <NavLink to="/sign-up" activeClassName="nav-link-active">
                    <div className='Person-Sign-Up-wrapper'>
                        <div 
                            className="Person-Icon"
                            style = {{ backgroundImage:`url(${PersonIconImg})`}}
                        />
                        <p className="Title-Wrapper">Sign-up</p>
                    </div>
                </NavLink>
            </div>
        </div>

        <div className="middle">
            <div className="nav-link-wrapper">
                <NavLink to="/projects" activeClassName="nav-link-active">
                    Projects
                </NavLink>

                <NavLink to="/certificates-testimonals" activeClassName="nav-link-active">
                    Certificates & Testimonals
                </NavLink>

                <NavLink to="/unfinished-projects" activeClassName="nav-link-active">
                    Unfinished-projects
                </NavLink>
            </div>
        </div>

        <div className="right-side">
            <div className="nav-link-wrapper">
                <div>Sign-out</div>
            </div>
        </div>
    </div>
  );
};

export default withRouter(NavigationComponent);