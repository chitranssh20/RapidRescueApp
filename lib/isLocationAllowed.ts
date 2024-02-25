import * as Location from 'expo-location';

const isLocationAllowed = async() => {
    try{
        // const {status} = await Location.requestBackgroundPermissionsAsync();
        const {status} = await Location.requestForegroundPermissionsAsync();
        if(status == 'granted'){
            return true;
        }
        else{
            return false;
        }
    }
    catch (err) {
        console.log(err)
    }
}

export default isLocationAllowed;