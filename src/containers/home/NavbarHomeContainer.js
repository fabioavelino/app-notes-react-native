import React from 'react'
import { connect } from 'react-redux'
import NavbarHome from '../../components/molecules/Navbar/NavbarHome'
import { newNote } from '../../modules'

const NavbarHomeContainer = ({ newNote }) => <NavbarHome handleOnPressAdd={newNote} />

const mapDispatchToProps = { newNote }

export default connect(null, mapDispatchToProps)(NavbarHomeContainer)
