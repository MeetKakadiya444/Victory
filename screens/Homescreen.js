import React from "react";
 
import { SafeAreaView, Image, Text, View, TouchableOpacity } from "react-native";

export default function Homescreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Loginscreen");
    };


    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../assets/football_img.png')}
                style={{ width: 235, height: 218, marginBottom: 60 }} />


            <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 28, marginBottom: 4 }}>Welcome to</Text>


            <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 28, marginBottom: 68 }}>Victory Greens App</Text>


            <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18, borderRadius: 45, paddingHorizontal: 89, paddingVertical: 21, color: "#000000", fontHeight: "bold", fontSize: 5, backgroundColor: "#04764E" }}> 
                <Image source={require('../assets/email.png')} style={{ width: 30, height: 25, right: 54 }} />
                <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16, }}>Login With Email</Text>
            
            </TouchableOpacity>


            <TouchableOpacity  onPress={handleSkip} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 17, borderRadius: 45, paddingHorizontal: 72, paddingVertical: 19, color: "#000000", fontHeight: "bold", fontSize: 4, backgroundColor: "#376AED" }}>
                <Image source={require('../assets/facebook.png')} style={{ width: 30, height: 30, right: 40 }} />
                <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16, left: 10 }}>Login With Facebook</Text>
             
            </TouchableOpacity>


            <TouchableOpacity  onPress={handleSkip}  style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderWidth: 1, borderColor: '#CBCBCB', borderRadius: 45, paddingHorizontal: 79, paddingVertical: 18, color: "#000000", fontHeight: "bold", fontSize: 4, backgroundColor: "#FFFFFF" }}>
                <Image source={require('../assets/google.png')} style={{ width: 30, height: 30, right: 48 }} />
                <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 16, left: 11}}>Login With Google</Text>
             
            </TouchableOpacity>

        </SafeAreaView>
    );
}