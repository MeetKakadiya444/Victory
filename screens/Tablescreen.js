import React, { useState } from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, TextInput, FlatList } from "react-native";
import { horizontalScale, verticalScale } from "../Utils";

const matches = [
    {
        id: '1',
        pos: 1,
        View1: "#14C57B",
        teamname: 'VICTORYY GREENS',
        w: 34,
        d: 25,
        l: 47,
        pts:80
    },


    {
        id: '2',
        pos: 2,
        View1: "#8EB8F8",
        teamname: 'RED DEVILS',
        w: 34,
        d: 20,
        l: 30,
        pts:68
    },


    {
        id: '3',
        pos: 3,
        View1: "#8EB8F8",
        teamname: 'BLUE MONKEYS',
        w: 34,
        d: 20,
        l: 30,
        pts:68
    },


    {
        id: '4',
        pos: 4,
        View1: "#8EB8F8",
        teamname: 'CRAZY EAGLE',
        w: 34,
        d: 19,
        l: 29,
        pts:67
    },

    {
        id: '5',
        pos: 5,
        View1: "#FAC16B",
        teamname: 'ROCKY BIRDS',
        w: 34,
        d: 19,
        l: 29,
        pts:67
    },

    {
        id: '6',
        pos: 6,
        View1: "#FAC16B",
        teamname: 'BLUE LIGHTNING',
        w: 34,
        d: 19,
        l: 22,
        pts:63
    },


    {
        id: '7',
        pos: 7,
        View1: "#29E7CD",
        teamname: 'WHITE CLOUDS',
        w: 34,
        d: 17,
        l: 22,
        pts:61
    },


    {
        id: '8',
        pos: 8,
        View1: "#29E7CD",
        teamname: 'YELLOW SUBMARINE',
        w: 34,
        d: 17,
        l: 11,
        pts:58
    },


    {
        id: '9',
        pos: 9,
        View1: "#29E7CD",
        teamname: 'SHARKS',
        w: 34,
        d: 16,
        l: 22,
        pts:56
    },

    {
        id: '10',
        pos: 10,
        View1: "#29E7CD",
        teamname: 'KINGS TEAM',
        w: 34,
        d: 16,
        l: 16,
        pts:54
    },
    {
        id: '11',
        pos: 11,
        View1: "#29E7CD",
        teamname: 'FAST COWBOYS',
        w: 34,
        d: 15,
        l: 3,
        pts:52
    },


    {
        id: '12',
        pos: 12,
        View1: "#29E7CD",
        teamname: 'GREEN LENTILS',
        w: 34,
        d: 14,
        l: 9,
        pts:49
    },


    {
        id: '13',
        pos: 13,
        View1: "#ED0423",
        teamname: 'BLACK EAGLES',
        w: 34,
        d: 14,
        l: -2,
        pts:47
    },


    {
        id: '14',
        pos: 14,
        View1: "#ED0423",
        teamname: 'RED CLOVE',
        w: 34,
        d: 13,
        l: 25,
        pts:42

    },

    {
        id: '15',
        pos: 15,
        View1: "#ED0423",
        teamname: 'WILD',
        w: 34,
        d: 0,
        l: 0,
        pts:24
    },

    {
        id: '16',
        pos: 16,
        View1: "#ED0423",
        teamname: 'SNAKES',
        w: 34,
        d: 0,
        l: 0,
        pts:24
    },



];

export default function Tablescreen({ navigation }) {
    const [selected, setSelected] = useState('League');

    const handlePress = (text) => {
        setSelected(text);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={[styles.line, { backgroundColor: item.View1, }]} >
            </View>
            <View >
                <Text style={styles.pos}>{item.pos}</Text>
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 25, }}>
                <Text style={styles.teamname}>{item.teamname}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', marginLeft: 145 }}>
                <Text style={styles.w}>{item.w}</Text>
            </View>
            <View style={{ marginLeft: 17, width: 15 }}>
                <Text style={styles.d}>{item.d}</Text>
            </View>
            <View style={{ marginLeft: 12 }}>
                <Text style={styles.l}>{item.l}</Text>
            </View>
            <View style={styles.ptsview}>
            <View style={{ marginLeft: 12 }}>
                <Text style={styles.pts}>{item.pts}</Text>
            </View>
            </View>

        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backArrowContainer} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/arrow.png')} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Table</Text>

                <View style={styles.searchContainer}>
                    <TextInput placeholder="  Search teams" style={styles.searchInput} />
                    <Image source={require('../assets/search.png')} style={styles.searchIcon} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, marginLeft: '26%' }}>
                <TouchableOpacity onPress={() => handlePress('League')}>
                    <Text style={[styles.tabText, selected === 'League' && styles.selectedText]}>League</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Champions League')}>
                    <Text style={[styles.tabText, selected === 'Champions League' && styles.selectedText]}>Champions League</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('King Cup')}>
                    <Text style={[styles.tabText, selected === 'King Cup' && styles.selectedText]}>King Cup</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ backgroundColor: "#E6E6E6", height: 2, width: '100%', marginTop: 15 }}></Text>
            <View style={styles.imageContainer}>
                <View style={styles.imageview}>
                    <Image source={require('../assets/star.png')} style={styles.starimage}></Image>
                </View>
                <Text style={styles.imagetext}>Stars{"\n"}League</Text>
            </View>
            <View style={styles.infoview}>
                <View style={styles.leftInfoContainer}>
                    <Text style={styles.infotext1}>POS</Text>
                    <Text style={styles.infotext2}>CLUB </Text>
                </View>
                <View style={styles.rightInfoContainer}>
                    <Text style={styles.infotext3}>W</Text>
                    <Text style={styles.infotext4}>D</Text>
                    <Text style={styles.infotext5}>L</Text>
                    <Text style={styles.infotext6}>PTS</Text>
                </View>
            </View>

            <View style={{ height: '100%', width: '100%', flex: 1, alignItems: 'center' }}>
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
        backgroundColor: "#000000",
        height: 216,
        width: '100%',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },


    backArrowContainer: {
        position: 'absolute',
        left: horizontalScale(30),
        top: '30%',
    },


    backArrow: {
        tintColor: "#FFFFFF",
        width: responsiveWidth(7),
        height: responsiveHeight(2),
    },


    headerText: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: 'bold',
        bottom: '15%',
        fontWeight: '600',
    },


    searchContainer: {
        position: 'absolute',
        bottom: 25,
        backgroundColor: "#FFFFFF",
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#D7D7D7",
        borderWidth: 1,
        borderRadius: 61,
        paddingHorizontal: 10,
        marginRight: horizontalScale(15),
    },


    searchInput: {
        height: 60,
        width: 230,
        paddingHorizontal: 15,
    },


    searchIcon: {
        height: 26,
        width: 26,
        marginRight: 15,
    },


    tabText: {
        color: "#A5A5A5",
        fontSize: 18,
        fontWeight: '400',
        marginRight: 30,
    },


    selectedText: {
        color: "#04764E",
        fontWeight: '500',
    },

    
    imageContainer: {
        height: 95,
        width: 375,
        backgroundColor: "#F3F3F3",
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },


    imageview: {
        height: responsiveHeight(9),
        width: responsiveWidth(18),
        backgroundColor: "#00FF87",
        marginHorizontal: '11%',
        alignItems: 'center',
        justifyContent: 'center'
    },


    starimage: {
        height: responsiveHeight(6.2),
        width: responsiveWidth(12.5)
    },


    imagetext: {
        color: "#000000",
        fontSize: 21,
        fontWeight: '700',
        letterSpacing: 0.2
    },


    infoview: {

        height: "5%",
        width: "100%",
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '10%',
    },


    leftInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },


    rightInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },


    infotext1: {
        color: "#8EA2AB",
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 0.45,
        marginRight: 20, // Add margin if needed
    },


    infotext2: {
        color: "#8EA2AB",
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 0.45,
    },


    infotext3: {
        color: "#8EA2AB",
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 0.45,
        marginRight: 20, // Add margin if needed
    },


    infotext4: {
        color: "#8EA2AB",
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 0.45,
        marginRight: 20, // Add margin if needed
    },


    infotext5: {
        color: "#8EA2AB",
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 0.45,
        marginRight: 20, // Add margin if needed
    },

    
    infotext6: {
        color: "#8EA2AB",
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 0.45,
    },


    itemContainer: {
        backgroundColor: "#F3F3F3",
        marginVertical: 1,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        width: 275,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '13%'
    },


    line: {
        height: 40,
        width: 4,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },


    pos: {
        color: "#000000",
        marginLeft: 12,
        fontSize: 10,
        fontWeight: '600',
        width: 15,
    },


    teamname: {
        fontSize: 10,
        position: 'absolute',
        color: "#000000",
        fontWeight: '600',
    },


    w: {
        fontSize: 10,
        color: "#000000",
        fontWeight: '600',
    },


    d: {
        fontSize: 10,
        color: "#000000",
        fontWeight: '600',
    },


    l: {
        fontSize: 10,
        color: "#000000",
        fontWeight: '600'
    },


    ptsview: {
        height: 40,
        width: 40,
        backgroundColor: "#F0EDED",
        marginLeft: 277,
        position: 'absolute',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        justifyContent:'center',      
    },


    pts:{
        color:"#000000",
        fontSize:10,
        fontWeight:'600',    
    }

});
