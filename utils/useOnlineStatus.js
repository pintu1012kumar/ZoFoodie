import {useState, useEffect} from "react";

// *** custom Hook ( To check onlineStatus ) ***
const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true); 

    useEffect(()=> {
        // browser eventlistener (online,offline)
        window.addEventListener("offline", ()=> {
            setOnlineStatus(false);
        });

        window.addEventListener("online", ()=> {
            setOnlineStatus(true);
        });

    }, []);

    return onlineStatus;
}

export default useOnlineStatus;