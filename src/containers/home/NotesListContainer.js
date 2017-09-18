import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotesList from '../../components/organisms/NotesList/NotesList'
import { selectNote } from '../../modules'

const NotesListContainer = ({ selectNote, notes }) => (
  <NotesList onPress={selectNote} notes={notes} />
)

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = {
  selectNote
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesListContainer)
