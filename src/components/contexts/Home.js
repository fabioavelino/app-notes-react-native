import React from 'react'
import Main from '../atoms/Main/Main'
import MainContainer from '../atoms/MainContainer/MainContainer'
import AddFABContainer from '../../containers/home/AddFABContainer'
import NavbarHomeContainer from '../../containers/home/NavbarHomeContainer'
import NotesListContainer from '../../containers/home/NotesListContainer'
import { Platform, View } from 'react-native'

const Home = () => (
  <Main>
    <NavbarHomeContainer />
    <MainContainer>
      <NotesListContainer />
      {Platform.OS === 'android' && <AddFABContainer />}
    </MainContainer>
  </Main>
)

export default Home
