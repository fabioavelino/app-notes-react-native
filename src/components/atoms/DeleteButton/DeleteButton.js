import React from 'react'
import icon from './deleteIcon.png'
import IconButton from '../../../myComponents/IconButton/IconButton'
import { Platform } from 'react-native'

const DeleteButton = ({ onPress }) => {
  return <IconButton onPress={onPress} icon={icon} />
}

export default DeleteButton
