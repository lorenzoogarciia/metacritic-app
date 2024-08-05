/* eslint-disable react/jsx-no-undef */
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";

//El botón Pressable es lo más recomendado y mejor para hacer botones personalizados
//Button es el botón nativo de cada sistema

//Se puede hacer importando
//import icon from './assets/icon.png';

//O creando una variable con la URL
//const icon = require('./assets/icon.png');

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
