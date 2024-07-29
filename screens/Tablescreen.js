import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { horizontalScale, verticalScale } from "../Utils";

export default function Tablescreen({ navigation }) {
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
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                <Text style={{ color: "#04764E", fontSize: 18, fontWeight: '500', marginRight: 30, marginLeft: 20 }}>League</Text>
                <Text style={{ color: "#A5A5A5", fontSize: 18, fontWeight: '400', marginRight: 30 }}>Champions League</Text>
                <Text style={{ color: "#A5A5A5", fontSize: 18, fontWeight: '400' }}>King Cup</Text>
            </View>
            <Text style={{ backgroundColor: "#E6E6E6", height: 2, width: '100%', marginTop: 15 }}></Text>
            

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
        bottom:'15%',
        fontWeight: '600'
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
        width: 230    ,
        paddingHorizontal: 15,
    },
    searchIcon: {
        height: 26,
        width: 26,
        marginRight: 15,
    },
});




 