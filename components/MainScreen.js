import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Profile from "./Profile";

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main screen</Text>
        <Button
          title="go to profile"
          onPress={() => props.navigation.navigate("ProfilePage")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
