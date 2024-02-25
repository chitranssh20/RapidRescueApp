import { View } from 'react-native'
import {indicatorButtonType} from '../../types/IndicatorButtonType'
import { Text } from 'react-native-paper';
import IndicatorStyle from './IndicatorStyle'
import React from 'react'

const IndicatorButton = ( {text, backgroundColor, actionFunc} : indicatorButtonType  )  => {

  return (
    <View style= {IndicatorStyle[backgroundColor] }   >
      <Text  variant="displayMedium" style={{ color: 'white' }} > {text + " kmph" } </Text>
    </View>
  )  
}

export default IndicatorButton