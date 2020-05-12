import  React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const GoalItem= props => 
{
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this,props.id )}>
        <View style={styles.listItem} >
            <Text >{props.title } </Text>
        </View>
        </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    listItem: {
        // padding: 10,
        marginVertical: 10,
        // color: 'white',
        backgroundColor: 'red',
        borderColor: 'blue',
        borderWidth: 3,
        width: '100%'
      }
})

export default GoalItem;