import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,Modal} from 'react-native';


function GoalInput(props) {
    const [enteredGoal, setGoal] = useState('');
    const setTextGoal = (enteredText) =>{
        setGoal(enteredText);
    };
    const AddGoal = () =>{
        props.onAddGoal(enteredGoal);
        setGoal('');
    }

    return(
            <Modal visible={props.visible} animationType = "slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="course goal" style={styles.input} onChangeText ={setTextGoal} value={enteredGoal}/>
                <View style={styles.buttonContainer}>
                <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                <Button title="ADD" onPress={AddGoal}/>
                </View>
            </View>
            </Modal>

            );
}

const styles = StyleSheet.create({
    input: {

        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        padding: 10
    },
    inputContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'space-around',
        width:'60%'

    }
})

export default GoalInput;