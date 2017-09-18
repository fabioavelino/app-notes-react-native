import React from 'react'
import icon from './saveIcon.png'
import IconButton from '../../../myComponents/IconButton/IconButton'
import { Platform } from 'react-native'

const SaveButton = ({ onPress }) => {
  return <IconButton onPress={onPress} icon={icon} />
}

export default SaveButton
