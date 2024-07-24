import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"


export default function Qrscreen({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: "#04764E", flex: 1, alignItems: 'center' }}>
            <View style={{ width: '80%', marginTop: verticalScale(30),  }}>
                <TouchableOpacity>
                    <Image source={require('../assets/arrow.png')} style={{ tintColor: "#FFFFFF", width: responsiveWidth(8.8), height: responsiveHeight(2.5), }}></Image>
                </TouchableOpacity>
            </View>


            <View style={{ backgroundColor: "#FFFFFF", height: '80%', width: '88%', borderRadius: 15, alignItems: 'center', marginTop: 30 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/trophy.png')} style={{ height: 20, width: 25, flexDirection: 'row', marginTop: 25 }}>
                    </Image>
                    <Text style={{ color: "#173477", marginLeft: 10, marginTop: 25 }}>Champions League</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ color: "#000000", fontWeight: 'bold', letterSpacing: 1, marginTop: verticalScale(28), fontSize: 19 }}>V. Greens{"\n"}{"\n"}
                        <Text style={{ color: "#000000", fontSize: 11, fontWeight: '300' }}>Ukraine</Text>
                    </Text>
                    <Image source={require('../assets/hometeam.png')} style={{ height: 40, width: 35, marginTop: verticalScale(25), marginLeft: horizontalScale(10) }}></Image>
                    <Image source={require('../assets/awayteam.png')} style={{ height: 43.5, width: 32, marginTop: verticalScale(22), marginLeft: horizontalScale(15) }}></Image>
                    <Text style={{ color: "#000000", fontSize: 19, fontWeight: 'bold', marginTop: verticalScale(28), marginLeft: horizontalScale(10), textAlign: 'right' }}>B. Monkeys{"\n"}{"\n"}
                        <Text style={{ color: "#000000", fontSize: 11, fontWeight: '300' }}>Italy</Text>
                    </Text>

                </View>
                <Text style={{ backgroundColor: "#000000", color: "#FFFFFF", height: 40, width: 150, borderRadius: 6, paddingTop: 10, paddingLeft: 26, fontWeight: 'bold', marginTop: 20 }}>E Ticket issued</Text>
                <Text style={{ backgroundColor: "#E6E6E6", height: '0.3%', width: '100%', marginTop: 20 }}></Text>

                 
                <View style={{ flexDirection: 'row', }}>
                    <View>
                        <Text style={{ color: "#A5A5A5", fontSize: 12, marginTop: 20, }}>Code</Text>
                        <Text style={{ color: "#595959", fontSize: 14, height: 22, fontWeight: 500, marginTop: 5 }}>SS-54</Text>
                    </View>
                    <View >
                        <Text style={{ color: "#A5A5A5", fontSize: 12, marginTop: 20, marginLeft: 30 }}>Class</Text>
                        <Text style={{ color: "#595959", fontSize: 14, height: 22, fontWeight: 500, marginLeft: 30, marginTop: 5 }}>Economy</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#A5A5A5", fontSize: 12, marginTop: 20, marginLeft: 20 }}>Terminal</Text>
                        <Text style={{ color: "#595959", fontSize: 14, height: 22, fontWeight: 500, marginLeft: 20, marginTop: 5 }}>East-1</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#A5A5A5", fontSize: 12, marginTop: 20, marginLeft: 20 }}>Gate</Text>
                        <Text style={{ color: "#595959", fontSize: 14, height: 22, fontWeight: 500, marginLeft: 20, marginTop: 5 }}>4356</Text>
                    </View>
                </View>

                <View style={{width:'77%'}}>
                <Text style={{ color: "#A5A5A5", fontSize: 12, marginTop: 30,  }}>Date</Text>
                <Text style={{ color: "#595959", fontSize: 14, height: 22, fontWeight: 500, marginTop: 5 }}>Monday, 09 May 2021 - 19:45</Text>
                </View>

                <View style={{borderColor:"#D7D7D7",height:170,width:170,borderWidth:1,borderRadius:20,marginTop:20}}>
                   <Image source={require('../assets/qr.png')} style={{height:150,width:150,marginLeft:9,marginTop:9}}></Image>
                </View>
                
                
            </View>


        </SafeAreaView>
    );
}

