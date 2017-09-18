const BACK_HOME = 'BACK_HOME'
const NEW_NOTE = 'NEW_NOTE'
const SELECT_NOTE = 'SELECT_NOTE'
const SAVE_NOTE = 'SAVE_NOTE'
const CHANGE_NOTE_EDITED = 'CHANGE_NOTE_EDITED'
const DELETE_NOTE = 'DELETE_NOTE'

const initialState = {
  page: 'Home',
  notes: [
    {
      title: 'Bienvenue !',
      description: 'Découvrez mon application de prise de notes.'
    }
  ],
  noteEdited: {
    index: -1,
    title: null,
    description: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BACK_HOME:
      return { ...state, page: 'Home' }
    case NEW_NOTE:
      return {
        ...state,
        page: 'Note',
        noteEdited: initialState.noteEdited
      }
    case SELECT_NOTE:
      return {
        ...state,
        page: 'Note',
        noteEdited: { ...state.notes[action.payload], index: action.payload }
      }
    case CHANGE_NOTE_EDITED:
      return {
        ...state,
        noteEdited: { ...state.noteEdited, ...action.payload }
      }
    case DELETE_NOTE:
      const notes = state.notes.filter((note, index) => index !== state.noteEdited.index)
      return {
        ...initialState,
        page: 'Home',
        notes
      }
    case SAVE_NOTE:
      const newNote = {
        title: state.noteEdited.title,
        description: state.noteEdited.description
      }
      let newNotes
      if (state.noteEdited.index !== -1) {
        newNotes = state.notes.map(
          (note, index) => (index !== state.noteEdited.index ? note : newNote)
        )
      } else {
        newNotes = [...state.notes, newNote]
      }
      return { ...state, page: 'Home', notes: newNotes }
    default:
      return state
  }
}

const backHome = () => {
  return { type: BACK_HOME }
}
const saveNote = () => {
  return { type: SAVE_NOTE }
}
const deleteNote = () => {
  return { type: DELETE_NOTE }
}

const selectNote = index => {
  return { type: SELECT_NOTE, payload: index }
}

const changeNoteEdited = change => {
  return { type: CHANGE_NOTE_EDITED, payload: change }
}

const newNote = () => {
  return { type: NEW_NOTE }
}

export default reducer
export { backHome, selectNote, saveNote, deleteNote, changeNoteEdited, newNote }
