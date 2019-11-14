import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  Alert,
  ScrollView
} from "react-native";
import { container, Content, Thumbnail } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import MainScreen from "./components/MainScreen";
// import Profile from "./components/Profile";

// export default function App() {
//   return (
//     <View style={styles.container}>
//        <Text>Hello World!!</Text>
//     </View>
//   );
// }

// const AppStackNavigator = createStackNavigator({
//   Main:{
//     screen: MainScreen
//   },
//   Profile:{
//     screen: Profile
//   }
// })
class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Thumbnail source={require("./assets/icon.png")} />
        </ScrollView>
        <Text>Main screen</Text>
        <Button
          title="go to profile"
          onPress={() => this.props.navigation.navigate("ProfilePage")}
        />
      </View>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile page</Text>
        <Button
          title="go to explore"
          onPress={() => this.props.navigation.navigate("ExploreTab")}
        />
      </View>
    );
  }
}

class Explore extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Explore page</Text>
      </View>
    );
  }
}
// class App extends React.Component {
//   render() {
//     return <AppStackNavigator />;
//   }
// }

const AppStackNavigator = createStackNavigator(
  {
    Main: MainScreen,
    ProfilePage: Profile,
    ExploreTab: Explore
  },
  {
    initialRouteName: "Main"
  }
);

export default createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
