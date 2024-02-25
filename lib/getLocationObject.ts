import * as Location from 'expo-location'
import isLocationAllowed from './isLocationAllowed';

const getLocationObject = async() => {
    if (isLocationAllowed()) {
        try {
            const locationObject = await Location.getCurrentPositionAsync();
            return locationObject;
        } catch (error) {
            console.error("Error occurred while fetching location:", error);
            return null;
        }
    }
 }



export default getLocationObject;