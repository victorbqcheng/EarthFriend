import { View, ScrollView, Text, StyleSheet } from "react-native";
import FriendListItem from "../components/friendListItem";

const friendList = [
    {
        "id": 1,
        "name": "Tom",
        "content": "Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.",
        "photo": "https://picsum.photos/id/171/400/400",
        "date": "09/02"
    },
    {
        "id": 2,
        "name": "James",
        "content": "Learn how to reduce your carbon footprint by reducing waste, reusing items, and recycling.",
        "photo": "https://picsum.photos/id/172/400/400",
        "date": "09/01"
    },
    {
        "id": 3,
        "name": "Robert",
        "content": "We will teach you how to make compost, how to recycle properly, and how to reduce your energy consumptio.",
        "photo": "https://picsum.photos/id/173/400/400",
        "date": "09/03"
    },
    {
        "id": 4,
        "name": "Linda",
        "content": "Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.",
        "photo": "https://picsum.photos/id/171/400/400",
        "date": "09/02"
    },
    {
        "id": 5,
        "name": "Lisa",
        "content": "Learn how to reduce your carbon footprint by reducing waste, reusing items, and recycling.",
        "photo": "https://picsum.photos/id/172/400/400",
        "date": "09/01"
    },
    {
        "id": 6,
        "name": "Jason",
        "content": "We will teach you how to make compost, how to recycle properly, and how to reduce your energy consumptio.",
        "photo": "https://picsum.photos/id/173/400/400",
        "date": "09/03"
    },
    {
        "id": 7,
        "name": "Jessica",
        "content": "Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.",
        "photo": "https://picsum.photos/id/171/400/400",
        "date": "09/02"
    },
    {
        "id": 8,
        "name": "Nancy",
        "content": "Learn how to reduce your carbon footprint by reducing waste, reusing items, and recycling.",
        "photo": "https://picsum.photos/id/172/400/400",
        "date": "09/01"
    },
    {
        "id": 9,
        "name": "Christopher",
        "content": "We will teach you how to make compost, how to recycle properly, and how to reduce your energy consumptio.",
        "photo": "https://picsum.photos/id/173/400/400",
        "date": "09/03"
    },
    {
        "id": 10,
        "name": "Charles",
        "content": "Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.",
        "photo": "https://picsum.photos/id/171/400/400",
        "date": "09/02"
    },
    {
        "id": 11,
        "name": "Stephen",
        "content": "Learn how to reduce your carbon footprint by reducing waste, reusing items, and recycling.",
        "photo": "https://picsum.photos/id/172/400/400",
        "date": "09/01"
    },
    {
        "id": 12,
        "name": "Patricia",
        "content": "We will teach you how to make compost, how to recycle properly, and how to reduce your energy consumptio.",
        "photo": "https://picsum.photos/id/173/400/400",
        "date": "09/03"
    }
];

export default function Friends() {
    return (
        <ScrollView>
            {
                friendList.map((friend)=>{
                    return (
                        <FriendListItem key={friend.id} data={friend}></FriendListItem>
                    );
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    list: {
        width: '100%',
    },
});

