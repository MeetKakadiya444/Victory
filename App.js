import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splashscreen from "./screens/Splashscreen"
import Onboadingscreen from "./screens/Onboadingscreen";
import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import Createaccountscreen from "./screens/Createaccountscreen";
import Playerscreen from "./screens/Playerscreen";
import Ticketscreen from "./screens/Ticketscreen";
import Ticketbookscreen from "./screens/Ticketbookscreen";
import Qrscreen from "./screens/Qrscreen";
import Victoryfanscreen from "./screens/Victoryfanscreen";

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Victoryfanscreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen}></Stack.Screen>
        <Stack.Screen name="Onboadingscreen" component={Onboadingscreen}></Stack.Screen>
        <Stack.Screen name="Homescreen" component={Homescreen}></Stack.Screen>
        <Stack.Screen name="Loginscreen" component={Loginscreen}></Stack.Screen>
        <Stack.Screen name="Createaccountscreen" component={Createaccountscreen}></Stack.Screen>
        <Stack.Screen name="Playerscreen" component={Playerscreen}></Stack.Screen>
        <Stack.Screen name="Ticketscreen" component={Ticketscreen}></Stack.Screen>
        <Stack.Screen name="Ticketbookscreen" component={Ticketbookscreen}></Stack.Screen>
        <Stack.Screen name="Qrscreen" component={Qrscreen}></Stack.Screen>
        <Stack.Screen name="Victoryfanscreen" component={Victoryfanscreen}></Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>
  );

}