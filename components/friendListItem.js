import { StyleSheet, TouchableOpacity, View, Dimensions, Image, Text } from "react-native";


const FriendListItem = ({data, onPress})=>{
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: data.photo }} style={styles.photo} />
                <View style={{display:'flex', justifyContent:'space-between', width: '65%', height:'60%'}}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.content} numberOfLines={1}>{data.content}</Text>
                </View>
                <View style={{height:'60%'}}>
                    <Text style={{alignSelf:'flex-start', fontSize:12}}>{data.date}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width:'100%',
        height: Dimensions.get('window').width * 0.218,
        flexDirection:'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        alignItems:'center',
        borderColor: '#ccc',
      },
      photo:{
        width: Dimensions.get('window').width * 0.178,
        height: Dimensions.get('window').width * 0.178,
        margin: Dimensions.get('window').width * 0.01,
        borderRadius:100
      },
      name:{
        fontWeight:'bold'
      },
      content:{
        // backgroundColor:'#eeffee'
        marginBottom:5,
        color:'#777777'
      }
});

export default FriendListItem;