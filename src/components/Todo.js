import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { Todos } from '../contexts/TodoContext';


const Todo = ({ title, id, completed }) => {
  const { dispatch } = useContext(Todos);

  const handleCheck = () => dispatch({ type: "CHECK_TODO", payload: id })

  return (
    <View>
      <TouchableOpacity style={styles.todo} onPress={handleCheck}>
        <CheckBox
          disabled={false}
          value={completed}
          onValueChange={handleCheck}
        />
        <View style={styles.todoRight}>
          <Text style={[styles.todoText, completed && styles.done]}>
            {title}
          </Text>
          <Text style={[styles.todoTime, completed && styles.done]}>
            12:42 PM
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  todoText: {
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 5,
    lineHeight: 20,
    letterSpacing: 0.24
  },
  done: {
    opacity: 0.4,
    textDecorationLine: 'line-through'
  },
  todoRight: {
    marginLeft: 13,
  }
})

export default Todo