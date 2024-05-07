// *** Functional component for User ***

import { useState } from "react";

const User = (props)=> {

    // creating state variable ( behind the scene all state variable are stored in a object (as in class component))
    const [count] = useState(1);
    const [count2] = useState(11);

    // destructuring props
    const {name, location} = props;

    return (
        <div className="user-card">
            <h1>Inside Functional Component</h1>

            <p>Count: {count}</p>
            <p>Count: {count2}</p>
            <h2>Name: {name}</h2>          
            <h3>Location: {location}</h3>
            <h4>Contact: @codealok</h4>
        </div>
    );
};

export default User;