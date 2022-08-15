import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {AntDesign, FontAwesome5,Octicons, Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const NotificationCard = () => {
  return (
    <View style={styles.container}>
        <View style={styles.notifyBody}>
                <View style={styles.p1}>
                    <View style={{
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image 
                        source={require('../assets/chessbase.jpeg')}
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
                        <Text style={{fontSize: 14}}><Text style={{fontWeight: '600'}}>Chessbase India</Text> posted 2 new videos, including
                        "The language of chess makes us understand eachother ver..."
                        </Text>
                    </View>
                    <View style={{
                        marginLeft: -210,
                        marginTop: -5
                    }}>
                        <Text style={{color: 'grey', fontSize: 13}}>1 h</Text>
                    </View>
                </View>
                <View style={styles.p3}>
                    <Octicons name="kebab-horizontal" size={21} color="black" />
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
  newNotify: {
      margin: 10,
      marginTop: 0,
      width: screenWidth - 30,
      //backgroundColor: 'black'
  }, 
  notifyBody: {
      backgroundColor: '#DAE7F2',
      width: screenWidth,
      height: 100,
      flexDirection: 'row'
  },
   p1: {
       width: 90,
       height: 100,
       justifyContent: 'center',
       alignItems: 'center'
   },
   p2: {
    width: '65%',
    height: 100,
    alignItems: 'center'
    },
    p3: {
        width: 40,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default NotificationCard;