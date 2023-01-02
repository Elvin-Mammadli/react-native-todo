import React, { useContext, useReducer, useState } from 'react'
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Todos } from '../contexts/TodoContext';

const NewTodo = ({ navigation }) => {
  const [input, setInput] = useState('');
  const { dispatch } = useContext(Todos);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Add Todo</Text>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput placeholder='Lorem ipsum dolor' value={input} onChangeText={setInput} style={styles.input} />
      </View>
      <TouchableOpacity style={styles.addBtn}
       onPress={() => {
        if(input) {
          dispatch({ type: "ADD_TODO", payload: { id: new Date().getTime(), title: input, completed: false, userId: 1 } });
          navigation.navigate('Main')
        } else {
          alert("Ad daxil et")
        }
       }}
       >
        <Text style={styles.addBtnText}>
          Done
        </Text>
      </TouchableOpacity>

    </SafeAreaView>

  )
}

export default NewTodo

const styles = StyleSheet.create({
  container: {
    paddingTop: 37,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1
  },
  head: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
    marginBottom: 20
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  inputLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  input: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(60, 60, 67, 0.6);',
    marginLeft: 20
  },
  addBtn: {
    backgroundColor: 'black',
    padding: 14,
    borderRadius: 10,
    marginTop: 40
  },
  addBtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  }
})