import React, {useState, useEffect} from "react";
import getLocationObject from "../lib/getLocationObject";

type locationType = {
    accuracy: number,
    altitude: number,
    altitudeAccuracy: number,
    heading: number,
    latitude: number,
    longitude: number,
    speed: number
}

const useLocation = () : locationType =>  {

    const [location, setlocation] = useState<locationType>({
        accuracy: 0,
        altitude: 0,
        altitudeAccuracy: 0,
        heading: 0,
        latitude: 0,
        longitude: 0,
        speed: 0
    }) 
    useEffect(() => {
        const fetchLocation = async () => {
            const locationData = await getLocationObject();
            setlocation(locationData.coords)
        }
        const fetchLocationTimeId = setInterval(fetchLocation, 10000)
        return (() => {
            clearInterval(fetchLocationTimeId)
        } )
    }, [])



    return location;

}

export default useLocation;