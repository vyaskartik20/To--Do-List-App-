import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalList from './components/GoalList';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisible, setisVisible] =useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentsGoals => [...currentsGoals, 
      {id : Math.random().toString(), value :goalTitle } ]);

    setisVisible(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals( currentGoals => {
      return currentGoals.filter((goal) => goal.id!=goalId);
    });
  }

  const cancelHandler = () => {
    setisVisible(false);
  };

  return (
    <View style={styles.screen} >

    <Button title= "Add to the list"  onPress= {()=> setisVisible(true)} />  
    <GoalList 
      onAddGoal={addGoalHandler} 
      visible={isVisible}
      onCancel={cancelHandler}
    />

      <FlatList
        data={courseGoals}
        keyExtractor={(item, index)=> item.id }
        renderItem=
        {
          itemData=>
          (
            <GoalItem 
              title={itemData.item.value} 
              id={itemData.item.id}
              onDelete={removeGoalHandler} 
              />
          )
        }  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});