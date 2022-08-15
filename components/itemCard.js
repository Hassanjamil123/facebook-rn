import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';


const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const ItemCard = () => {
  return (
    <View style={styles.container}>
        <View style={styles.fullView}>
            <View style={styles.item1}>
                <View>
                    <Image 
                    source={require('../assets/item1.jpeg')}
                    style={{
                        resizeMode: 'cover',
                        width: '100%',
                        height: 230
                    }}
                    />
                </View>
                <View style={{
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 15, fontWeight: '500'}}>Free . Imported Joggers</Text>
                </View>
            </View>
            <View style={styles.item2}>
                 <View>
                    <Image 
                    source={require('../assets/item2.jpeg')}
                    style={{
                        resizeMode: 'cover',
                        height: 230
                    }}
                    />
                </View>
                <View style={{
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 15, fontWeight: '500'}}>Rs45,000 . Iphone 8plus</Text>
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
    justifyContent: 'center'
  },
  fullView: {
      backgroundColor: '#fff',
      width: screenWidth,
      height: 265,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  item1: {
      width: '49%'
  },
  item2: {
      width: '49%'
  }

});

export default ItemCard;