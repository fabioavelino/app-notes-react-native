import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'

const FloatingActionButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.button}>
      <Image style={styles.icon} source={icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flex: 1,
    alignItems: 'center',
    height: 56,
    width: 56,
    padding: 14,
    zIndex: 99,
    borderRadius: 30,
    backgroundColor: '#3bb0f5',
    elevation: 6
  },
  icon: {
    flex: 1,
    height: 20,
    width: 20
  }
})

export default FloatingActionButton
