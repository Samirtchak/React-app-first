import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);


  const setTextGoal = (enteredText) =>{
    setGoal(enteredText);
  };



  const handlePress = () => {
    setCourseGoal(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="course goal" style={styles.input} onChangeText ={setTextGoal} value={enteredGoal}/>
        <Button title="ADD" onPress={handlePress}/>

      </View>

      <View>
        {courseGoal.map((goal) =><View style={styles.listitem}><Text key={goal}>{goal}</Text></View>)}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
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
  },
  listitem: {
    padding:10,
    marginVertical: 10,
    backgroundColor: 'skyblue',
    borderWidth: 1,
    borderColor: 'black'
  }

});


