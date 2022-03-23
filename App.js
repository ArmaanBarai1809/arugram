import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Submit from "./screens/Submit";
import Activity from "./screens/Activity";
import Profile from "./screens/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
// import { BlurView } from '@react-native-blur';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Search: { screen: Search },
    Submit: { screen: Submit },
    Activity: { screen: Activity },
    Profile: { screen: Profile },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ size, tintColor }) => {
      
        const route = navigation.state.routeName;
        console.log(route);
        let iconName;
        if (route === "Home") {
          iconName = "home-outline";
        } else if (route === "Search") {
          iconName = "search-outline";
        } else if (route === "Submit") {
          iconName = "add-circle-outline";
        } else if (route === "Activity") {
          iconName = "heart-outline";
        } else if (route === "Profile") {
          iconName = "person-circle-outline";
        }


          return <Ionicons name={iconName} size={20} color={tintColor} />;
        
      },
      
    },
    {
      tabBarComponent: (props) => (
        <BlurView
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          tint="dark"
          intensity={100}
        >
          <TabNavigator {...props} />
        </BlurView>
      )
    },
    {
      tabBarOptions: {
        style: {
          borderTopColor: '#666666',
          backgroundColor: 'transparent'
        }
      }
  })
}
)

const switchNavigator = createSwitchNavigator({
  TabNavigator: { screen: TabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
