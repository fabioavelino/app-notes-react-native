import React from 'react'
import TitleTextInput from '../../atoms/TextInputs/TitleTextInput'
import DescriptionTextInput from '../../atoms/TextInputs/DescriptionTextInput'
import { StyleSheet, View } from 'react-native'

const NoteEdit = ({ handleOnChangeText, note, isSaved }) => (
  <View style={style.noteEdit}>
    <TitleTextInput
      onChangeText={handleOnChangeText}
      name={'title'}
      isSaved={isSaved}
      value={note.title}
    />
    <DescriptionTextInput
      onChangeText={handleOnChangeText}
      name={'description'}
      value={note.description}
    />
  </View>
)

const style = StyleSheet.create({
  noteEdit: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 22,
    marginRight: 22,
    marginTop: 16,
    marginBottom: 16
  }
})

export default NoteEdit
