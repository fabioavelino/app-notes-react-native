import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

class TitleTextInput extends React.Component {
  onChangeText = text => {
    const { name, onChangeText } = this.props
    onChangeText({
      [name]: text
    })
  }

  render () {
    const { value, isSaved } = this.props
    return (
      <TextInput
        underlineColorAndroid={'transparent'}
        placeholder='Titre'
        selectionColor='#20A4F3'
        autoCapitalize='sentences'
        autoFocus={!isSaved}
        style={style.textInput}
        onChangeText={this.onChangeText}
        value={value}
      />
    )
  }
}

const style = StyleSheet.create({
  textInput: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: 'rgba(52,52,52,1.0)'
  }
})

export default TitleTextInput
