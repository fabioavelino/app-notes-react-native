import React from 'react'
import Main from '../atoms/Main/Main'
import MainContainer from '../atoms/MainContainer/MainContainer'
import SaveFABContainer from '../../containers/note/SaveFABContainer'
import NavbarNoteContainer from '../../containers/note/NavbarNoteContainer'
import NoteEditContainer from '../../containers/note/NoteEditContainer'
import { Platform, View } from 'react-native'

const Note = () => (
  <Main>
    <NavbarNoteContainer />
    <MainContainer>
      <NoteEditContainer />
      {Platform.OS === 'android' && <SaveFABContainer />}
    </MainContainer>
  </Main>
)

export default Note
