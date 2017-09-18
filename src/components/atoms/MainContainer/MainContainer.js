import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

const MainContainer = ({ children }) => (
  <View style={style.noteEdit}>
    {children}
  </View>
)

const style = StyleSheet.create({
  noteEdit: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 58 : 20 + 58,
    flex: 1
  }
})

export default MainContainer
