import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const Chat = () => {
    return (
        <View>
            <ScrollView style={styles.content}>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
                <Text>Chat</Text>
            </ScrollView>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TextInput style={styles.input}></TextInput>
                <TouchableOpacity>
                    <Image source={require('../assets/send.png')} style={{width:30, height:30}}></Image>
                </TouchableOpacity>
            </View>
            
        </View>

    );
}

export default Chat;

const styles = StyleSheet.create({
    content:{
        height:'90%'
    },
    input: {
      height: 40,
      width:'80%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
});

