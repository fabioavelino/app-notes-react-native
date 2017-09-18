import React from 'react'
import { connect } from 'react-redux'
import AddFAB from '../../components/atoms/AddFAB/AddFAB'
import { newNote } from '../../modules'

const AddFABContainer = ({ newNote }) => <AddFAB onPress={newNote} />

const mapDispatchToProps = { newNote }

export default connect(null, mapDispatchToProps)(AddFABContainer)
