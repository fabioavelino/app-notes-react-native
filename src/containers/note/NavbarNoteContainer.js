import React, { Component } from 'react'
import { connect } from 'react-redux'
import Alert from '../../components/atoms/Alert/Alert'
import NavbarNote from '../../components/molecules/Navbar/NavbarNote'
import { backHome, changeNoteEdited, saveNote, deleteNote } from '../../modules'

class NavbarNoteContainer extends Component {
  onPressBackButton = () => {
    Alert(
      '',
      "Vous quittez une note en cours d'édition.",
      [
        {
          text: 'Ignorer',
          onPress: () => {
            this.props.backHome()
          }
        },
        { text: 'Rester' },
        { text: 'Sauvegarder', onPress: () => this.props.saveNote() }
      ],
      { cancelable: false }
    )
  }

  render () {
    const { noteEditedIndex, deleteNote, saveNote } = this.props
    return (
      <NavbarNote
        onPressBackButton={this.onPressBackButton}
        isSaved={noteEditedIndex !== -1}
        onDelete={deleteNote}
        onSave={saveNote}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    noteEditedIndex: state.noteEdited.index
  }
}

const mapDispatchToProps = {
  backHome,
  saveNote,
  deleteNote
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarNoteContainer)
