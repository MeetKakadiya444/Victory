import React, { useState } from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, ScrollView, TextInput, FlatList, StyleSheet, ImageBackground } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"

const shoes = [
    {
        id: '1',
        imageurl: require('../assets/shoes1.png'),
        productname: 'Greens Air\nSmart 54',
        productdetail: 'Greens Sneakers',
        productprice: '$39.90'
    },

    {
        id: '2',
        imageurl: require('../assets/shoes2.png'),
        productname: 'Greens Air\nSmart 683',
        productdetail: 'Greens Sneakers',
        productprice: '$39.90'
    },

    {
        id: '3',
        imageurl: require('../assets/shoes1.png'),
        productname: 'Greens Air\nSmart 54',
        productdetail: 'Greens Sneakers',
        productprice: '$39.90'
    },

    {
        id: '4',
        imageurl: require('../assets/shoes2.png'),
        productname: 'Greens Air\nSmart 683',
        productdetail: 'Greens Sneakers',
        productprice: '$39.90'
    },

    {
        id: '5',
        imageurl: require('../assets/shoes1.png'),
        productname: 'Greens Air\nSmart 54',
        productdetail: 'Greens Sneakers',
        productprice: '$39.90'
    },

    {
        id: '6',
        imageurl: require('../assets/shoes2.png'),
        productname: 'Greens Air\nSmart 683',
        productdetail: 'Greens Sneakers',
        productprice: '$39.90'
    },

];

const clothes = [
    {
        id: '1',
        imageurl: require('../assets/bag.png'),
        productdetail: 'Duffel Bag - New',
        productprice: '$39.90'
    },
    {
        id: '2',
        imageurl: require('../assets/womencloth.png'),
        productdetail: 'Sweatshirt - New',
        productprice: '$89.90'
    },
    {
        id: '3',
        imageurl: require('../assets/mancloth.png'),
        productdetail: 'Sweatshirt - New',
        productprice: '$49.90'
    },
    {
        id: '4',
        imageurl: require('../assets/bag.png'),
        productdetail: 'Duffel Bag - New',
        productprice: '$39.90'
    },
    {
        id: '5',
        imageurl: require('../assets/womencloth.png'),
        productdetail: 'Sweatshirt - New',
        productprice: '$89.90'
    },
    {
        id: '6',
        imageurl: require('../assets/mancloth.png'),
        productdetail: 'Sweatshirt - New',
        productprice: '$49.90'
    },
]
export default function Storescreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Shoppingcardscreen");
    };
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={handleSkip} style={styles.itemContainer}>
            <View style={styles.imageContainer1}>
                <Image source={item.imageurl} style={styles.imageStyle} />
                <Text style={styles.productName}>{item.productname}</Text>
                <Text style={styles.productDetail}>{item.productdetail}</Text>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.TouchableOpacity1}>
                        <Image source={require('../assets/plus.png')} style={styles.plusimage} />
                    </TouchableOpacity>
                    <Text style={styles.productPrice}>{item.productprice}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
    const renderItem1 = ({ item }) => (
        <TouchableOpacity onPress={handleSkip} style={styles.itemContainer1}>
            <View style={styles.imageContainer2}>
                <Image source={item.imageurl} style={styles.imageStyle1} />
                <Text style={styles.productDetail1}>{item.productdetail}</Text>
                <Text style={styles.productPrice1}>{item.productprice}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={{ color: "#FFFFFF", flex: 1, alignItems: 'center', }}>

            <View style={{ backgroundColor: "#04764E", height: '18%', width: '100%', borderBottomEndRadius: 30, borderBottomLeftRadius: 30, marginBottom: verticalScale(30), alignItems: 'start', flexDirection: 'row' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:verticalScale(55) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow.png')}
                            style={{ tintColor: "#FFFFFF", width: responsiveWidth(7), height: responsiveHeight(2), marginLeft: horizontalScale(35) }} />
                    </TouchableOpacity>

                    <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', marginLeft: horizontalScale(55)}}>Store Greens</Text>
                    <TouchableOpacity onPress={handleSkip}>
                        <Image source={require('../assets/cart.png')}
                            style={{ height: 24, width: 24, marginHorizontal: 50 }}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: "#D7D7D7", borderWidth: 1, borderRadius: 61, paddingHorizontal: 10, marginRight: horizontalScale(15) }}>
                <TextInput placeholder="Search products" style={{ height: 60, width: 240, color: "#000000", paddingHorizontal: 15, }}></TextInput>
                <Image source={require('../assets/search.png')} style={{ height: 26, width: 26, marginRight: 15 }} />
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: "#04764E", fontSize: 18, fontWeight: '500', marginRight: 30, marginLeft: 20 }}>Shoes</Text>
                <Text style={{ color: "#A5A5A5", fontSize: 18, fontWeight: '400', marginRight: 30 }}>Team Jersey</Text>
                <Text style={{ color: "#A5A5A5", fontSize: 18, fontWeight: '400' }}>Football Kits</Text>
            </View>
            <Text style={{ backgroundColor: "#E6E6E6", height: 2, width: '100%', marginTop: 20 }}></Text>

            <ScrollView showsVerticalScrollIndicator={false} style={{ overflow: 'hidden' }}>

                <View style={styles.flatListContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={shoes}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                </View>
                <Text style={styles.newcollection}>New Collection</Text>
                <View style={styles.flatListContainer1}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={clothes}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                    />

                </View>


            </ScrollView>
        </SafeAreaView >
    );

}


const styles = StyleSheet.create({


    itemContainer: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        marginVertical: 25,
        marginHorizontal: 16,
        borderRadius: 25,
        width: responsiveWidth(55),
        height: responsiveHeight(40),

    },

    imageContainer1: {
        height: responsiveHeight(20),
        width: responsiveWidth(50)
    },
    imageStyle: {
        height: '70%',
        width: '70%',
        resizeMode: 'contain',
        


    },
    productName: {
        fontSize: 22,
        fontWeight: '400',
        color: '#000',
        marginTop: 10


    },
    productDetail: {
        fontSize: 12,
        color: '#A5A5A5',
        marginTop: 10

    },
    productPrice: {
        fontSize: 16,
        color: '#000',
        fontWeight: '700',
        marginLeft: 20
    },

    TouchableOpacity1: {
        height: 60,
        width: 55,
        backgroundColor: "#FB897E",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'

    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17
    },
    plusimage: {
        height: 18,
        width: 18,

    },
    newcollection: {
        marginHorizontal: 16,
        fontSize: 18,
        color: "#000000",
        fontWeight: '500',
        marginTop: 15
    },


    itemContainer1: {
        backgroundColor: "#FCA55F",
        marginVertical: 60,
        marginHorizontal: 10,
        borderRadius: 18,
        width: 141,
        height: 150,
        alignItems: 'center',

        


    },
    imageContainer2: {

        height: responsiveHeight(16),
        width: responsiveWidth(32),
        alignItems:'center',
        borderRadius: 18,
        marginVertical: -30

    },
    imageStyle1: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 15

    },
    productDetail1:{
        color:"#FFFFFF",
        fontSize:11,
        fontWeight:'600',
        marginTop:10
    },
    productPrice1:{
       color:"#FFFFFF",
       fontSize:14,
       fontWeight:'700',
       marginTop:10
    }
});








