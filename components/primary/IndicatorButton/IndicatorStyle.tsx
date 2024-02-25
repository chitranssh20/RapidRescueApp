import { StyleSheet } from 'react-native'


const container : any = {
    width: "80%" , 
    borderRadius: 5000, 
    aspectRatio: 1, 
    flex: 0,
    justifyContent: 'center', 
    alignItems: 'center', 
}

const styles =  StyleSheet.create({
      success : {
        ...container ,
        backgroundColor : "green"        
    },
    danger: {
        ...container,
        backgroundColor: "red"
    }
})

export default styles