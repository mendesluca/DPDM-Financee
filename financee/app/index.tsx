import React, { useState, useEffect } from "react";
import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

import {}

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 150, height: 50 }}
      source={require('../assets/img/icon.png')}
    />
  );
};


export default function Page() {
  return (

    

    <View style={styles.container}>

        <Stack.Screen options={{
          title: props => <LogoTitle {...props} />,
          headerStyle:{backgroundColor:"#fff"}
          
        }}/>

      <Link href="/login">
        <Text>Go to Login</Text>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});
