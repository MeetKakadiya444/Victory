import React, { useState } from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList, StyleSheet, } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"

const matches = [
    {
        id: '1',
        Imageurl: require('../assets/awayteam.png'),
        homeTeam: 'V. Greens',
        homeTeamColor: "#04764E",
        Imageurl1: require('../assets/hometeam.png'),
        awayTeam: 'B. Monkeys',
        awayTeamColor: "#173477",
        date: '9 july 2024',
        time: '19.45',
    },


    {
        id: '2',
        Imageurl: require('../assets/awayteam.png'),
        homeTeam: 'V. Greens',
        homeTeamColor: "#04764E",
        Imageurl1: require('../assets/hometeam.png'),
        awayTeam: 'R. Birds',
        awayTeamColor: "#F02626",
        date: '10 july 2024',
        time: '19.45',

    },


    {
        id: '3',
        Imageurl: require('../assets/awayteam.png'),
        homeTeam: 'B. Monkeys ',
        homeTeamColor: "#6E91E0",
        Imageurl1: require('../assets/hometeam.png'),
        awayTeam: 'V. Greens',
        awayTeamColor: "#04764E",
        date: '11 july 2024',
        time: '19.45',

    },


    {
        id: '4',
        Imageurl: require('../assets/awayteam.png'),
        homeTeam: 'B. Monkeys ',
        homeTeamColor: "#F02626",
        Imageurl1: require('../assets/hometeam.png'),
        awayTeam: 'V. Greens',
        awayTeamColor: "#6E91E0",
        date: '12 july 2024',
        time: '19.45',
    },

    {
        id: '5',
        Imageurl: require('../assets/awayteam.png'),
        homeTeam: 'B. Monkeys ',
        homeTeamColor: "#173477",
        Imageurl1: require('../assets/hometeam.png'),
        awayTeam: 'V. Greens',
        awayTeamColor: "#F02626",
        date: '13 july 2024',
        time: '19.45',
    },

    {
        id: '6',
        Imageurl: require('../assets/awayteam.png'),
        homeTeam: 'V. Greens',
        homeTeamColor: "#04764E",
        Imageurl1: require('../assets/hometeam.png'),
        awayTeam: 'B. Monkeys',
        awayTeamColor: "#173477",
        date: '9 july 2024',
        time: '19.45',

    },


    {
        id: '7',
        Imageurl: require('../assets/awayteam.png'),
        homeTeam: 'V. Greens',
        homeTeamColor: "#04764E",
        Imageurl1: require('../assets/hometeam.png'),
        awayTeam: 'R. Birds',
        awayTeamColor: "#F02626",
        date: '10 july 2024',
        time: '19.45',

    },


    {
        id: '8',
        Imageurl: require('../assets/awayteam.png'),
        homeTeam: 'B. Monkeys ',
        homeTeamColor: "#6E91E0",
        Imageurl1: require('../assets/hometeam.png'),
        awayTeam: 'V. Greens',
        awayTeamColor: "#04764E",
        date: '11 july 2024',
        time: '19.45',

    },


];


export default function Upcomingscreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Notificationscreen");
    };
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={handleSkip} style={styles.itemContainer}>
            <View style={{ backgroundColor: "#F3F3F3", width: '95%', height: '85%', borderTopStartRadius: 25, borderTopRightRadius: 25, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item.Imageurl} style={styles.imageStyle} />
                <Text style={[styles.teamName, { color: item.homeTeamColor }]}>{item.homeTeam}
                    <Text style={styles.vsText}>VS  </Text>
                    <Text style={[styles.teamName, { color: item.awayTeamColor }]}>{item.awayTeam}</Text></Text>
                <Image source={item.Imageurl1} style={styles.imageStyle1} />
            </View>

            <View style={{ backgroundColor: "#FFFFFF", height: '50%', width: '95%', borderBottomEndRadius: 25, borderBottomLeftRadius: 25 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <Image source={require('../assets/calendar.png')} style={{ height: 12.6, width: 11.8, marginHorizontal: 5 }}></Image>
                    <Text style={styles.matchDetails}>{item.date}</Text>
                    <Text style={styles.matchDetails}>{item.time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow.png')} style={styles.backArrow} />
                    </TouchableOpacity>
                    <View></View>
                    <Text style={styles.headerText}>Upcoming Schedule</Text>
                </View>
            </View>
            <Text style={{ color: "#000000", fontSize: 20, fontWeight: '500', width: '83%' }}>League</Text>

            <View style={{ height: '100%', width: '100%', flex: 1, marginTop: 35, alignItems: 'center' }}>
                <FlatList

                    Vertical
                    showsVerticalScrollIndicator={false}
                    data={matches}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}

                /></View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#04764E",
        height: '18%',
        width: '100%',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: verticalScale(30),
        flexDirection: 'row',
        alignItems: 'center'
    },


    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },


    backArrow: {
        tintColor: "#FFFFFF",
        width: responsiveWidth(7),
        height: responsiveHeight(2),
        marginLeft: horizontalScale(35),
    },


    headerText: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: '600',
        fontWeight: 'bold',
        marginLeft: horizontalScale(30),
    },


    itemContainer: {
        padding: 10,
        marginVertical: 5,
        flex: 1,
        height: 100,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',

    },


    teamName: {

        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        marginLeft: '25%',
        marginTop: 25
    },


    vsText: {
        fontSize: responsiveFontSize(1),
        fontWeight: 'bold',
        color: "#000",
    },


    matchDetails: {
        fontSize: responsiveFontSize(1.5),
        color: "#5B6897",
        marginHorizontal: 5
    },


    imageStyle: {
        height: 38,
        width: 27,
        position: 'absolute',
        marginLeft: '5%'
    },


    imageStyle1: {
        height: 39,
        width: 33,
        position: 'absolute',
        marginLeft: '85%'
    },

});