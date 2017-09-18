import React from 'react'
import { connect } from 'react-redux'
import Home from './contexts/Home'
import Note from './contexts/Note'

const App = ({ page }) => {
  if (page === 'Home') {
    return <Home />
  }
  if (page === 'Note') {
    return <Note />
  }
}

const mapStateToProps = state => {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps, null)(App)
