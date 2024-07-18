import React from "react";
import { Text, SafeAreaView, Image, TouchableOpacity, View } from "react-native";


export default function Onboadingscreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Homescreen");
    };
    return (
        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../assets/victorygreens.png')}
                style={{ width: 215, height: 285, marginBottom: 58 }} />


            <View>
                <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 24, marginBottom: 7, left: 70 }}>Good Afternoon</Text>


                <Text style={{ color: "#000000", fontHeight: "bold", fontSize: 16, marginBottom: 43, left: 109 }}>Welcome Back</Text>


                <Text style={{ color: "#000000", fontSize: 16, textAlign: 'center', marginBottom: 110, fontWeight: 1 }}>
                    Lorem ipsum dolor sit amet, consectetur{"\n"}
                    adipiscing elit, sed do eiusmod tempor{"\n"}
                    incididunt ut labore et dolore magna aliqua
                </Text>
            </View>


            <View style={{ flexDirection: 'row', marginBottom: 25 }}>
                <TouchableOpacity onPress={handleSkip}>
                    <Text style={{ right: 4, top: 10, borderWidth: 1, borderColor: '#000000', borderRadius: 45, paddingHorizontal: 65, paddingVertical: 20, color: "#000000", fontHeight: "bold", fontSize: 16 }}>SKIP</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={handleSkip}>
                    <Text style={{ left: 4, top: 10, borderRadius: 45, paddingHorizontal: 35, paddingVertical: 21, color: "#FFFFFF", fontHeight: "bold", fontSize: 16, backgroundColor: "#04764E" }}>CAMPAIGNS</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}