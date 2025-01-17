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
import Storescreen from "./screens/Storescreen";
import Shoppingcardscreen from "./screens/Shoppingcardscreen";
import Shippingmethodscreen from "./screens/Shippingmethodscreen";
import Tablescreen from "./screens/Tablescreen";
import Cardscreen from "./screens/Cardscreen";
import Settingscreen from "./screens/Settingscreen";
import Upcomingscreen  from "./screens/Upcomingscreen";
import Notificationscreen from "./screens/Notificationscreen";
import Topgoalscreen  from "./screens/Topgoalscreen";
import Teamscreen  from "./screens/Teamscreen";

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splashscreen" screenOptions={{ headerShown: false }}>
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
        <Stack.Screen name="Storescreen" component={Storescreen}></Stack.Screen>
        <Stack.Screen name="Shoppingcardscreen" component={Shoppingcardscreen}></Stack.Screen>
        <Stack.Screen name="Shippingmethodscreen" component={Shippingmethodscreen}></Stack.Screen>
        <Stack.Screen name="Tablescreen" component={Tablescreen}></Stack.Screen>
        <Stack.Screen name="Cardscreen" component={Cardscreen}></Stack.Screen>
        <Stack.Screen name="Settingscreen" component={Settingscreen}></Stack.Screen>
        <Stack.Screen name="Upcomingscreen" component={Upcomingscreen}></Stack.Screen>
        <Stack.Screen name="Notificationscreen" component={Notificationscreen}></Stack.Screen>
        <Stack.Screen name="Topgoalscreen" component={Topgoalscreen}></Stack.Screen>
        <Stack.Screen name="Teamscreen" component={Teamscreen}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );

}