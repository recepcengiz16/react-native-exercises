import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Todo.styles'

export default function Todo({data,todosObj}) {

  const style = !data.hasDone ? {bgColor:styles.bgOrange,text:styles.textWhite} : {bgColor:styles.bgGray,text:styles.textGray}

  const makeIt = () => {
    todosObj.setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === data.id) {
          return { ...todo, hasDone: true }; 
        } else {
          return todo; 
        }
      });
    });

    console.log(todosObj.todos);
  }

  return (
    <TouchableOpacity onPress={makeIt}>
      <View style={[styles.container,style.bgColor]}>
        <Text style={style.text}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

