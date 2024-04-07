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
import { css } from "../assets/css/Inicio";

export default function inicio() {

  return (
    <View>
        <Stack.Screen options={{
            title: null,
            headerStyle:{backgroundColor:"#000"}
        }}/>
      </View>
  );
}
