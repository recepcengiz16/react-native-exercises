import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import styles from "./AddTodo.style";


export default function AddTodo({todosObj}) {

  const [todo, setTodo] = useState("");

  const addTodoList = () => {
     const id= Math.random()*1000000;
     const data = {id,title:todo,hasDone:false};
     todosObj.setTodos([...todosObj.todos,data]);
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Yapılacak..' style={styles.text} value={todo} onChangeText={setTodo}/>
      <TouchableOpacity style={styles.btn} onPress={addTodoList}>
        <Text style={styles.btnText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  )
}

