import {StyleSheet, View, SafeAreaView, Text, FlatList, KeyboardAvoidingView} from 'react-native';
import React,{useState} from 'react';
import AddTodo from './src/components/AddTodo';
import Todo from './src/components/Todo';


export default function App(): React.JSX.Element {

  const [todos, setTodos] = useState([]);

  const todosObj= {todos,setTodos};

  const renderItem = ({item}) => <Todo data={item} todosObj={todosObj} />

  const hasntDone = todos.filter(x => !x.hasDone ).length;

  return (
    <KeyboardAvoidingView style={styles.container}>
      
        <View style={styles.title}>
          <Text style={styles.titleText}>Yapılacaklar</Text>
          <Text style={styles.titleText}>{hasntDone}</Text>
        </View>
        <View style={styles.todoList}>
          <FlatList 
            data={todos}
            keyExtractor={(x) => x.id}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.addTodoContainer}>
          <AddTodo todosObj={todosObj} />
        </View>
      

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor:"#B4B4B8"
   },
   todoList: {
    flex: 4,
   },
   addTodoContainer: {
    flex: 1,
    margin: 10,
   },
    title:{
      flexDirection:"row",
      justifyContent:"space-between",
      margin:15,
    },
    titleText: {
      fontSize: 25,
      color:"orange",
      fontWeight:"bold"
    }
});