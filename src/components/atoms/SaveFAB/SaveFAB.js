import React from 'react'
import icon from './saveIcon.png'
import FloatingActionButton from '../../../myComponents/FloatingActionButton/FloatingActionButton'

const SaveFAB = ({ onPress }) => {
  return <FloatingActionButton onPress={onPress} icon={icon} />
}

export default SaveFAB
