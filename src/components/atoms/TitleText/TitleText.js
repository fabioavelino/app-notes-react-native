import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

const TitleText = ({ children, style }) => (
  <Text style={StyleSheet.flatten([styles.text, style])}>{children}</Text>
)

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: 'rgba(52,52,52,1.0)'
  }
})

export default TitleText
