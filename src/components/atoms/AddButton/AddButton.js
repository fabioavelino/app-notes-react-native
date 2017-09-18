import React from 'react'
import icon from './addIcon.png'
import IconButton from '../../../myComponents/IconButton/IconButton'
import { Platform } from 'react-native'

const AddButton = ({ onPress }) => {
  return <IconButton onPress={onPress} icon={icon} />
}

export default AddButton
