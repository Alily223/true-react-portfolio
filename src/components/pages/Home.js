import React, { Component } from 'react';
import Aboutme from "../HomepageFeatures/Aboutme";
import MoreFacts from '../HomepageFeatures/MoreFacts';
import HomeDashboard from '../HomepageFeatures/HomeDashboard';


export default class Home extends Component {
    render(){
    return(
        <div className='Home-Page-Wrapper'>

            <Aboutme/>
            

            <MoreFacts/>

            <HomeDashboard/>
        </div>
    )
    }
}