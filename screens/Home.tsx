import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import IndicatorButton from '../components/primary/IndicatorButton/IndicatorButton'
import useLocation from '../hooks/useLocation'
import { Chip, Card, Divider } from 'react-native-paper';

const Home = () => {
  const location = useLocation();

  return (
    <View style={styles.container} >
      <IndicatorButton text={(location.speed * 3.6).toFixed(2).toString() || "N/A"} backgroundColor='success' />
      <View style= {styles.card} >
        <View style= {styles.innerView} >
          <Text style={{textAlign: "center"}} >Latitude</Text>
          <Chip icon="map-marker" style= {styles.chips} > {location.latitude} </Chip>
        </View>
        <View style= {styles.innerView}>
          <Text style= {{textAlign: "center"}} >Longitude</Text>
          <Chip icon="map-marker"  style= {styles.chips}> {location.longitude} </Chip>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50
  },
  card: {
    flexDirection: 'row',
    flex: 0,
  },
  chips: {
    marginVertical: 20
  },
  innerView: {
    marginHorizontal: 10
  }
});

export default Home