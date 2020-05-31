import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";


export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  const handlePress = (goalTitle) => {
    setCourseGoal(currentGoals => [...currentGoals, {id:Math.random().toString(), value:goalTitle}]);
  };

  const deleteItem = (goalId) => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  return (

    <View style={styles.screen}>
      <GoalInput onAddGoal={handlePress}/>

      <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoal}
          renderItem = {itemData =>
              <GoalItem
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={deleteItem}
              />
          }

      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignContent:'center'
  }

});


