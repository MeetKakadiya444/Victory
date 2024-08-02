import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"
import { SafeAreaProvider } from "react-native-safe-area-context";

const method = [
    {
        id: '1',
        cardnumber: '5454 3535 1111 0000',
        cardname: 'Xyz Card',
        cardprice: '$\n12.000',
        backgroundColor: "#04764E"
    },
    {
        id: '2',
        cardnumber: '1111 2222 5555 7878',
        cardname: 'Abc Card',
        cardprice: '$  224.8',
        backgroundColor: "#535353"
    },


];
export default function Cardscreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Settingscreen");
    };
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
            <View style={styles.flatListContainer}>
                <FlatList
                    horizontal
                    showshorizontalScrollIndicator={false}
                    data={method}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>


            <TouchableOpacity style={styles.TouchableOpacity} >
                <Text style={styles.textTouchableOpacity}>+ Add a Card</Text>
            </TouchableOpacity>


            <View style={styles.carddetail1}>
                <View style={styles.detailView}>
                    <View style={styles.View1}>
                        <Text style={styles.Text1}>Order Details </Text>
                        <TouchableOpacity>
                            <Image source={require('../assets/dot.png')} style={{ height: 25, width: 25, color: "#8E99AF" }}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.View2}>
                        <Text style={styles.Text2}>Total Cart</Text>
                        <Text style={styles.Text3}>$ 195.40</Text>
                    </View>

                    <View style={styles.View2}>
                        <Text style={styles.Text4}>Shipping Est.</Text>
                        <Text style={styles.Text5}>$ 9</Text>
                    </View>

                    <View style={styles.View2}>
                        <Text style={styles.Text6}>Discount</Text>
                        <Text style={styles.Text7}>Enter Discount Code</Text>
                    </View>
                    
                    <View style={styles.View2}>
                        <Text style={styles.Text8}>Order Total</Text>
                        <Text style={styles.Text9}>$ 204.40</Text>
                    </View>
                </View>


                <View style={styles.button}>
                    <TouchableOpacity onPress={handleSkip} style={styles.button1}>
                        <Text style={styles.buttontext}>DONE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSkip} style={styles.button2}>
                        <Text style={styles.buttontext1}>PAY with payPal</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 15,
        marginLeft: 25,
        borderRadius: 18,
        width: 250,
        height: 90,
        paddingHorizontal: 10,
        flexDirection: 'column',
    },


    cardInfo: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },


    cardnumber: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: '700',
        marginTop: 10
    },


    cardPrice: {
        color: "#AEFAFF",
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'right'
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
        marginLeft: 25,
    },


    carddetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },


    TouchableOpacity: {
        marginLeft: 30,
        marginTop: 10
    },


    textTouchableOpacity: {
        fontSize: 14,
        fontWeight: '500',
        color: "#3685CF"
    },


    carddetail1: {
        backgroundColor: "#F9F8F8",
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
        alignItems: 'center',
    },


    detailView: {

        height: '32%',
        width: '75%',
        marginTop: 20,
        flexDirection: 'column',
    },


    Text1: {
        fontSize: 24,
        fontWeight: '400',
        color: "#21293A"
    },


    View1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },


    View2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },


    Text2: {
        color: "#8E99AF",
        fontSize: 14,
        fontWeight: '400'
    },


    Text3: {
        color: "#21293A",
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: -0.5
    },


    Text4: {
        color: "#8E99AF",
        fontSize: 14,
        fontWeight: '400',
    },


    Text5: {
        color: "#21293A",
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: -0.5
    },


    Text6: {
        color: "#8E99AF",
        fontSize: 14,
        fontWeight: '400',
    },


    Text7: {
        color: "#8E99AF",
        fontSize: 14,
        fontWeight: '400',
    },


    Text8: {
        color: "#21293A",
        fontSize: 16,
        fontWeight: '400'
    },


    Text9: {
        color: "#21293A",
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: -0.60
    },


    button: {
        alignItems: 'center',
        flexDirection: 'column'
    },


    button1: {
        height: 60,
        width: 300,
        borderRadius: 40,
        backgroundColor: "#04764E",
        alignItems: 'center',
        justifyContent: 'center'
    },


    buttontext: {
        fontSize: 16,
        fontWeight: '600',
        color: "#FFFFFF"
    },


    button2: {
        height: 60,
        width: 300,
        borderRadius: 40,
        backgroundColor: "#373737",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },


    buttontext1: {
        fontSize: 16,
        fontWeight: '600',
        color: "#FFFFFF"
    }


});         