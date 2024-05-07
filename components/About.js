import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react"; 

// import React from "react" work same here
// class About extends React.Component { }

class About extends Component {

    constructor(props) {
        super(props);

        // console.log("parent constructor");
    }

    componentDidMount() {
        // console.log("parent componentDidMount");
    }

    render() {

        // console.log("parent rendered");

        return (
            <div>
                <h1>About Us page</h1>
                <h4>Know more about Me</h4>
    
                <UserClass name={"first"} location={"India"}/>
            </div>
        );
    }
}

export default About;


/* **** This is the hierarchy of working in React lifecycle (when multiple child are there in same component having componentDidMount() in each)

        parent constructor
        parent rendered
        first child constructor
        first child rendered
        second child constructor
        second child rendered
        first child componentDidMount
        second child componentDidMount
        parent componentDidMount

*/