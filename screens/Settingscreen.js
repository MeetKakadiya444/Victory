import React, { useState } from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList, StyleSheet, Switch, ScrollView } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"




export default function Settingscreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Upcomingscreen");
    };

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(true);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return (
        <SafeAreaView style={{ color: "#FFFFFF", flex: 1, alignItems: 'center' }}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow.png')} style={styles.backArrow} />
                    </TouchableOpacity>
                    <View></View>
                    <Text style={styles.headerText}>Settings</Text>
                </View>
            </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'column', height: '100%', width: '85%', marginTop: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/bell.png')} style={styles.bellpng}></Image>
                    <Text style={styles.notification}>Notifications</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={styles.notification2}>Allow Notifications</Text>
                    <View></View>
                    <Switch
                        
                        trackColor={{ false: "#C5CDE0", true: "#04764E" }}
                        thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', marginTop: 10, width: 160 }}>
                    <Text style={styles.notification3}>Open System Settings</Text>
                </TouchableOpacity>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                    <Image source={require('../assets/sync.png')} style={styles.Syncpng}></Image>
                    <Text style={styles.Sync}>Sync</Text>
                </View>

                <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', marginTop: 20, width: 155 }}>
                    <Text style={styles.Sync2}>Offline Boards & Task</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 15, }}>
                    <Text style={styles.Sync3}>Friendly Mode</Text>
                    <Switch
                        trackColor={{ false: "#C5CDE0", true: "#04764E" }}
                        thumbColor={isEnabled1 ? "#FFFFFF" : "#FFFFFF"}
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                </View>

                <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', marginTop: 10, width: 85 }}>
                    <Text style={styles.Sync4}>Sync queue</Text>
                </TouchableOpacity>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                    <Image source={require('../assets/general.png')} style={styles.generalpng}></Image>
                    <Text style={styles.notification}>General</Text>
                </View>

                <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', marginTop: 20, width: 237 }}>
                    <Text style={styles.general1}>Disconnect Account from Google</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', marginTop: 15, width: 110 }}>
                    <Text style={styles.general2}>Delete Account</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', marginTop: 15, width: 75 }}>
                    <Text style={styles.general3}>About App</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', marginTop: 15, width: 95 }}>
                    <Text style={styles.general4}>Report a Bug</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSkip} style={{ flexDirection: 'row', marginTop: 15, width: 50 }}>
                    <Text style={styles.general5}>Logout</Text>
                </TouchableOpacity>
                

            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: "#04764E",
        height: '18%',
        width: '100%',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: verticalScale(30),
        flexDirection: 'row',
        alignItems: 'center'
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
        fontWeight: '600',
        fontWeight: 'bold',
        marginLeft: horizontalScale(85),
    },


    bellpng: {
        height: 20,
        width: 18
    },


    notification: {
        fontSize: 18,
        fontWeight: '600',
        color: "#0B204C",
        marginLeft: 15
    },


    notification2: {
        fontSize:responsiveFontSize(2),
        fontWeight: '400',
        color: "#8E99AF",
        width: 240,
    },


    notification3: {
        fontSize:responsiveFontSize(2),
        fontWeight: '400',
        color: "#8E99AF"
    },


    Sync: {
        fontSize: 18,
        fontWeight: '600',
        color: "#0B204C",
        marginLeft: 13
    },


    Syncpng: {
        height: 18.5,
        width: 22
    },


    Sync2: {
        fontSize:responsiveFontSize(2),
        fontWeight: '400',
        color: "#8E99AF",
    },


    Sync3: {

        fontSize:responsiveFontSize(2),
        fontWeight: '400',
        color: "#8E99AF",
        width: 240,
    },


    Sync4: {
        fontSize:responsiveFontSize(2),
        fontWeight: '400',
        color: "#8E99AF",
    },


    generalpng: {
        height: 22,
        width: 22
    },


    general1: {
        fontSize:responsiveFontSize(2),
        fontWeight: '400',
        color: "#8E99AF",
    },


    general2: {
        fontSize:responsiveFontSize(2),
        fontWeight: '400',
        color: "#8E99AF",
    },


    general3: {
        fontSize:responsiveFontSize(2),
        fontWeight: '400',
        color: "#8E99AF",
    },


    general4: {
        fontSize:responsiveFontSize(2),
        fontWeight: '400',
        color: "#8E99AF",
    },


    general5: {
        fontSize:responsiveFontSize(2),
        fontWeight: '400',
        color: "#8E99AF",
    },







});