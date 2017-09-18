import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'

const IconButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Image style={styles.icon} source={icon} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 44,
    width: 44,
    padding: 8,
    margin: -8
  },
  icon: {
    flex: 1,
    height: 28,
    width: 28
  }
})

export default IconButton
