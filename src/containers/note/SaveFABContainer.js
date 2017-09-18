import React from 'react'
import { connect } from 'react-redux'
import SaveFAB from '../../components/atoms/SaveFAB/SaveFAB'
import { saveNote } from '../../modules'

const SaveFABContainer = ({ saveNote }) => <SaveFAB onPress={saveNote} />

const mapDispatchToProps = { saveNote }

export default connect(null, mapDispatchToProps)(SaveFABContainer)
