import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";


export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [visibility,setVisibility] = useState(false);

  const handlePress = (goalTitle) => {
    setCourseGoal(currentGoals => [...currentGoals, {id:Math.random().toString(), value:goalTitle}]);
    setVisibility(false);
  };

  const deleteItem = (goalId) => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const handleCancel = () => {
    setVisibility(false);
  }

  return (

    <View style={styles.screen}>
      <Button title="ADD new Goal" onPress={() => setVisibility(true)}/>
      <GoalInput
          visible={visibility}
          onAddGoal={handlePress}
          onCancel={handleCancel}
      />

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


