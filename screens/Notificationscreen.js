import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"

const method = [
    {
        id: '1',
        productdetail: 'Free Shipping',
        productprice: '$ 0.00',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },
    {
        id: '2',
        productdetail: 'Premium Shipping',
        productprice: '$ 8.99',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },
    {
        id: '3',
        productdetail: 'Super Fast Shipping',
        productprice: '$ 12.99',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },
    {
        id: '4',
        productdetail: 'Free Shipping',
        productprice: '$ 0.00',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },
    {
        id: '5',
        productdetail: 'Premium Shipping',
        productprice: '$ 8.99',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },
    {
        id: '6',
        productdetail: 'Super Fast Shipping',
        productprice: '$ 12.99',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },
];

export default function  Notificationscreen ({ navigation }) {
     
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer1}>
            <View style={styles.productInfo}>
                <Text style={styles.productDetail1}>{item.productdetail}</Text>
                <Text style={styles.productPrice1}>{item.productprice}</Text>
            </View>
            <View>
                <Text style={styles.address}>{item.address}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ color: "#FFFFFF", flex: 1 ,alignItems:'center'}}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow.png')} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Notifications</Text>
                    <TouchableOpacity>
                        <Text style={{color:"#FFFFFF",fontSize:12,fontWeight:'400',marginTop:10,marginLeft:'35%'}}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>   
            <View style={styles.flatListContainer1}>
                <FlatList
                    vertical
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
    itemContainer1: {
        backgroundColor: "#FFFFFF",
        marginVertical: 13,   
        borderRadius: 18,
        width: 310,
        height: 130,
        paddingHorizontal: 10,
        flexDirection: 'column',
        borderColor: "#D7D7D7",
        borderWidth: 1,       
    },


    flatListContainer1: {
        flex: 1,
        alignItems: 'center',
       
    },


    productInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },


    productDetail1: {
        color: "#000000",
        fontSize: 14,
        fontWeight: '700',
    },


    productPrice1: {
        color: "#000000",
        fontSize: 14,
        fontWeight: '400',
    },


    address: {
        fontSize: 12,
        color: "#595959",
        fontWeight: '400',
        marginHorizontal: 20,
        marginVertical: 25,
    },


    header: {
        backgroundColor: "#04764E",
        height: '18%',
        width: '100%',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: verticalScale(30),
        justifyContent:'center'    
        
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


    Text3: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: '600',
    },


});


