import React from 'react'
import backIconAndroid from './backIconAndroid.png'
import backIconIos from './backIconIos.png'
import IconButton from '../../../myComponents/IconButton/IconButton'
import { Platform } from 'react-native'

const BackButton = ({ onPress }) => {
  const icon = Platform.OS === 'android' ? backIconAndroid : backIconIos
  return <IconButton onPress={onPress} icon={icon} />
}

export default BackButton
