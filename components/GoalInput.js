import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState("")

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }

      const addGoalHandler = () => {
        props.addGoal(enteredGoal)
        setEnteredGoal('')
      }

    return(
        <Modal visible={props.modalVisible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/Images/kena.png')} />
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler} value={enteredGoal} />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='Cancel' onPress={props.cancel} color='#f31282' />
        </View>
            <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
        </View>
        </View>
      </View>
      </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#128438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      }, 
      button: {
        marginHorizontal: 8,
        width: 100
      },
      image: {
        width: 200,
        height: 150,
        marginHorizontal: 20,
        marginBottom: 20
      }
})