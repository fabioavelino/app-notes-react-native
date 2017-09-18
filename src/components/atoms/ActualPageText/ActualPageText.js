import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

const ActualPageText = ({ children, style }) => (
  <Text style={StyleSheet.flatten([styles.text, style])}>{children}</Text>
)

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontWeight: Platform.OS === 'android' ? 'bold' : 'normal',
    textAlign: Platform.OS === 'android' ? 'left' : 'center',
    fontSize: 18,
    color: 'white',
    backgroundColor: 'transparent'
  }
})

export default ActualPageText
