// sup

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../app/screens/Home.js";
import Login from "../app/screens/Login.js";
import signUp from "../app/screens/signUp.js";
import Dashboard from "../app/screens/Dashboard.js";
import EventForm from "../app/screens/EventForm.js";
import Profile from "../app/screens/Profile.js";
import pastEvents from "../app/screens/pastEvents.js";
import createdEvents from "../app/screens/createdEvents.js";
import joinedEvents from "../app/screens/joinedEvents.js";
import currentEvents from "../app/screens/currentEvents.js";
import joinedCurrent from "../app/screens/joinedCurrent.js";
import createdCurrent from "../app/screens/createdCurrent.js";
import viewCurrentCreated from "../app/screens/viewCurrentCreated.js";
import Success from "../app/screens/Success.js";
import Join from "../app/screens/Join.js";
import GenerateCode from "../app/screens/GenerateCode.js";
import Hub from "../app/screens/Hub.js";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
        headerStyle: {
          backgroundColor: "#ed80bb",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign Up" component={signUp} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="EventForm" component={EventForm} options={{ title: 'Event Form' }}/>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="pastEvents" component={pastEvents} options={{ title: 'Past Events' }}/>
      <Stack.Screen name="createdEvents" component={createdEvents} options={{ title: 'Created Events' }}/>
      <Stack.Screen name="joinedEvents" component={joinedEvents} options={{ title: 'Joined Events' }}/>
      <Stack.Screen name="currentEvents" component={currentEvents} options={{ title: 'Current Events' }}/>
      <Stack.Screen name="createdCurrent" component={createdCurrent} options={{ title: 'Created Events' }}/>
      <Stack.Screen name="joinedCurrent" component={joinedCurrent} options={{ title: 'Joined Events' }}/>
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Join" component={Join} />
      <Stack.Screen name="GenerateCode" component={GenerateCode} />
      <Stack.Screen name="viewCurrentCreated" component={viewCurrentCreated} />
      <Stack.Screen name="Hub" component={Hub} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };