import React from 'react'
import ActualPageText from '../../atoms/ActualPageText/ActualPageText'
import AddButton from '../../atoms/AddButton/AddButton'
import Background from '../../atoms/Background/Background.js'
import { Platform, StyleSheet, Text, View } from 'react-native'

const NavbarHome = ({ handleOnPressAdd }) => (
  <Background>
    <ActualPageText style={style.actualPageText}>Accueil</ActualPageText>
    {Platform.OS === 'ios' && <AddButton onPress={handleOnPressAdd} />}
  </Background>
)

const style = StyleSheet.create({
  actualPageText: {
    marginLeft: Platform.OS === 'android' ? 6 : 44,
    marginRight: 16
  }
})

export default NavbarHome
