import React, { useState } from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { horizontalScale, verticalScale } from "../Utils";

const Goalkeepers = [
    {
        id: '1',
        number: '1',
        name: 'Mahmoud',
        surname: 'Gerald',
        imageurl: require('../assets/topgoal1.png')
    },
    {
        id: '2',
        number: '2',
        name: 'Albert',
        surname: 'Kevin',
        imageurl: require('../assets/playerfive.png')
    },
    {
        id: '3',
        number: '3',
        name: 'John',
        surname: 'Doe',
        imageurl: require('../assets/topgoal3.png')
    },
];

const Defenders = [
    {
        id: '1',
        number: '1',
        name: 'Michael',
        surname: 'Scott',
        imageurl: require('../assets/playerone.png')
    },
    {
        id: '2',
        number: '2',
        name: 'Jim',
        surname: 'Halpert',
        imageurl: require('../assets/playertwo.png')
    },
    {
        id: '3',
        number: '3',
        name: 'Pam',
        surname: 'Beesly',
        imageurl: require('../assets/playerthree.png')
    },
    {
        id: '4',
        number: '1',
        name: 'Dwight',
        surname: 'Schrute',
        imageurl: require('../assets/playerfour.png')
    },
    {
        id: '5',
        number: '2',
        name: 'Andy',
        surname: 'Bernard',
        imageurl: require('../assets/playerfive.png')
    },
    {
        id: '6',
        number: '3',
        name: 'Stanley',
        surname: 'Hudson',
        imageurl: require('../assets/topgoal4.png')
    },
    {
        id: '7',
        number: '1',
        name: 'Phyllis',
        surname: 'Vance',
        imageurl: require('../assets/topgoal6.png')
    },
    {
        id: '8',
        number: '2',
        name: 'Oscar',
        surname: 'Martinez',
        imageurl: require('../assets/topgoal3.png')
    },
    {
        id: '9',
        number: '3',
        name: 'Creed',
        surname: 'Bratton',
        imageurl: require('../assets/topgoal1.png')
    },
];

const Midfielders = [
    {
        id: '1',
        number: '1',
        name: 'Angela',
        surname: 'Martin',
        imageurl: require('../assets/topgoal3.png')
    },
    {
        id: '2',
        number: '2',
        name: 'Kevin',
        surname: 'Malone',
        imageurl: require('../assets/topgoal2.png')
    },
    {
        id: '3',
        number: '3',
        name: 'Toby',
        surname: 'Flenderson',
        imageurl: require('../assets/playerfour.png')
    },
];

export default function Topgoalscreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Teamscreen");
    };

    const [selected, setSelected] = useState('Men');
    const handlePress = (text) => {
        setSelected(text);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={handleSkip} style={styles.itemContainer}>
            <ImageBackground source={item.imageurl} style={styles.imageBackground} imageStyle={styles.imageBackgroundStyle}>
                <View style={styles.overlay}>
                    <Text style={styles.numberText}>{item.number}</Text>
                    <View style={styles.line} />
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.nameText}>{item.surname}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ color: "#FFFFFF", flex: 1, alignItems: 'center' }}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow.png')} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Top Goalscorers</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                <TouchableOpacity onPress={() => handlePress('Men')}>
                    <Text style={[styles.tabText, selected === 'Men' && styles.selectedText]}>Men</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Women')}>
                    <Text style={[styles.tabText, selected === 'Women' && styles.selectedText]}>Women</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Under-23s')}>
                    <Text style={[styles.tabText, selected === 'Under-23s' && styles.selectedText]}>Under-23s</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Under')}>
                    <Text style={[styles.tabText, selected === 'Under' && styles.selectedText]}>Under</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ backgroundColor: "#E6E6E6", height: 2, width: '100%', marginTop: 15 }}></Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 18, fontWeight: '500', color: "#000000", marginTop: 10 }}>Goalkeepers</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        scrollEnabled={false}
                        data={Goalkeepers}
                        renderItem={renderItem}
                        numColumns={3}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Text style={{ fontSize: 18, fontWeight: '500', color: "#000000" }}>Defenders</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        data={Defenders}
                        renderItem={renderItem}
                        numColumns={3}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Text style={{ fontSize: 18, fontWeight: '500', color: "#000000" }}>Midfielders</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        data={Midfielders}
                        renderItem={renderItem}
                        numColumns={3}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 5,
        borderRadius: 13,
        width: 100,
        height: 150,
        marginHorizontal: 5,
        overflow: 'hidden'
    },
    flatListContainer: {
        alignItems: 'center',
        marginVertical: 10,
        height: 'auto'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    imageBackgroundStyle: {
        borderRadius: 13,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        padding: 5,
    },
    numberText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    line: {
        height: 2,
        backgroundColor: 'white',
        marginVertical: 5,
    },
    nameText: {
        color: 'white',
        fontSize: 14,
    },
    header: {
        backgroundColor: "#04764E",
        height: '18%',
        width: '100%',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: verticalScale(30),
        justifyContent: 'center'
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
        fontWeight: 'bold',
        marginLeft: horizontalScale(80)
    },
    tabText: {
        marginLeft: horizontalScale(12),
        fontSize: responsiveFontSize(2),
        color: "#000000",
    },
    selectedText: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: "#04764E",
        textDecorationLine: 'underline',
    }
});