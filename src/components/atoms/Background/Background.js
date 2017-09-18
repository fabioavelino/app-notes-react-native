import React from 'react'
import BackgroundImage from './background.jpg'
import { Platform, StatusBar, StyleSheet, ImageBackground } from 'react-native'

const Background = ({ children }) => {
  return (
    <ImageBackground style={style.background} source={BackgroundImage}>{children}</ImageBackground>
  )
}

const style = StyleSheet.create({
  background: {
    position: 'absolute',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 16 : 20 + 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    top: 0,
    left: 0,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#20A4F3',
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    zIndex: 99
  }
})

export default Background
