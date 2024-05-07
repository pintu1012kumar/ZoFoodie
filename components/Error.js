import { useRouteError } from "react-router-dom";  // Hooks for path related error

const Error = () => {
    const err = useRouteError();    // calling routeError hook
    console.log(err);               // gives an object

    return (
        <div>
            <h2>This is a error page</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
};

export default Error;