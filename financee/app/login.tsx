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
import { css } from "../assets/css/Css";

export default function login() {
  const [display, setDisplay] = useState("none");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[css.container, css.bg]}
    >
      <View>
        <Stack.Screen options={{ headerShown: false }} />
      </View>
      <View>
        <Image source={require("../assets/img/icon.png")} style={css.logo} />
      </View>

      <View style={css.CircleShapeView1}>
        <Text />
      </View>
      <View style={css.CircleShapeView2}>
        <Text />
      </View>
      <View style={css.CircleShapeView3}>
        <Text />
      </View>
      <View style={css.CircleShapeView4}>
        <Text />
      </View>

      <View>
        <Text style={css.login__msg(display)}>Usuário ou Senha inválidos!</Text>
      </View>

      <View>
        <TextInput style={css.login__input} placeholder="Usuário:" />
        <TextInput
          style={css.login__input}
          placeholder="Senha:"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={css.login__button}
          onPress={() => setDisplay("flex")}
        >
          <Link href="/inicio" style={css.login__buttonText}>
            <Text>Entrar:</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
