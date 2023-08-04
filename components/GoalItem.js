import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItem = (props) => {

    const deleteGoalHandler = () => {
        props.deleteGoal(props.id)
    }

    return (
        <View style={styles.goalItem}>
            <Pressable 
            onPress={deleteGoalHandler} 
            android_ripple={{color: '#210644'}} 
            style={({pressed}) => pressed && styles.pressedItem}
            >
        <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        color: 'white',
        padding: 8
      }
})
