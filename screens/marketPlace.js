import React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import {Ionicons, FontAwesome, Feather, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import ItemCard from '../components/itemCard';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const  MarketPlace = () => {
  return (
    <View style={styles.container}>
        <StatusBar color="auto" />
        <View style={styles.header}>
            <View style={styles.h1}>
                <Text style={styles.marketPlaceText}>Marketplace</Text>
            </View>
            <View style={styles.h2}>
                <View style={styles.h21}>
                    <FontAwesome name="user" size={21} color="black" />
                </View>
                <View style={styles.h22}>
                    <Ionicons name="search" size={21} color="black"/>
                </View>
            </View>
        </View>
        <ScrollView>
        <View style={styles.header2}>
            <View style={styles.sellView}>
                <MaterialCommunityIcons name="comment-account-outline" size={18} color="black" />
                <Text style={styles.sellText}>Sell</Text>
            </View>
            <View style={styles.categoryView}>
                <Feather name="menu" size={18} color="black" />
                <Text style={styles.categoryText}>Categories</Text>
            </View>
        </View>
        <View style={styles.separator}></View>
      
        <View style={styles.middleView}>
            <View style={styles.topView}> 
                <View style={styles.textView}>
                    <Text style={styles.text}>Today's picks</Text>
                </View>
                <View style={styles.locationView}>
                    <Entypo name="location-pin" size={18} color="royalblue" />
                    <Text style={styles.locationText}>
                        Peshawar, Pakistan
                    </Text>
                </View>
            </View>
            <View style={{
                width: screenWidth,
                height: 270
            }}>
                <ItemCard />
            </View>
            <View style={{
                width: screenWidth,
                height: 270
            }}>
                <ItemCard />
            </View>
            <View style={{
                width: screenWidth,
                height: 270
            }}>
                <ItemCard />
            </View>
        </View>
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
      //backgroundColor: 'grey',
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
  h21: {
      margin: 10,
      marginTop: 35,
      backgroundColor: '#DCDCDC',
      width: 33,
      height: 33,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30
  },
  h22: {
    margin: 0,
    marginTop: 25,
    backgroundColor: '#DCDCDC',
    width: 33,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  header2:{
      backgroundColor: '#fff',
      flexDirection: 'row',
      width: screenWidth - 30,
      height: 60,
      margin: 10,
      marginTop: 2,
  },
  sellView: {
      backgroundColor: '#DCDCDC',
      width: '49%',
      height: 40,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
  },
  sellText: {
      fontSize: 15,
      fontWeight: '500', 
      left: 5
  },
  categoryView: {
      backgroundColor: '#DCDCDC',
      width: '49%',
      height: 40,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      left: 5,
      flexDirection: 'row'
  },
  categoryText: {
      fontSize: 15,
      fontWeight: '500',
      left: 5 
  },
  separator: {
      width: screenWidth - 30,
      height: 0.4,
      backgroundColor: '#d0d0d0',
      elevation: 3,
      margin: 10,
      marginTop: -15,
  },
  middleView: {
      //backgroundColor: 'grey',
      width: screenWidth,
      height: screenHeight
  },
  topView: {
    //  backgroundColor: 'aqua',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between'
  },
  textView: {
      margin: 10,
      marginTop: -0,
      width: '40%'
  },
  text: {
      fontSize: 17,
      fontWeight: 'bold'
  },
  locationView: {
      flexDirection: 'row',
      margin: 10,
      marginTop: -0,
      left: -5,
      width: '40%'
  }, 
  locationText: {
    color: 'royalblue',
    fontSize: 15
  }
  
});

export default MarketPlace;