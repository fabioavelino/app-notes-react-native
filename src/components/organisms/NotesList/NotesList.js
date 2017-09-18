import React from 'react'
import NoteElement from '../../molecules/NoteElement/NoteElement'
import { StyleSheet, FlatList, View } from 'react-native'

const NotesList = ({ onPress, notes }) => (
  <View style={styles.notesList}>
    <FlatList
      data={notes}
      keyExtractor={(item, index) => index}
      renderItem={({ item, index }) => (
        <NoteElement
          index={index}
          onPress={onPress}
          title={item.title}
          description={item.description}
        />
      )}
    />
  </View>
)

const styles = StyleSheet.create({
  notesList: {
    flexDirection: 'row',
    flex: 1
  }
})

export default NotesList
