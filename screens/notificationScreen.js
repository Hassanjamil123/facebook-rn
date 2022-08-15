import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {AntDesign, FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons';
import NotificationCard from '../components/notificationCard';


const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;


const NotificationScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar color="auto" />
        <View style={styles.header}>
            <View style={styles.h1}>
                <Text style={styles.marketPlaceText}>Notifications</Text>
            </View>
            <View style={styles.h2}>
                <View style={styles.h22}>
                    <Ionicons name="search" size={21} color="black"/>
                </View>
            </View>
        </View>
        <View style={styles.newNotify0}>
            <View style={styles.newNotify}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#454545'
                }}>
                    New
                </Text>
            </View>
            <View style={{
                width: screenWidth,
                height: 100,
            }}>
                <NotificationCard />
            </View>
            <View style={{
                width: screenWidth,
                height: 90,
            }}>
                <NotificationCard />
            </View>
        </View>
        <View style={styles.newNotify0}>
            <View style={styles.newNotify}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#454545'
                }}>
                    Earlier
                </Text>
            </View>
            <View style={{
                width: screenWidth,
                height: 90,
            }}>
                <View style={styles.notifyBody}>
                <View style={styles.p1}>
                    <View style={{
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image 
                        source={require('../assets/profile1.png')}
                        style={{
                            resizeMode: 'contain',
                            width: 65,
                            height: 65,
                            borderRadius: 35
                        }}
                        />
                    </View>
                </View>
                <View style={styles.p2}>
                    <View style={{
                        margin: 10
                    }}>
                        <Text style={{fontSize: 14}}><Text style={{fontWeight: '600'}}>Yahya Jamil</Text> mentioned you in a 
                        comment.
                        </Text>
                    </View>
                    <View style={{
                        marginLeft: 10,
                        marginTop: -5
                    }}>
                        <Text style={{color: 'grey', fontSize: 13}}>15 h</Text>
                    </View>
                </View>
                <View style={styles.p3}>
                    <Octicons name="kebab-horizontal" size={21} color="black" />
                </View>
            </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: screenWidth,
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  h1: {
      //backgroundColor: 'aqua',
      width: 180,
      justifyContent: 'center',
      alignItems: 'center'
  }, 
  marketPlaceText: {
      fontSize: 27,
      fontWeight: 'bold',
      marginTop: 30
  },
  h2: {
      flexDirection: 'row',
      //backgroundColor: 'red',
      width: 120,
      justifyContent: 'center',
      alignItems: 'center',
  },
  h22: {
    margin: -5,
    marginTop: 27,
    marginLeft: 45,
    backgroundColor: '#DCDCDC',
    width: 33,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  newNotify0: {
   // backgroundColor: 'grey',
    height: 270,
    marginTop: -10
  },
  newNotify: {
      margin: 10,
      marginTop: 0,
      width: screenWidth - 30,
  }, 

  notifyBody: {
    backgroundColor: '#DAE7F2',
    width: screenWidth,
    height: 100,
    flexDirection: 'row'
},
 p1: {
     width: 80,
     height: 100,
     justifyContent: 'center',
     alignItems: 'center'
 },
 p2: {
  width: '65%',
  height: 100,
  margin: 5
  },
  p3: {
      width: 40,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center'
  },
});

export default NotificationScreen;