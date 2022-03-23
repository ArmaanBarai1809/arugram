import React, { useState, createRef, Component } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
export default class Home extends Component {
  render() {
    return (
        
        // Container
      <View style={styles.container}>
          <SafeAreaView style={styles.androidsafetyview}>
          {/* UpperBar */}
        <View style={styles.upperbar}>
            {/* Title */}
            <Image></Image>
            <Text style={styles.title}>Arugram</Text>
            
            {/* Title End */}
        </View>
          {/* UpperBar End*/}

        {/* Posts Feed */}
        <View style={styles.posts}>
        <View style={styles.post1}></View>
        <View style={styles.post2}></View>
        </View>
        {/* Posts Feed End*/}
        
        {/* Navigation Bar */}
        {/* <View style={styles.navbar}></View> */}
        {/* Navigation Bar End*/}
        </SafeAreaView>
      </View>
      
    //   Container End
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2D303F',
    // alignItems: 'center',
    //   justifyContent: 'center',
    },
    upperbar: {
        width: "100%",
        backgroundColor: '#393D50',
        height: 130,
        alignItems: 'center'
    },
    posts: {
        flex: 1,
        alignItems: 'center',
    },
    post1: {
        width: "85%",
        backgroundColor: '#393D50',
        height: 390,
        marginTop: 25,
        borderRadius: 15
    },
    post2: {
        width: "85%",
        backgroundColor: '#393D50',
        height: 390,
        marginTop: 25,
        borderRadius: 15
    },
    navbar: {
        width: "100%",
        backgroundColor: '#5F647B',
        height: 70,
        marginTop: 25,
        borderRadius: 20,
    },
    title: {
        marginTop: 40,
        fontSize: 25,
        color: 'white',
        fontStyle: 'italic',
    },
    androidsafetyview: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    }

  });