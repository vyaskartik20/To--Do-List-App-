import React, { useState } from 'react'
import {StyleSheet, View, Text, TextInput, Button, Modal} from 'react-native';

const GoalList = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputBox} >
                <TextInput
                    placeholder="To Do"
                    style={styles.input}
                    onChangeText={text => goalInputHandler(text)}
                    value={enteredGoals}
                />

                <View style={styles.alignButtons}>
                    <View  style={styles.addOns}>
                        <Button title="Cancel"
                            color="red"
                            onPress={()=>
                            {
                                    props.onCancel()
                                    goalInputHandler('')   
                            }}
                        />
                    </View>

                    <View  style={styles.addOns}>
                        <Button title="ADD"
                            onPress={()=>
                                {
                                    props.onAddGoal(enteredGoal)
                                    goalInputHandler(' ')
                                }}
                        />
                    </View>
                </View>

                {/* <View  style={styles.addOns}>
                <Button title="REFRESH"
                    onPress={()=>{
                        goalInputHandler(' ')
                    }}        
                />
                </View> */}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        flex: 1, 
        // flexDirecti on: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
      input: {
        borderColor: 'blue',
        borderWidth: 2,
        width: '80%',
        padding: 5
        // margin: '5%'
    },
    addOns:{
        // flex:2,
        margin: '3%'
    },
    alignButtons:{
        // flex:2
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
    

})

export default GoalList;

