import React, { useState } from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, ScrollView, TextInput, FlatList, StyleSheet, ImageBackground } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"


export default function Storescreen({ navigation }) {
    return (
        <SafeAreaView style={{ color: "#FFFFFF", flex: 1, alignItems: 'center', }}>

            <View style={{ backgroundColor: "#04764E", height: '18%', width: '100%', borderBottomEndRadius: 30, borderBottomLeftRadius: 30, marginBottom: verticalScale(30), alignItems: 'start', flexDirection: 'row' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow.png')}
                            style={{ tintColor: "#FFFFFF", width: responsiveWidth(7), height: responsiveHeight(2), marginLeft: horizontalScale(35) }} />
                    </TouchableOpacity>

                    <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 'bold', marginLeft: horizontalScale(55) }}>Store Greens</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/cart.png')}
                            style={{ height: 24, width: 24, marginHorizontal: 50 }}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>

            
            <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: "#D7D7D7", borderWidth: 1, borderRadius: 61, paddingHorizontal: 10 ,marginRight:horizontalScale(15)}}>
                    <TextInput placeholder="Search products" style={{ height: 65, width: 240, color: "#000000", paddingHorizontal: 15, }}></TextInput>
                    <Image source={require('../assets/search.png')} style={{ height: 26, width: 26 ,marginRight:15}} />
                </View>
        </SafeAreaView >
    );
}



 