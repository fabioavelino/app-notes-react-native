import React from 'react'
import { StyleSheet, View } from 'react-native'

const Main = ({ children }) => {
  return <View style={style.main}>{children}</View>
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default Main
