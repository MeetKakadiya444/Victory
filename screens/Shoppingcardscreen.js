import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"

const clothes = [
    {
        id: '1',
        imageurl: require('../assets/bag.png'),
        productdetail: 'Duffle\nBag',
        productprice: '$39.90'
    },
    {
        id: '2',
        imageurl: require('../assets/womencloth.png'),
        productdetail: 'Red\nSweatshirt',
        productprice: '$89.90'
    },
    {
        id: '3',
        imageurl: require('../assets/mancloth.png'),
        productdetail: 'Blue\nRaincoat',
        productprice: '$49.90'
    },
    {
        id: '4',
        imageurl: require('../assets/bag.png'),
        productdetail: 'Duffle\nBag',
        productprice: '$39.90'
    },
    {
        id: '5',
        imageurl: require('../assets/womencloth.png'),
        productdetail: 'Red\nSweatshirt',
        productprice: '$89.90'
    },
    {
        id: '6',
        imageurl: require('../assets/mancloth.png'),
        productdetail: 'blue\nSweatshirt',
        productprice: '$49.90'
    },
];

export default function Shoppingcardscreen({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer1}>
            <View style={styles.imageContainer2}>
                <Image source={item.imageurl} style={styles.imageStyle1} />
                <View style={styles.productInfo}>
                    <Text style={styles.productDetail1}>{item.productdetail}</Text>
                    <Text style={styles.productPrice1}>{item.productprice}</Text>
                </View>
                <TouchableOpacity style={styles.TouchableOpacity1}>
                    <Image source={require('../assets/cross.png')} style={styles.crossimage} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ color: "#FFFFFF", flex: 1, alignItems: 'center' }}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow.png')} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Shopping Card</Text>
                </View>
            </View>
            <View style={styles.flatListContainer1}>
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    data={clothes}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <TouchableOpacity style={styles.TouchableOpacity2}>
                <Text style={styles.Text}>NEXT</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    itemContainer1: {
        backgroundColor: "#FFFFFF",
        marginVertical: 13,
        marginHorizontal: 10,
        borderRadius: 18,
        width: 310,
        height: 130,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },


    flatListContainer1: {
        flex: 1,
    },


    imageContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
    },


    imageStyle1: {
        height: 100,
        width: 105,
        borderRadius: 10,
        marginLeft: -20
    },


    productInfo: {
        flexDirection: 'column',
        marginLeft: 20,
        flex: 1,
    },

    
    productDetail1: {
        color: "#000000",
        fontSize: 19,
        fontWeight: '400',
    },


    productPrice1: {
        color: "#000000",
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10,
    },


    crossimage: {
        height: 16,
        width: 16,
    },


    TouchableOpacity1: {
        height: 40,
        width: 40,
        backgroundColor: "#FC6767",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },


    TouchableOpacity2: {
        backgroundColor: "#04764E",
        height: 60,
        width: 310,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 52,
        marginBottom: verticalScale(30),
        marginTop: 10
    },


    Text: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: '600',
    },


    header: {
        backgroundColor: "#04764E",
        height: '18%',
        width: '100%',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: verticalScale(30),
        flexDirection: 'row',
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
        marginLeft: horizontalScale(55),
    },


});