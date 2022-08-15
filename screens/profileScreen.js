import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import {AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import ProfileCard from '../components/profileCard';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.midTopView}>
                <Text style={styles.nameText}>Hassan Jamil</Text>
                <View style={styles.notification}>
                    <Text style={{color: 'white', fontSize: 12}}>2</Text>
                </View>
                <AntDesign name="caretdown" size={10} color="black" style={{left: 8, top: 2}}/>
            </View>
            <View style={styles.endTopView}>
                <FontAwesome5 name="pen" size={17} color="black" style={{left: 12, top: 2}}/>
                <Ionicons name="search" size={21} color="black"/>
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <ProfileCard />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
      backgroundColor: '#fff',
      width: screenWidth,
      height: 100,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.2,
      borderBottomColor: '#d0d0d0'
  },
  midTopView: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 135
  },
  notification: {
      backgroundColor: '#BF0000',
      width: 15,
      height: 15,
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 30,
      left: 3
  },
  nameText: {
      fontSize: 17,
      fontWeight: '600',
       color: '#454545'
  },
  endTopView: {
      flexDirection: 'row',
      marginTop: 25,
      width: 80,
      justifyContent: 'space-around'
  }
});

export default ProfileScreen;
