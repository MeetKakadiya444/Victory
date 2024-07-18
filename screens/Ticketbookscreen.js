import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, FlatList, ScrollView, TextInput, } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"


export default function Ticketbookscreen({ navigation }) {
    const [number, onChangeNumber] = React.useState('');
    const [text, onChangeText] = React.useState('Useless Text');
    return (
        <SafeAreaView style={{ color: "#FFFFFF", flex: 1 }}>

            <View style={{ backgroundColor: "#000000", height: '18%', width: '100%', borderBottomEndRadius: 30, borderBottomLeftRadius: 30, alignItems: 'start', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/arrow.png')}
                        style={{ flexDirection: 'row', tintColor: "#FFFFFF", width: responsiveWidth(7), margin: horizontalScale(35), height: responsiveHeight(2), marginVertical: verticalScale(60) }} />
                </TouchableOpacity>
                <Text style={{ color: "#FFFFFF", fontSize: 22, marginHorizontal: 45, marginVertical: 50, }}>Tickets</Text>

            </View>

            <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', height: '16%', justifyContent: 'center', borderRadius: 14, marginTop: -25, marginHorizontal: 15 }}>
                <Text style={{ color: "#000000", fontWeight: 'bold', letterSpacing: 1, marginTop: verticalScale(28), fontSize: 19 }}>V. Greens{"\n"}{"\n"}
                    <Text style={{ color: "#000000", fontSize: 11, fontWeight: '300' }}>Ukraine</Text>
                </Text>
                <Image source={require('../assets/hometeam.png')} style={{ height: 40, width: 35, marginTop: verticalScale(25), marginLeft: horizontalScale(10) }}></Image>
                <Image source={require('../assets/awayteam.png')} style={{ height: 43.5, width: 32, marginTop: verticalScale(22), marginLeft: horizontalScale(15) }}></Image>
                <Text style={{ color: "#000000", fontSize: 19, fontWeight: 'bold', marginTop: verticalScale(28), marginLeft: horizontalScale(10), textAlign: 'right' }}>B. Monkeys{"\n"}{"\n"}
                    <Text style={{ color: "#000000", fontSize: 11, fontWeight: '300' }}>Italy</Text>
                </Text>
            </View>
            <ScrollView style={{ marginTop: 20, marginHorizontal: 15, }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Text style={{ backgroundColor: "#04764E", height: 50, width: 150, borderRadius: 6, color: "#FFFFFF", fontSize: 15, fontWeight: 'bold', paddingTop: 13.5, paddingLeft: 53 }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ backgroundColor: "#D7D7D7", height: 50, width: 165, borderRadius: 6, color: "#595959", fontSize: 15, fontWeight: 'bold', paddingTop: 13.5, paddingLeft: 63, marginLeft: 15 }}>Away</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: "#595959", marginTop: 30, fontSize: 17, fontWeight: '400' }}>Date</Text>
                <TextInput placeholder="Monday, 09 May 2021" style={{ marginTop: 15, height: 65, borderRadius: 6, color: "#000000", borderColor: "#D7D7D7", borderWidth: 1, paddingHorizontal: 22, }}></TextInput>

                <Text style={{ color: "#595959", marginTop: 30, fontSize: 17, fontWeight: '400' }}>How many fans?</Text>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity>
                        <Text style={{ borderColor: "#D7D7D7", borderWidth: 1, height: 70, width: 157.3, borderRadius: 6, color: "#000000", fontSize: 15, fontWeight: 'bold', paddingTop: 25, paddingHorizontal: 20 }}>2 Child</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ borderColor: "#D7D7D7", borderWidth: 1, height: 70, width: 157.7, borderRadius: 6, color: "#000000", fontSize: 15, fontWeight: 'bold', paddingTop: 25, marginLeft: 15, paddingHorizontal: 20 }}>4 Adult</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ color: "#595959", fontSize: 17, fontWeight: '400',marginTop:30 }}>Which tribune do you want?</Text>

            </ScrollView>
        </SafeAreaView>
    );
}




