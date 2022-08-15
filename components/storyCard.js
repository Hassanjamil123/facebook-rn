import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, FontAwesome5, Feather} from '@expo/vector-icons';


const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const StoryCard = () => {
  return (
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    style={styles.container}>
        {/* <View style={styles.firstStory}> */}
            <LinearGradient 
            style={styles.firstStory}
            colors={['royalblue', 'aqua', '#454545']}
            >
                <Ionicons name="ios-musical-notes" size={30} color="white"/>
                <Text style={{marginTop: 10, color: '#fff', fontWeight: '500'}}>Add Music</Text>
            </LinearGradient>
        {/* </View> */}
        <View style={styles.secondStory}>
            <View style={styles.createStory}>
                <View style={styles.image}> 
                    <Image
                    source={require('../assets/profile.png')}
                    style={{
                        width: 108,
                        height: 120,
                        borderRadius: 15,
                        resizeMode: 'cover',
                    }}
                    />
                </View> 
                <View style={styles.textView}>
                    <Ionicons name="add-circle" color="royalblue" size={28} style={{marginTop: -20}}/>
                    <Text style={styles.text}>
                        Create 
                    </Text>
                    <Text style={styles.text}>story</Text>
                </View>

            </View> 
        </View>
        <View style={styles.thirdStory}>
                <Image 
                source={require('../assets/puzzle.jpeg')}
                style={{
                    width: 110,
                    height: 170, 
                    position: 'absolute',
                    marginTop: 5,
                    resizeMode: 'contain'
                }}
                blurRadius={1.5}
                />
            <View style={styles.topView}>
                 <Image 
                    source={require('../assets/fide.png')}
                    style={{
                        width: 25,
                        height: 25,
                        zIndex: 1000,
                    }}
                />
            </View>   
            <View style={styles.bottomText}>
                <Text style={styles.text2}>FIDE -</Text>
                <Text style={styles.text2}>International C...</Text>
            </View>  
        </View> 
        <View style={styles.thirdStory} /> 
        <View style={styles.thirdStory} /> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: screenWidth
  },
  firstStory: {
      backgroundColor: '#e9e9e9',
      width: 110,
      height: 175,
      borderRadius: 15,
      margin: 7,
      left: 5,
      justifyContent: 'center',
      alignItems: 'center'
  },
  secondStory: {
    backgroundColor: '#fff',
    width: 110,
    height: 175,
    borderRadius: 15,
    margin: 7,
    borderWidth: 0.17,
    borderColor: 'grey'
  },
  thirdStory: {
    backgroundColor: '#e9e9e9',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 110,
    height: 175,
    borderRadius: 15,
    margin: 7,
  //  left: 5
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  textView: {
      width: 110,
      height: 50,
      justifyContent:'center',
      alignItems: 'center',      
  },
  text: {
      color: '#000',
      fontWeight: '400'
  },
  topView: {
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      backgroundColor: 'white',
      width: 35,
      height: 35,
      borderRadius: 30,
      margin: 10,
      marginLeft: 5
  },
  bottomText: {
    height: 40,
    marginTop: -30
  },
  text2: {
      fontWeight: '500',
      fontSize: 13,
      left: 5
  }
});

export default StoryCard;