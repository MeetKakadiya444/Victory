import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"

const method = [
    {
        id: '1',
        cardnumber: '5454 3535 1111 0000',
        cardname: 'Xyz Card',
        cardprice: '$ 12.000',
        backgroundColor: "#04764E"
    },
    {
        id: '2',
        cardnumber: '1111 2222 5555 7878',
        cardname: 'Abc Card',
        cardprice: '$ 224.8',
        backgroundColor: "#535353"
    },


];
export default function Cardscreen({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.cardInfo}>
                <Text style={styles.cardnumber}>{item.cardnumber}</Text>

            </View>
            <View style={styles.carddetail}>
                <Text style={styles.cardname}>{item.cardname}</Text>
                <Text style={styles.cardPrice}>{item.cardprice}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={{ color: "#FFFFFF", flex: 1, }}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow.png')} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Card Details</Text>
                </View>
            </View>

            <Text style={styles.Text}>Cards</Text>
            <View style={styles.flatListContainer1}>
                <FlatList
                    horizontal
                    showsVerticalScrollIndicator={false}
                    data={method}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    itemContainer: {
        marginTop:25,
        marginLeft: 30,
        borderRadius: 18,
        width: 250,
        height: 100,
        paddingHorizontal: 10,
        flexDirection: 'column',

    },
    cardInfo: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    cardnumber: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: '700',
    },
    cardPrice: {
        color: "#AEFAFF",
        fontSize: 14,
        fontWeight: '400',
    },
    cardname: {
        fontSize: 12,
        color: "#AEFAFF",
        fontWeight: '400',
        marginHorizontal: 20,

    },


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
        fontWeight: 'bold',
        marginLeft: horizontalScale(60),
    },


    Text: {
        fontSize: 20,
        fontWeight: '500',
        color: "#000000",
        marginLeft: 30,
    },

    
    carddetail: {
        flexDirection: 'row'
    }


});