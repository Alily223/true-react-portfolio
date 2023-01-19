import React from "react";
import { withRouter } from 'react-router-dom';

function Manager() {
    return (
        <div>
            <h1>Manager</h1>
            <div className='Manager-Selection-Form-Wrapper'>
                {/* Add Ternary React.Fragment Login Here */}

                <div className="Manager-Selector-Wrapper">
                    <div className="Manager-Selection">
                        <button>Add to Projects</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Remove from Projects</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Add to Certificates</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Remove from Certificates</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Add to Unfinished-Projects</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Remove From Unfinished-Projects</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Add to Blog</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>Remove From Blog</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>edit Testimonial</button>
                    </div>
                    <div className="Manager-Selection">
                        <button>remove Testimonial</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Manager);