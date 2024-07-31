import React, { useState } from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"
import Ticketbookscreen from "./Ticketbookscreen";


const matches = [
  {
    id: '1',
    View1: "#04764E",
    homeTeam: 'V. Greens',
    homeTeamColor: "#04764E",
    View2: "#173477",
    awayTeam: 'B. Monkeys',
    awayTeamColor: "#173477",
    date: '9 july 2024',
    time: '19.45',
    league: 'Champions League'
  },


  {
    id: '2',
    View1: "#04764E",
    homeTeam: 'V. Greens',
    homeTeamColor: "#04764E",
    View2: "#F02626",
    awayTeam: 'R. Birds',
    awayTeamColor: "#F02626",
    date: '10 july 2024',
    time: '19.45',
    league: 'Super Liga'
  },


  {
    id: '3',
    View1: "#6E91E0",
    homeTeam: 'B. Monkeys ',
    homeTeamColor: "#6E91E0",
    View2: "#04764E",
    awayTeam: 'V. Greens',
    awayTeamColor: "#04764E",
    date: '11 july 2024',
    time: '19.45',
    league: 'Super Liga'
  },


  {
    id: '4',
    View1: "#F02626",
    homeTeam: 'B. Monkeys ',
    homeTeamColor: "#F02626",
    View2: "#6E91F0",
    awayTeam: 'V. Greens',
    awayTeamColor: "#6E91E0",
    date: '12 july 2024',
    time: '19.45',
    league: 'Super Liga'
  },

  {
    id: '5',
    View1: "#173477",
    homeTeam: 'B. Monkeys ',
    homeTeamColor: "#173477",
    View2: "#F02626",
    awayTeam: 'V. Greens',
    awayTeamColor: "#F02626",
    date: '13 july 2024',
    time: '19.45',
    league: 'Super Liga'
  },
   
  {
    id: '6',
    View1: "#04764E",
    homeTeam: 'V. Greens',
    homeTeamColor: "#04764E",
    View2: "#173477",
    awayTeam: 'B. Monkeys',
    awayTeamColor: "#173477",
    date: '9 july 2024',
    time: '19.45',
    league: 'Champions League'
  },


  {
    id: '7',
    View1: "#04764E",
    homeTeam: 'V. Greens',
    homeTeamColor: "#04764E",
    View2: "#F02626",
    awayTeam: 'R. Birds',
    awayTeamColor: "#F02626",
    date: '10 july 2024',
    time: '19.45',
    league: 'Super Liga'
  },


  {
    id: '8',
    View1: "#6E91E0",
    homeTeam: 'B. Monkeys ',
    homeTeamColor: "#6E91E0",
    View2: "#04764E",
    awayTeam: 'V. Greens',
    awayTeamColor: "#04764E",
    date: '11 july 2024',
    time: '19.45',
    league: 'Super Liga'
  },


  {
    id: '9',
    View1: "#F02626",
    homeTeam: 'B. Monkeys ',
    homeTeamColor: "#F02626",
    View2: "#6E91F0",
    awayTeam: 'V. Greens',
    awayTeamColor: "#6E91E0",
    date: '12 july 2024',
    time: '19.45',
    league: 'Super Liga'
  },

  {
    id: '10',
    View1: "#173477",
    homeTeam: 'B. Monkeys ',
    homeTeamColor: "#173477",
    View2: "#F02626",
    awayTeam: 'V. Greens',
    awayTeamColor: "#F02626",
    date: '13 july 2024',
    time: '19.45',
    league: 'Super Liga'
  },
];

export default function TicketScreen({ navigation}) {
  const handleSkip = () => {
    navigation.navigate(Ticketbookscreen);
  };
   
  const   renderItem = ({ item }) => (
    <TouchableOpacity onPress={handleSkip} style={styles.itemContainer}>
      <View style={{ backgroundColor: "#EFEFEF", height: '90%', width: '115%', marginTop: -20, marginLeft: -20, borderTopStartRadius: 25, borderTopRightRadius: 25 }}>
        <View style={[styles.circle, { backgroundColor: item.View1, marginLeft: horizontalScale(20), marginTop: verticalScale(18) }]} />
        <View style={[styles.circle, { backgroundColor: item.View2, marginLeft: horizontalScale(60), marginTop: verticalScale(18) }]} />
        <Text style={[styles.teamName, { color: item.homeTeamColor }]}>{item.homeTeam}<Text style={styles.vsText}> VS </Text>
          <Text style={[styles.teamName, { color: item.awayTeamColor }]}>{item.awayTeam}</Text></Text>
      </View>
      <View style={{ backgroundColor: "#FFFFFF", height: '55%', width: '115%', marginTop: -2, marginLeft: -20, borderBottomEndRadius: 25, borderBottomLeftRadius: 25 }}>
        <Image source={require('../assets/calendar.png')} style={{ height: '35%', width: '5.5%', marginTop: verticalScale(17), marginLeft: horizontalScale(25) }}></Image>
        <Text style={styles.matchDetails}>{item.date}{"\n"}{item.time}</Text>
        <Image source={require('../assets/trophy.png')} style={{ height: '34%', width: '7%', marginTop: verticalScale(-24), marginLeft: horizontalScale(150) }}></Image>
        <Text style={styles.leagueText}>{item.league}</Text>
      </View>
    </TouchableOpacity>
  );

  return (

    <SafeAreaView style={{ color: "#FFFFFF", flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={{
        backgroundColor: "#000000", height: '18%', width: '100%', borderBottomEndRadius: 30, borderBottomLeftRadius: 30, marginBottom: verticalScale(30), alignItems: 'start', flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')}
            style={{flexDirection:'row',tintColor: "#FFFFFF", width: responsiveWidth(7), margin:horizontalScale(35), height: responsiveHeight(2),marginVertical:verticalScale(60) }} />
        </TouchableOpacity>
        <Text style={{ color: "#FFFFFF", fontSize: 22 , marginHorizontal:45 , marginVertical:50}}>Tickets</Text>
      </View>

      <View style={{ height: '100%', width: '100%', flex: 1,alignItems:'center' }}>
        <Image source={require('../assets/stadium.png')}
          style={{ width: 330, height: 230, borderRadius: 20, marginRight: horizontalScale(25), marginBottom: verticalScale(25) }} />

        <Text style={{ color: "#000000", fontSize: 20, fontWeight: 'bold', height: '100%', width: '85%' }}>Matchs</Text>
      </View>

      <View style={{ height: '100%', width: '100%', flex: 1 ,marginTop:35,alignItems:'center'}}>
        <FlatList
         
          Vertical
          showsVerticalScrollIndicator={false}
          data={matches}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}

        /></View>


    </SafeAreaView>

  );
}
const styles = StyleSheet.create({


  itemContainer: {
    backgroundColor: "#F3F3F3",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 25,
    width: 300,
    height: 130,
    flex: 1,

  },
  circle: {
    height: 45,
    width: 45,
    borderRadius: 40,
    position: 'absolute',
  },
  icon: {
    height: '32%',
    width: '5.5%',
    marginTop: verticalScale(19),
    marginLeft: horizontalScale(25),
  },
  teamName: {

    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginLeft: 125,
    marginTop: 30,
  },
  vsText: {
    fontSize: responsiveFontSize(1),
    fontWeight: 'bold',
    color: "#000",
  },
    matchDetails: {
    fontSize: responsiveFontSize(1.5),
    color: "#5B6897",
    marginLeft: 55,
    flexDirection: 'row',
    marginTop: -23,
  },
  leagueText: {
    fontSize: responsiveFontSize(1.5),
    color: "#173477",
    marginTop: -18,
    marginLeft: 180,

  },
});
 