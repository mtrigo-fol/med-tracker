import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, FlatList } from "react-native";
import ListItem from "./components/contact";

const style = StyleSheet.create({
    appView: {
        flex: 1,
        flexDirection: "column"
    },
    list: {
        flex: 1,
        paddingTop: 20
    },
    textInput: {
        fontSize: 24, 
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 2,
        margin: 8,
        padding: 4,
    },
    button: {
        margin: 8,
        padding: 4,
    }
});

const App = () => {

    // Data
    let [list, updateList] = useState([]);
    let [GUID, updateGUID] = useState(1);
    let [textInputText, updateTextInputText] = useState('')

    let addAnotherItem = () => {
        if (textInputText === '') return;
        let newItem = { text: textInputText, id: GUID};
        console.log(`adding: { text: ${newItem.textInputText}, id: ${newItem.id} }`);
        updatedList = [...list, newItem];
        updateGUID(GUID + 1);
        updateList(updatedList);
        updateTextInputText('');
    }

    let deleteItem = id => {
        console.log(`deleting item id: ${id}`);
        listWithoutItem = list.filter(item => item.id !== id);
        updateList(listWithoutItem);
    }

    // UI
    let renderListItem = listItemMetaData => {
        let { item } = listItemMetaData;
        return <ListItem item={item} onPress={deleteItem}></ListItem>
    }

    return <View style={style.appView}>
        <View style={style.list}>
            <Text style={ { fontSize: 40, textAlign: 'center' }}>Med-Tracker</Text>
            <FlatList data={list} renderItem={renderListItem}></FlatList>
        </View>
        <View>
            <TextInput style={style.textInput} placeholder="New Medicine Track" value={textInputText} onChangeText={text => updateTextInputText(text)}></TextInput>
        </View>
        <View style={style.button}>
            <Button title="Add Item" onPress={addAnotherItem}></Button>
        </View>
        <View style={style.button}>
            <Button title="Clear List" onPress={() => updateList([])}></Button>
        </View>
    </View>
};

export default App;