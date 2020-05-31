import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


function GoalInput(props) {
    const [enteredGoal, setGoal] = useState('');
    const setTextGoal = (enteredText) =>{
        setGoal(enteredText);
    };

    return(
            <View style={styles.inputContainer}>
                <TextInput placeholder="course goal" style={styles.input} onChangeText ={setTextGoal} value={enteredGoal}/>
                <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
            </View>

            );
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent:'center',
        borderColor: 'black',
        borderWidth: 1,
        width: '80%'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent:'center'
    }
})

export default GoalInput;