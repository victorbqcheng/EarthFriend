import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";


const NewsDetail = () => {
    const route = useRoute();
    const { data } = route.params;
    console.log(data);

    function random() {
        let r = Math.random() * 10000;
        r = Math.floor(r);
        console.log('random:' + r);
        return r;
    }

    return (
        <View style={styles.container}>
            <Text id="title" style={styles.title}>
                {data.title}
            </Text>
            <View
                id="author"
                style={{ margin: 10, display: 'flex', flexDirection: 'row' }}
            >
                <Image
                    source={{ uri: `https://source.unsplash.com/random?${random()}` }}
                    style={{ width: 70, height: 70, borderRadius: 100 }}
                />
                <View style={{ marginLeft: 10 }}>
                    <Text id="author-name" style={{ fontWeight: 'bold' }}>
                        {data.author}
                    </Text>
                    <Text id="date">{data.date}</Text>
                </View>
            </View>
            <View id="news-content" style={{ display: 'flex', alignItems: 'center' }}>
                <Image source={{ uri: data.imageUrl }} style={styles.image} />
                <Text style={{ margin: 10 }}>{data.content}</Text>
            </View>
        </View>
    );
}

export default NewsDetail;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        padding: 10,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    image: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 0.9,
    },
    message: {
        fontSize: 20,
        color: 'black',
    },
    button: {
        backgroundColor: '#aaaaff',
        width: 50,
        borderRadius: 3,
        textAlign: 'center',
        alignSelf: 'flex-end',
        margin: 5,
        color: '#333333',
    },
});
