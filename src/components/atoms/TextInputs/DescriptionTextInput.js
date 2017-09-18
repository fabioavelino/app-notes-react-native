import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

class DescriptionTextInput extends React.Component {
  onChangeText = text => {
    const { name, onChangeText } = this.props
    onChangeText({
      [name]: text
    })
  }

  render () {
    const { value } = this.props
    return (
      <TextInput
        multiline
        underlineColorAndroid={'transparent'}
        placeholder='Note'
        autoCapitalize='sentences'
        selectionColor='#20A4F3'
        numberOfLines={10}
        style={style.textInput}
        onChangeText={this.onChangeText}
        value={value}
      />
    )
  }
}

const style = StyleSheet.create({
  textInput: {
    fontSize: 14,
    textAlignVertical: 'top',
    color: 'rgba(52,52,52,0.8)'
  }
})

export default DescriptionTextInput
