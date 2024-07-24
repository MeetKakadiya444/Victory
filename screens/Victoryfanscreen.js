import React, { useState } from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, ScrollView, TextInput, FlatList, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"

const players = [
    { id: '1', imageUrl: require('../assets/playerone.png'), name: 'BALE' },
    { id: '2', imageUrl: require('../assets/playertwo.png'), name: 'ARTUR' },
    { id: '3', imageUrl: require('../assets/playerthree.png'), name: 'ARCHILL' },
    { id: '4', imageUrl: require('../assets/playerfour.png'), name: 'ARTURO' },
    { id: '5', imageUrl: require('../assets/playerfive.png'), name: 'DAVID' },
    { id: '6', imageUrl: require('../assets/playerone.png'), name: 'EMILY' },
    { id: '7', imageUrl: require('../assets/playertwo.png'), name: 'ALEX' },
    { id: '8', imageUrl: require('../assets/playerthree.png'), name: 'JOHN' },
    { id: '9', imageUrl: require('../assets/playerfour.png'), name: 'MICHAEL' },
];

const data = [
    {
        id: '1',
        imageUrl: require('../assets/playerone.png'),
        imageUrl2: require('../assets/fans.png'),
        name: 'Artur Beckham',
        time: '1 minutes ago',
        viewers: '25.2k',
        likes: '936',
    },

    {
        id: '2',
        imageUrl: require('../assets/playerone.png'),
        imageUrl2: require('../assets/fans.png'),
        name: 'Artur Beckham',
        time: '1 minutes ago',
        viewers: '25.2k',
        likes: '936',
    },

    {
        id: '3',
        imageUrl: require('../assets/playerone.png'),
        imageUrl2: require('../assets/fans.png'),
        name: 'Artur Beckham',
        time: '1 minutes ago',
        viewers: '25.2k',
        likes: '936',
    },

    {
        id: '4',
        imageUrl: require('../assets/playerone.png'),
        imageUrl2: require('../assets/fans.png'),
        name: 'Artur Beckham',
        time: '1 minutes ago',
        viewers: '25.2k',
        likes: '936',
    },

    {
        id: '5',
        imageUrl: require('../assets/playerone.png'),
        imageUrl2: require('../assets/fans.png'),
        name: 'Artur Beckham',
        time: '1 minutes ago',
        viewers: '25.2k',
        likes: '936',
    },
];

export default function Victoryfanscreen({ navigation }) {

    const renderItem = ({ item }) => (

        <TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image source={item.imageUrl} style={styles.playerImage} />
            </View>
            <Text style={styles.playerName}>{item.name}</Text>
        </TouchableOpacity>
    );

    // const renderItem2 = ({ item }) => (

    //     <TouchableOpacity>
    //         <View style={{ flexDirection: "column" }}>
    //             <Image source={item.imageUrl2} style={styles.playerImage2} />
    //             <Image source={item.imageUrl} style={styles.playerImage1} />
    //         </View>
    //     </TouchableOpacity>
    // );

    const renderItem2 = ({ item }) => (
        <TouchableOpacity style={styles.containerViews}>
            <View style={styles.columnContainer}>
                <Image source={item.imageUrl2} style={styles.playerImage2} />
                <Image source={item.imageUrl} style={styles.playerImage1} />
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <View style={{ backgroundColor: "#000000", height: '37%', width: '100%', borderBottomEndRadius: 30, borderBottomLeftRadius: 30, alignItems: 'center', flexDirection: 'row', alignItems: 'flex-start' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/arrow.png')}
                        style={{ tintColor: "#FFFFFF", width: responsiveWidth(7), height: responsiveHeight(2), marginHorizontal: 40, marginVertical: 70 }} />
                </TouchableOpacity>
                <Text style={{ color: "#FFFFFF", fontSize: 22, marginHorizontal: 15, marginVertical: 60, fontWeight: 'bold' }}>Victory Fans</Text>

                <View style={styles.flatListContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={players}
                        renderItem={renderItem} />
                </View>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    Vertical
                    showsHorizontalScrollIndicator={false}
                    data={players}
                    renderItem={renderItem} />
            </View>

            {/* <View  style={styles.flatListContainer}>

                <FlatList style={{ backgroundColor: "red" }}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id}/>
            </View> */}

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    imageContainer: {
        alignItems: 'center',
        padding: 6.5,
        borderWidth: 2,
        borderColor: "#2CB081",
        borderRadius: 100,
        marginHorizontal: 10,
        height: 85,
        width: 85,
    },
    playerImage: {
        alignItems: 'center',
        width: 68,
        height: 68,
        borderRadius: 40,

    },

    flatListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    playerName: {
        marginTop: 10,
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '450'
    },
    playerImage1: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    playerImage2: {
        height: '70%',
        width: '100%',
        alignItems: 'center'
    },
    containerViews: {
        backgroundColor: "#FFFFFF"
    },
    columnContainer: {
        flexDirection: "column",
        alignItems: 'center',
    }


});




