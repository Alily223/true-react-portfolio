import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import LogoImg from "../../../static/assets/images/Logos/Logo-Two.png";
import PersonIconImg from "../../../static/assets/images/Logos/PersonIcon.png";
import PowerIconImg from "../../../static/assets/images/Logos/PowerIcon.png";

const NavigationComponent = (props) => {
  const signOut = () => {
    props.setUserLogInStatus("NOT_LOGGED_IN");
    props.setAdminLogInStatus("NOT_LOGGED_IN");
    localStorage.removeItem('token');
  };
  return (
    <div className="navigation-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            <div className="Logo-wrapper">
              <div
                className="Logo-img"
                style={{ backgroundImage: `url(${LogoImg})` }}
              />
              <p className="Title-Wrapper">Home</p>
            </div>
          </NavLink>

          <NavLink to="/sign-up" activeClassName="nav-link-active">
            <div className="Person-Sign-Up-wrapper">
              <div
                className="Person-Icon"
                style={{ backgroundImage: `url(${PersonIconImg})` }}
              />
              <p className="Title-Wrapper">Log-In</p>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="middle">
        <div className="nav-link-wrapper">
          <NavLink to="/projects" activeClassName="nav-link-active">
            Projects
          </NavLink>

          <NavLink to="/certificates" activeClassName="nav-link-active">
            Certificates
          </NavLink>

          <NavLink to="/testimonials" activeClassName="nav-link-active">
            Testimonials
          </NavLink>

          <NavLink to="/unfinished-projects" activeClassName="nav-link-active">
            Unfinished-projects
          </NavLink>

          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>


          {props.userLogInStatus === "LOGGED_IN" &&
          props.adminLogInStatus === "NOT_LOGGED_IN" ? (
            <React.Fragment>
              <NavLink to="/contact" activeClassName="nav-link-active">
                Contact
              </NavLink>
              <NavLink
                to="/create-testimonial"
                activeClassName="nav-link-active"
              >
                Create Testimonial
              </NavLink>
              <NavLink
                to="/hire-for-freelance-work"
                activeClassName="nav-link-active"
              >
                Hire For Freelance Work
              </NavLink>
            </React.Fragment>
          ) : props.userLogInStatus === "LOGGED_IN" && props.adminLogInStatus === "LOGGED_IN" ? (
            <React.Fragment>
              <NavLink to="/contact" activeClassName="nav-link-active">
                Contact
              </NavLink>

              <NavLink
                to="/create-testimonial"
                activeClassName="nav-link-active"
              >
                Create Testimonial
              </NavLink>

              <NavLink
                to="/hire-for-freelance-work"
                activeClassName="nav-link-active"
              >
                Hire For Freelance Work
              </NavLink>

              <NavLink to="/manager" activeClassName="nav-link-active">
                Manager
              </NavLink>

              <NavLink to="/user-manager" activeClassName="nav-link-active">
                User-Manager
              </NavLink>
            </React.Fragment>
          ) : null}

        </div>
      </div>

      <div className="right-side">
        <div className="nav-link-wrapper">
          <div className="Sign-out-wrapper" onClick={signOut}>
            <div
              className="Power-Icon"
              style={{ backgroundImage: `url(${PowerIconImg})` }}
            />
            <div>Sign-out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
