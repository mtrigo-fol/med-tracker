import { StyleSheet, View, Text, Pressable } from "react-native";

const style = StyleSheet.create({
    listItem: {
        
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 2,
        margin: 8,
        padding: 4,
    },
    text: {
        fontSize: 24
    }
});

const ListItem = props => {
    return <View style={style.listItem}>
            <Pressable onPress={props.onPress.bind(this, props.item.id)}>
                <Text style={style.text}>{props.item.text}</Text>
            </Pressable>
        </View>;
}

export default ListItem;