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
        time: '10 minutes ago',
        viewers: '25.2k',
        likes: '936',
    },

    {
        id: '2',
        imageUrl: require('../assets/playerone.png'),
        imageUrl2: require('../assets/fans.png'),
        name: 'Artur Beckham',
        time: '5 minutes ago',
        viewers: '20.2k',
        likes: '620',
    },

    {
        id: '3',
        imageUrl: require('../assets/playerone.png'),
        imageUrl2: require('../assets/fans.png'),
        name: 'Artur Beckham',
        time: '25 minutes ago',
        viewers: '15k',
        likes: '850',
    },

    {
        id: '4',
        imageUrl: require('../assets/playerone.png'),
        imageUrl2: require('../assets/fans.png'),
        name: 'Artur Beckham',
        time: '40 minutes ago',
        viewers: '27.5k',
        likes: '550',
    },

    {
        id: '5',
        imageUrl: require('../assets/playerone.png'),
        imageUrl2: require('../assets/fans.png'),
        name: 'Artur Beckham',
        time: '55 minutes ago',
        viewers: '30.5k',
        likes: '780',
    },
];

export default function Victoryfanscreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Storescreen");
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image source={item.imageUrl} style={styles.playerImage} />
            </View>
            <Text style={styles.playerName}>{item.name}</Text>
        </TouchableOpacity>
    );


    const renderItem2 = ({ item }) => (
        <TouchableOpacity onPress={handleSkip} style={styles.containerViews}>
            <View style={styles.imageContainer2}>
                <Image source={item.imageUrl2} style={styles.playerImage2} />
            </View>
            <View style={styles.imageContainer1}>
                <Image source={item.imageUrl} style={styles.playerImage1} />


                <View style={styles.datailcontainer}>
                    <Text style={styles.fansdetail}>{item.name}</Text>
                    <Text style={styles.fansdetail1}>{item.time}</Text>
                </View>


                <View style={styles.viewerscontainer}>
                    <Image source={require('../assets/eye.png')} style={{ height: 20, width: 40, marginRight: -2 }} />
                    <Text style={styles.fansdetail2}>{item.viewers}</Text>
                </View>


                <View style={styles.likescontainer}>
                    <Image source={require('../assets/like.png')} style={{ height: 20, width: 30, marginRight: -2 }} />
                    <Text style={styles.fansdetail3}>{item.likes}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <View style={{ backgroundColor: "#000000", height: '35%', width: '100%', borderBottomEndRadius: 30, borderBottomLeftRadius: 30, alignItems: 'center', flexDirection: 'column', alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow.png')}
                            style={{ tintColor: "#FFFFFF", width: responsiveWidth(7), height: responsiveHeight(2), marginTop: verticalScale(50), marginLeft: horizontalScale(35) }} />
                    </TouchableOpacity>

                    <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', marginTop: verticalScale(45), marginLeft: horizontalScale(60) }}>Victory Fans</Text>
                </View>

                <View style={styles.flatListContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={players}
                        renderItem={renderItem} />
                </View>


            </View>

            <View style={styles.flatListContainer2} >

                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id} />


                     
            </View>

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
        alignItems: 'flex-start',
        width: 68,
        height: 68,
        borderRadius: 40,

    },

    flatListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 35
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
        marginTop: 15,
        marginLeft: 25
    },
    imageContainer1: {
        alignItems: 'center',
        flexDirection: 'row'
    },

    imageContainer2: {
        backgroundColor: "#FFFFFF"
    },

    containerViews: {
        backgroundColor: "#FFFFFF",
        alignItems: 'center'

    },
    playerImage2: {
        alignItems: 'center',
        height: 183,
        width: 335,
        marginTop: 50,
        borderRadius: 20
    },
    flatListContainer2: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    fansdetail: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#171F24'
    },
    fansdetail1: {
        fontSize: 12,

    },
    datailcontainer: {
        flex: 1,
        marginLeft: 15,
        marginTop: 10
    },
    viewerscontainer: {
        flexDirection: 'row',
        marginTop: 20,


    },
    likescontainer: {
        flexDirection: 'row',
        marginRight: 25,
        marginTop: 20
    },
    fansdetail2: {
        marginRight: 10
    }

});



 