import React from 'react'
import { connect } from 'react-redux'
import NoteEdit from '../../components/molecules/NoteEdit/NoteEdit'

import { changeNoteEdited } from '../../modules'

const NoteEditContainer = ({ noteEdited, changeNoteEdited }) => {
  return (
    <NoteEdit
      handleOnChangeText={changeNoteEdited}
      isSaved={noteEdited.index !== -1}
      note={noteEdited}
    />
  )
}

const mapStateToProps = state => {
  return {
    noteEdited: state.noteEdited
  }
}

const mapDispatchToProps = {
  changeNoteEdited
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditContainer)
