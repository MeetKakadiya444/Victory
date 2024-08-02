import React, { useState } from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet,FlatList} from "react-native";
import { horizontalScale, verticalScale } from "../Utils"


const players = [
  { id: '1',  imageUrl: require('../assets/playerone.png') },
  { id: '2',  imageUrl: require('../assets/playertwo.png') },
  { id: '3',  imageUrl: require('../assets/playerthree.png') },
  { id: '4',  imageUrl: require('../assets/playerfour.png') },
  { id: '5',  imageUrl: require('../assets/playerfive.png') },
  { id: '6',  imageUrl: require('../assets/playerone.png') },
  { id: '7',  imageUrl: require('../assets/playertwo.png') },
  { id: '8',  imageUrl: require('../assets/playerthree.png') },
  { id: '9',  imageUrl: require('../assets/playerfour.png') }
];


export default function Playerscreen({ navigation}) {
  const handleSkip = () => {
    navigation.navigate("Ticketscreen");
  };

  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedPlayer(item)}>
      <Image source={item.imageUrl} style={styles.playerImage} />
    </TouchableOpacity>
  );

  return (

    <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/arrow.png')}
          View style={{ color: "#000000", width: responsiveWidth(7), height: responsiveHeight(2), marginBottom: verticalScale(20), marginRight: 255, marginTop: 35 }} />
      </TouchableOpacity>


      <Text style={{ color: "#04764E", fontWeight: "bold", fontSize: 25, textAlign: "center", marginRight: horizontalScale(15), marginTop: 20 }}>
        Who is your favourite{"\n"}
        Victory players?
      </Text>


      <Text style={{ color: "#000000", fontSize: responsiveFontSize(1.5), alignItems: "center", textAlign: "center", letterSpacing: 1.5, marginTop: verticalScale(30), marginBottom: 100 }}>
        Amet minim mollit non deserunt ullamcoei{"\n"}
        sitaliqua dolor do amet sintelit officia.
      </Text>

      <View style={{ justifyContent: 'center', alignContent: 'center', backgroundColor: "#000000", borderRadius: 25, width: '43%', height: '22%', alignItems: 'center', marginTop: -30 }}>
        <View style={{ backgroundColor: "#373737", height: '85%', width: '85%', borderRadius: 35, marginTop: 10 }}>
          <Image source={selectedPlayer.imageUrl} style={{ height: '100%', width: '100%', borderRadius: 30 }}></Image>
        </View>
        <View style={styles.selectedPlayerCard}>
        </View>
        <View>
          <Text style={{ color: "#FFFFFF", textAlign: 'center', fontSize: 10, letterSpacing: 1, paddingTop: 5, marginTop: 10 }}>
            James Arthur{"\n"}{"\n"}</Text>

          <Text style={{ color: "#6CAE97", marginTop: -17 }}>Your Favourite Player</Text>
        </View>
        <Text style={{ color: '#000000', marginTop: 40, letterSpacing: 1.5, marginLeft: 5 }}>Swipe To Select</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 85 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={players}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.swipeContainer}
        />
      </View>
      <View style={{ flexDirection: 'row', height:'10%',width:'100%', alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity  onPress={handleSkip} style={{height:60,width:160,backgroundColor:"#FFFFFF",alignItems:'center',justifyContent:'center',borderRadius:40,marginHorizontal:10,borderWidth:1,borderColor:"#CBCBCB"}} >
          <Text style={{  color: "#CBCBCB", fontHeight: "bold", fontSize: 16,  }}>SKIP </Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={handleSkip} style={{height:60,width:160,backgroundColor:"#04764E",alignItems:'center',justifyContent:'center',borderRadius:40,marginHorizontal:10}} >
          <Text style={{ color: "#FFFFFF", fontHeight: "bold", fontSize: 16, color:'#FFFFFF'  }}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>


  );
}
const styles = StyleSheet.create({
  selectedPlayerCard: { 
    alignItems: 'center',
  },
  selectedPlayerImage: {
    width: '10%',
    height: '10%',
    borderRadius: 20,
  },
  playerImage: {
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 15,
    marginHorizontal: 11,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

});

 