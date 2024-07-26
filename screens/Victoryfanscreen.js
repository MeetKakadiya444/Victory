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

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image source={item.imageUrl} style={styles.playerImage} />
            </View>
            <Text style={styles.playerName}>{item.name}</Text>
        </TouchableOpacity>
    );


    const renderItem2 = ({ item }) => (
        <TouchableOpacity style={styles.containerViews}>
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




// import React from "react";
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
// import { SafeAreaView, Text, Image, View, TouchableOpacity, ScrollView, TextInput, FlatList, StyleSheet, ImageBackground } from "react-native";
// import { horizontalScale, verticalScale } from "../Utils";

// const shoes = [
//     {
//         id: '1',
//         imageurl: require('../assets/shoes1.png'),
//         productname: 'Greens Air Smart 54',
//         productdetail: 'Greens Sneakers',
//         productprice: '$39.90'
//     },
//     {
//         id: '2',
//         imageurl: require('../assets/shoes2.png'),
//         productname: ' Greens Air Smart 683',
//         productdetail: 'Greens Sneakers',
//         productprice: '$39.90'
//     },
//     {
//         id: '3',
//         imageurl: require('../assets/shoes1.png'),
//         productname: 'Greens Air Smart 54',
//         productdetail: 'Greens Sneakers',
//         productprice: '$39.90'
//     },
//     {
//         id: '4',
//         imageurl: require('../assets/shoes2.png'),
//         productname: 'Greens Air Smart 683',
//         productdetail: 'Greens Sneakers',
//         productprice: '$39.90'
//     },
//     {
//         id: '5',
//         imageurl: require('../assets/shoes1.png'),
//         productname: 'Greens Air Smart 54',
//         productdetail: 'Greens Sneakers',
//         productprice: '$39.90'
//     },
//     {
//         id: '6',
//         imageurl: require('../assets/shoes2.png'),
//         productname: 'Greens Air Smart 683',
//         productdetail: 'Greens Sneakers',
//         productprice: '$39.90'
//     },
// ];

// export default function Storescreen({ navigation }) {
//     const renderItem = ({ item }) => (
//         <TouchableOpacity style={styles.itemContainer}>
//             <View style={styles.imageContainer1}>
//                 <Image source={item.imageurl} style={styles.imageStyle} />
//             </View>
//             <Text style={styles.productName}>{item.productname}</Text>
//             <Text style={styles.productDetail}>{item.productdetail}</Text>
//             <Text style={styles.productPrice}>{item.productprice}</Text>
//             <TouchableOpacity style={styles.buttonStyle}>
            
//             </TouchableOpacity>
//         </TouchableOpacity>
//     );

//     return (
//         <SafeAreaView style={{ color: "#FFFFFF", flex: 1, alignItems: 'center', }}>
//             <View style={styles.header}>
//                 <View style={styles.headerContent}>
//                     <TouchableOpacity onPress={() => navigation.goBack()}>
//                         <Image source={require('../assets/arrow.png')} style={styles.backIcon} />
//                     </TouchableOpacity>
//                     <Text style={styles.headerText}>Store Greens</Text>
//                     <TouchableOpacity>
//                         <Image source={require('../assets/cart.png')} style={styles.cartIcon} />
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             <View style={styles.searchContainer}>
//                 <TextInput placeholder="Search products" style={styles.searchInput} />
//                 <Image source={require('../assets/search.png')} style={styles.searchIcon} />
//             </View>

//             <View style={styles.categoryContainer}>
//                 <Text style={styles.activeCategory}>Shoes</Text>
//                 <Text style={styles.inactiveCategory}>Team Jersey</Text>
//                 <Text style={styles.inactiveCategory}>Football Kits</Text>
//             </View>
//             <Text style={styles.separator}></Text>

//             <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
//                 <View style={styles.flatListContainer}>
//                     <FlatList
//                         horizontal
//                         showsHorizontalScrollIndicator={false}
//                         data={shoes}
//                         renderItem={renderItem}
//                         keyExtractor={item => item.id}
//                     />
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     header: {
//         backgroundColor: "#04764E",
//         height: '18%',
//         width: '100%',
//         borderBottomEndRadius: 30,
//         borderBottomLeftRadius: 30,
//         marginBottom: verticalScale(30),
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     headerContent: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     backIcon: {
//         tintColor: "#FFFFFF",
//         width: responsiveWidth(7),
//         height: responsiveHeight(2),
//         marginLeft: horizontalScale(35),
//     },
//     headerText: {
//         color: "#FFFFFF",
//         fontSize: 22,
//         fontWeight: 'bold',
//         marginLeft: horizontalScale(55),
//     },
//     cartIcon: {
//         height: 24,
//         width: 24,
//         marginHorizontal: 50,
//     },
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderColor: "#D7D7D7",
//         borderWidth: 1,
//         borderRadius: 61,
//         paddingHorizontal: 10,
//         marginRight: horizontalScale(15),
//     },
//     searchInput: {
//         height: 65,
//         width: 240,
//         color: "#000000",
//         paddingHorizontal: 15,
//     },
//     searchIcon: {
//         height: 26,
//         width: 26,
//         marginRight: 15,
//     },
//     categoryContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     activeCategory: {
//         color: "#04764E",
//         fontSize: 18,
//         fontWeight: '500',
//         marginRight: 30,
//         marginLeft: 20,
//     },
//     inactiveCategory: {
//         color: "#A5A5A5",
//         fontSize: 18,
//         fontWeight: '400',
//         marginRight: 30,
//     },
//     separator: {
//         backgroundColor: "#E6E6E6",
//         height: 2,
//         width: '100%',
//         marginTop: 20,
//     },
//     scrollView: {
//         backgroundColor: "#000000",
//         overflow: 'hidden',
//     },
//     flatListContainer: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     itemContainer: {
//         backgroundColor: "#FFFFFF",
//         padding: 20,
//         marginVertical: 10,
//         marginHorizontal: 16,
//         borderRadius: 25,
//         width: responsiveWidth(52),
//         height: responsiveHeight(60),
//         justifyContent: 'space-between', // Added to space items within the container
//     },
//     imageContainer1: {
//         height: responsiveHeight(20), // Adjusted height
//         width: responsiveWidth(50),
//         marginBottom: 10,
//         justifyContent: 'center', // Centering the image vertically
//         alignItems: 'center', // Centering the image horizontally
//     },
//     imageStyle: {
//         height: '100%', // Adjusted to fill the container
//         width: '100%', // Adjusted to fill the container
//         resizeMode: 'contain',
//     },
//     productName: {
//         fontSize: 22,
//         fontWeight: '400',
//         color: '#000',
//     },
//     productDetail: {
//         fontSize: 16,
//         color: '#A5A5A5',
//     },
//     productPrice: {
//         fontSize: 16,
//         color: '#000',
//     },
//     buttonStyle: {
//        Color: "red",
//          height:20,
//          width:20,
//     },
//     buttonText: {
//         color: "#FFFFFF",
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });
