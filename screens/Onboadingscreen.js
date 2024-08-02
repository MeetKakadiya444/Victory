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
                <View style={{alignItems:'center'}}>
                    <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 24, marginBottom: 7, }}>Good Afternoon</Text>


                    <Text style={{ color: "#000000", fontHeight: "bold", fontSize: 16, marginBottom: 43,   }}>Welcome Back</Text>
                </View>

                <Text style={{ color: "#000000", fontSize: 16, textAlign: 'center', marginBottom: 110, fontWeight: 1 }}>
                    Lorem ipsum dolor sit amet, consectetur{"\n"}
                    adipiscing elit, sed do eiusmod tempor{"\n"}
                    incididunt ut labore et dolore magna aliqua
                </Text>
            </View>


            <View style={{ flexDirection: 'row', height:'10%',width:'100%', alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity  onPress={handleSkip} style={{height:60,width:160,backgroundColor:"#FFFFFF",alignItems:'center',justifyContent:'center',borderRadius:40,marginHorizontal:10,borderWidth:1,borderColor:"#000000"}} >
          <Text style={{  color: "#000000", fontHeight: "bold", fontSize: 16,  }}>SKIP </Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={handleSkip} style={{height:60,width:160,backgroundColor:"#04764E",alignItems:'center',justifyContent:'center',borderRadius:40,marginHorizontal:10}} >
          <Text style={{ color: "#FFFFFF", fontHeight: "bold", fontSize: 16, color:'#FFFFFF'  }}>campaıgns</Text>
        </TouchableOpacity>
      </View>
        </SafeAreaView>

    );
}