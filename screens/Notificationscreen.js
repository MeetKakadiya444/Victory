import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"

const method = [
    {
        id: '1',
        productdetail: 'Continue Payment',
        productdetailcolor: "#000000",
        borderColor: "#D7D7D7",
        backgroundColor: "#FFFFFF",
        date:'1 May 2021, 10:56 AM',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },

    {
        id: '2',
        productdetail: 'Greens Briefing: Sanchez Equals Record',
        productdetailcolor: "#000000",
        borderColor: "#D7D7D7",
        backgroundColor: "#FFFFFF",
        date:'1 May 2021, 10:56 AM',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },

    {
        id: '3',
        productdetail: 'Congratulations',
        productdetailcolor: "#04764E",
        borderColor: "#04764E",
        backgroundColor: "#F6FBFF",
        date:'1 May 2021, 10:56 AM',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },

    {
        id: '4',
        productdetail: 'Ticket Booked',
        productdetailcolor: "#04764E",
        borderColor: "#04764E",
        backgroundColor: "#F6FBFF",
        date:'1 May 2021, 10:56 AM',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },

    {
        id: '5',
        productdetail: 'Congratulations',
        productdetailcolor: "#04764E",
        borderColor: "#04764E",
        backgroundColor: "#F6FBFF",
        date:'1 May 2021, 10:56 AM',
        address: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore....'
    },

];

export default function Notificationscreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Topgoalscreen");
      };

    const renderItem = ({ item }) => (
        <TouchableOpacity  onPress={handleSkip} style={[styles.itemContainer1, { borderColor: item.borderColor }, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.productInfo}>
                <Text style={[styles.productDetail1, { color: item.productdetailcolor }]}>{item.productdetail}</Text>
            </View>
            <View>
                <Text style={styles.address}>{item.address}</Text>
                <Text style={styles.date}>{item.date}</Text>
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
                    <Text style={styles.headerText}>Notifications</Text>
                    <TouchableOpacity>
                        <Text style={{ color: "#FFFFFF", fontSize: 12, fontWeight: '400', marginTop: 10, marginLeft: '35%' }}>Clear</Text>
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

        marginVertical: 10,
        borderRadius: 18,
        width: 310,
        height: 150,
        paddingHorizontal: 5,
        flexDirection: 'column',

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
        fontSize: 14,
        fontWeight: '700',
    },


    address: {
        fontSize: 12,
        color: "#595959",
        fontWeight: '400',
        marginHorizontal: 20,
        marginVertical: 13,
    },


    date: {
        fontSize: 11,
        color: "#595959",
        fontWeight: '400',
        marginHorizontal: 20,
        marginVertical:8
        
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
        marginLeft: horizontalScale(60),
    },


    Text3: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: '600',
    },


});


