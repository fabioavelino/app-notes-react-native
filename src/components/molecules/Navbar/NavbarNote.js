import React from 'react'
import ActualPageText from '../../atoms/ActualPageText/ActualPageText'
import BackButton from '../../atoms/BackButton/BackButton'
import DeleteButton from '../../atoms/DeleteButton/DeleteButton'
import SaveButton from '../../atoms/SaveButton/SaveButton'
import Background from '../../atoms/Background/Background.js'
import { Platform, StyleSheet, Text, View } from 'react-native'

const NavbarNote = ({ onPressBackButton, isSaved, onDelete, onSave }) => {
  const style = getStyle(isSaved)
  return (
    <Background>
      <BackButton onPress={onPressBackButton} />
      <ActualPageText style={style.actualPageText}>Note</ActualPageText>
      {isSaved && <DeleteButton onPress={onDelete} />}
      {Platform.OS === 'ios' && <View style={style.lastIcon}><SaveButton onPress={onSave} /></View>}
    </Background>
  )
}

const getStyle = isSaved =>
  StyleSheet.create({
    actualPageText: {
      marginLeft: Platform.OS === 'android' ? 8 : isSaved ? 48 : 0
    },
    lastIcon: {
      marginLeft: isSaved ? 20 : 0
    }
  })

export default NavbarNote
