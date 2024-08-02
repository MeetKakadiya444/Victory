import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, TextInpaut, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"

export default function Createaccountscreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Playerscreen");
    };

    return (



        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1, justifyContent: "center", alignItems: "center" }}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/arrow.png')}
                    style={{ color: "#000000", width: responsiveWidth(7), height: responsiveHeight(2), marginTop: verticalScale(220), marginRight: horizontalScale(240) }} />
            </TouchableOpacity>

            <View style={{ marginHorizontal: horizontalScale(37), marginVertical: verticalScale(115), marginBottom: verticalScale(250), marginTop: verticalScale(45) }}>
                <Text style={{ color: "#04764E", fontWeight: "bold", fontSize: 25 }}>Create an account</Text>

                <Text style={{ color: "#000000", fontSize: responsiveFontSize(1.5), alignItems: "center", letterSpacing: 1.5, marginTop: verticalScale(20) }}>
                    Amet minim mollit non deserunt ullamcoei{"\n"}
                    sitaliqua dolor do amet sintelit officia.
                </Text>

                <Text style={{ color: "#8A8A8A", fontSize: 14, marginTop: verticalScale(35) }}>Username</Text>
                <TextInput style={{ height: 50, borderColor: "#CBCBCB", borderBottomWidth: 2, marginTop: verticalScale(15), paddingHorizontal: horizontalScale(20) }}>
                </TextInput>

                <Text style={{ color: "#8A8A8A", fontSize: 14, marginTop: verticalScale(25) }}>Email</Text>
                <TextInput style={{ height: 50, borderColor: "#04764E", borderBottomWidth: 2, marginTop: verticalScale(15), paddingHorizontal: horizontalScale(20) }}>
                </TextInput>

                <Text style={{ color: "#8A8A8A", fontSize: 14, marginTop: verticalScale(25) }}></Text>
                <TextInput placeholder="Password" style={{ height: 50, borderColor: "#CBCBCB", borderBottomWidth: 2, marginTop: verticalScale(15), paddingHorizontal: horizontalScale(20) }} secureTextEntry>
                </TextInput>

                <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', backgroundColor: "#000000", borderRadius: 50, marginTop: verticalScale(30), paddingBottom: verticalScale(20) ,justifyContent:'center'}}>
                    <Text style={{ color: "#FFFFFF", fontSize: 16,   paddingTop: verticalScale(20), fontWeight: 500 }}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={{ color: "#000000", fontSize: responsiveFontSize(1.4), textAlign: "center", marginTop: verticalScale(20) }}>
                    By tassspping “Sign Up” you accept our <Text style={{ fontWeight: 'bold', color: '#04764E' }}>terms</Text>{"\n"}
                    and <Text style={{ fontWeight: 'bold', color: '#04764E' }}>condition</Text>
                </Text>
            </View>
             
        </SafeAreaView>



    );
}
const styles = StyleSheet.create({

    buttonContainer: {
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(5),
    }
})
