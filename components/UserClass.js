// **** class based components for User ****
import React from "react"; 

// Normal Class + React.Component (makes it class based component)
class UserClass extends React.Component {
    
    // *** constructor() is called , each time when an instace of the class created / class get rendered ***
    constructor(props) {
        super(props);  // must use super(props), to access props anywhere inside class

        //** to create state variable in class component**
        // ** Here this.state={} is a large object which can hold lots of state variable
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        }

        // console.log(this.props.name + " child constructor");

    }

    // A function for class component which is called after constructor -> rendered -> componentDidMount()
    // Called after the component Mounted/loaded on to webpage completely

    async componentDidMount() {
        // console.log(this.props.name + " child componentDidMount");
        // **** Github API call ****

        const data = await fetch("Use Your own github API");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        // console.log(json);
    }


    // **** Called after state variable update and reRender component *****
    componentDidUpdate() {
        // console.log("componentDidUpdate called");
    }

    // ***** Called after our component will unMount or removed from page or we move to another page ****
    componentWillUnmount() {
        // console.log("componentWillUnmount called");
    }


    // render() method returning JSX
    render() {

        // console.log(this.props.name + " child rendered");

        // Destructuring
        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <h1>Inside Class Component</h1>

                <img src={avatar_url}/>
                <h2>Name: {name}</h2>          
                <h3>Location: {location}</h3>
                <h4>Contact: @codealok</h4>
            </div>
        );
    }
}

export default UserClass;


/* NOTE:  (Never compare React Lifecycle with functional components)

    -- useEffect()  and componentWillMount() completely diffrent way.
    -- All the three componentWillMount(), componentDidUpdate(), componentWillMount(), functionality is mostly handled by useEffect() Hook alone and with lesser Code.

*/

/*
 ---- Mounting cycle ----
    --constructor (with dummy)
    --Render (dummy)
        - update dom (with dummy data)
    --ComponentDidMount()
        - API call
        - this.setState() -> state variable is updated

 ---- Updation cycle ----
    -- reRender with Api Data
        - Updates Dom
    -- ComponentDidUpdate() called

*/