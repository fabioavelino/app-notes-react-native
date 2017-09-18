import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

const DescriptionText = ({ children }) => <Text style={styles.text}>{children}</Text>

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 14,
    color: 'rgba(52,52,52,0.8)'
  }
})

export default DescriptionText
