import  React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity} from 'react-native';


function GoalItem(props) {
    return(
    <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
    <View style={styles.listitem}>
        <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    listitem: {
        padding:10,
        marginVertical: 10,
        backgroundColor: 'skyblue',
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default GoalItem;