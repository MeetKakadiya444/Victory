import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../Utils"

const method = [
    {
        id: '1',
        number:'1',
        image:require('../assets/hometeam.png'),
        name:'NSKALA',
        goal:'18 Goals',
        imageurl:require('../assets/topgoal1.png')
    },

    {
        id: '2',
        number:'2',
        image:require('../assets/hometeam.png') ,
        name:'VINCENT GHEZZAL',
        goal:'16 Goals',
        imageurl:require('../assets/topgoal2.png')
    },

    {
        id: '3',
        number:'3',
        image:require('../assets/hometeam.png'),
        name:'KYLE MARIN',
        goal:'15 Goals',
        imageurl:require('../assets/topgoal3.png')  
    },

    {
        id: '4',
        number:'4',
        image:require('../assets/hometeam.png'),
        name:'MUS',
        goal:'12 Goals',
        imageurl:require('../assets/topgoal4.png')
    },

    {
        id: '5',
        number:'5',
        image:require('../assets/hometeam.png'),
        name:'GARY RODRY',
        goal:'9 Goals',
        imageurl:require('../assets/topgoal5.png')
    },
    {
        id: '6',
        number:'6',
        image:require('../assets/hometeam.png'),
        name:'KEVIN DOUGLAS',
        goal:'4 Goals',
        imageurl:require('../assets/topgoal6.png')
    },

];

export default function Topgoalscreen({ navigation }) {
    const handleSkip = () => {
        navigation.navigate("Teamscreen");
      };

    const renderItem = ({ item }) => (
        <TouchableOpacity  onPress={handleSkip}  style={styles.itemContainer1}>
            <View style={styles.productInfo}>
                <Text style={styles.number}>{item.number}</Text>
            </View>
            <View style={{flexDirection:'column',marginHorizontal:5,width:'45%'}}>
            <Image source={item.image} style={styles.imageStyle} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.goal}>{item.goal}</Text>
            </View>
            <View style={{justifyContent:'center'}}>
            <Image source={item.imageurl} style={styles.imageurl}/>     
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ color: "#FFFFFF", flex: 1, alignItems: 'center' }}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/arrow.png')} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Top Goalscorers</Text>
                     
                </View>
            </View>
            <View style={styles.flatListContainer1}>
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    data={method}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    itemContainer1: {
        marginVertical: 10,
        borderRadius: 13,
        width: 310,
        height: 100,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor:"#D7D7D7",
        flexDirection:'row'
    },


    flatListContainer1: {
        flex: 1,
        alignItems: 'center',

    },


    productInfo: {
        paddingHorizontal: 20,
        justifyContent:'center'
        
        
    },


    number: {
        fontSize: 35,
        fontWeight: '500',
        color:"#CBCBCB",
        
    },
    
    imageStyle:{
       width:23,
       height:27,
       marginVertical:5
    },


    name:{
        color:"#595959",
        fontSize:14,
        fontWeight:'400',
        marginVertical:5
        
    },


    goal:{
        color:"#000000",
        fontSize:14,
        fontWeight:'700',
        
    },
     

    imageurl:{
        width:100,
        height:100,
        borderWidth:1,
        borderColor:"#D7D7D7",
        borderRadius:13
        
        
     },


     


    header: {
        backgroundColor: "#04764E",
        height: '18%',
        width: '100%',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: verticalScale(30),
        justifyContent: 'center'

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
        fontWeight: 'bold',
        marginLeft: horizontalScale(40),
    }     

});


