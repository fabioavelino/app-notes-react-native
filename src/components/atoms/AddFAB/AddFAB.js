import React from 'react'
import icon from './addIcon.png'
import FloatingActionButton from '../../../myComponents/FloatingActionButton/FloatingActionButton'

const AddFAB = ({ onPress }) => {
  return <FloatingActionButton onPress={onPress} icon={icon} />
}

export default AddFAB
