import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoal, setCourseGoal] = useState([])

  const addGoalHandler = (enteredGoal) => {
    setCourseGoal((prevGoal) => [...prevGoal, {text: enteredGoal, id: Math.random().toString()}])
    endModalHandler()
  }

  const deleteHandler = (id) => {
   setCourseGoal((prevGoal) => {
    return (
      prevGoal.filter((goal) => goal.id !== id)
    )
   })
  }

  const startModalHandler = () => {
    setModalIsVisible(true)
  }

  const endModalHandler = () => {
    setModalIsVisible(false)
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' onPress={startModalHandler} color='#a065ec' />
     <GoalInput modalVisible={modalIsVisible} addGoal={addGoalHandler} cancel={endModalHandler} />
      <View style={styles.goalsContainer}>
      <FlatList 
        data={courseGoal}
        renderItem={(itemData) => {
         return <GoalItem text={itemData.item.text} deleteGoal={deleteHandler} id={itemData.item.id} />
      }}
        keyExtractor={(item, index) => {
          return item.id
        }}
      />
      </View>
    </View >
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b'
  },
  goalsContainer: {
    flex: 5
  }
});
