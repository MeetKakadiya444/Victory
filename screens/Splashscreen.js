import React, { useEffect } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";


export default function Splashscreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Onboadingscreen");
    }, 1000);
  }, [navigation]);
  return (
    <SafeAreaView style={{ backgroundColor: "#04764E", flex: 1, justifyContent: "center", alignItems: "center" }}>



      <Image source={require('../assets/victory.png')}
        style={{ width: 179, height: 217 }} />


    </SafeAreaView>
  );
}