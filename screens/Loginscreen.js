import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"

export default function Loginscreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Createaccountscreen");
    };
    return (


        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1, justifyContent: "center", alignItems: "center" }}>


            <View style={{ marginHorizontal: horizontalScale(37), marginVertical: verticalScale(115), marginBottom: verticalScale(90) }}>
                <Text style={{ color: "#04764E", fontWeight: "bold", fontSize: 25 }}>Sign In</Text>


                <Text style={{ color: "#000000", fontSize: responsiveFontSize(1.5), alignItems: "center", letterSpacing: 1.5, marginTop: verticalScale(30) }}>
                    Amet minim mollit non deserunt ullamcoei{"\n"}
                    sitaliqua dolor do amet sintelit officia.
                </Text>


                <Text style={{ color: "#8A8A8A", fontSize: 14, marginTop: verticalScale(35) }}>Username</Text>
                <TextInput style={{ height: 50, borderColor: "#CBCBCB", borderBottomWidth: 2, marginTop: verticalScale(15), paddingHorizontal: horizontalScale(20) }}>
                </TextInput>


                <Text style={{ color: "#8A8A8A", fontSize: 14, marginTop: verticalScale(25) }}>Password</Text>
                <TextInput style={{ height: 50, borderColor: "#04764E", borderBottomWidth: 2, marginTop: verticalScale(15), paddingHorizontal: horizontalScale(20) }} secureTextEntry>
                </TextInput>


                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "#04764E", borderRadius: 45, marginTop: verticalScale(35), paddingBottom: verticalScale(20), justifyContent: 'center' }}>
                    <Text style={{ color: "#FFFFFF", fontSize: responsiveFontSize(2), paddingTop: verticalScale(20), fontWeight: 500 }}>LOGIN</Text>

                </TouchableOpacity>

                <View style={styles.buttonContainer}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#656565', fontSize: 14, marginTop: 15, textAlign: 'start' }}>Forgot password? </Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#04764E', fontSize: 14, marginTop: 15, textAlign: 'start', marginHorizontal: 5 }}>Reset here </Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center'}}>
                    <Text style={{ color: "#8A8A8A", fontSize: 14,   letterSpacing: 0.7, marginTop: verticalScale(35) }}>Don’t have an account?</Text>
                </View>

                <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', backgroundColor: "#000000", borderRadius: 50, marginTop: verticalScale(20), paddingBottom: verticalScale(20), justifyContent: 'center' }}>
                    <Text style={{ color: "#FFFFFF", fontSize: 16, paddingTop: verticalScale(20), fontWeight: 500 }}>CREATE AN ACCOUNT</Text>


                </TouchableOpacity>


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
