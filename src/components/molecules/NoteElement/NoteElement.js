import React from 'react'
import TitleText from '../../atoms/TitleText/TitleText'
import DescriptionText from '../../atoms/DescriptionText/DescriptionText'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

class NoteElement extends React.Component {
  onPress = () => {
    const { onPress, index } = this.props
    onPress(index)
  }

  render () {
    const { title, description } = this.props
    return (
      <View style={styles.noteElement}>
        <TouchableOpacity onPress={this.onPress}>
          <TitleText>{title}</TitleText>
          <DescriptionText>{description}</DescriptionText>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  noteElement: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 22,
    paddingRight: 22,
    flexDirection: 'column',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  }
})

export default NoteElement
