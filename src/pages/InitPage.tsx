import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function InitPage() {
  const navigation = useNavigation();

  function handleNavigateToOrphanage() {
    navigation.navigate("OrphanagesMap");
  }

  function handleNavigateToAnotherToDoList() {
    navigation.navigate("AnotherToDoList");
  }

  return (
    <View style={styles.container}>
      <RectButton style={styles.genericButton} onPress={handleNavigateToOrphanage}>
        <Text style={styles.genericText}>Orphanage</Text>
      </RectButton>
      <RectButton style={styles.genericButton} onPress={handleNavigateToAnotherToDoList}>
        <Text style={styles.genericText}>Another ToDo List</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  genericText: {
    fontFamily: "Nunito_700Bold",
    color: "#FFFFFF",
  },

  genericButton: {
    width: 150,
    height: 56,
    backgroundColor: "#15C3D6",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
});
