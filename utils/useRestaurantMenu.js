import { useState, useEffect } from "react";
import { MENU_API } from "./constants";


// **** Custom Hook for Fetching RestaurntMenu API Data ****
const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
    
    // *** Api call for restaurantMenu of swiggy restaurant ***
    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        );
    
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;  // returning Data
}

export default useRestaurantMenu;