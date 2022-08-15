import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView } from 'react-native';
import {Ionicons, FontAwesome5, Feather} from '@expo/vector-icons';
import StoryCard from '../components/storyCard';
import PostCard from '../components/postCard';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const  HomeScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.h1}>
                <Image 
                source={require('../assets/facebook-header.png')}
                style={styles.logo}
                />
            </View>
            <View style={styles.h2}>
                <View style={styles.h12}>
                    <Ionicons name="search" size={23} color="black"/>
                </View>
                <View style={styles.h13}>
                    <FontAwesome5 name="facebook-messenger" size={23} color="black"/>
                </View>
            </View>
        </View>
        <View style={styles.separator}></View>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.writeView}>
            <View style={styles.icon}>
                <Feather name="user" size={23} color="white" />
            </View>
            <View style={styles.textInputView}>
                <TextInput placeholder="What's on your mind?" placeholderTextColor="#000" />  
            </View>  
        </View>
        <View style={styles.separator1} />
        <View style={styles.storyView}>
            <StoryCard />       
        </View>
        
        <View style={styles.separator1} />
        <PostCard />

        <View style={styles.separator1} />
        <PostCard />

        <View style={styles.separator1} />
        <PostCard />

        <View style={styles.separator1} />
        <PostCard />

        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#d0d0d0',
    //backgroundColor: 'grey'
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: screenWidth,
    height: 115,
    margin: 2,
    justifyContent: 'space-between'

  },
  h1: {
      margin: 5
  },
  h2: {
    margin: 5,
    flexDirection: 'row',
    marginTop: 45
  },
  h12: {
    backgroundColor: '#e9e9e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    width: 35,
    height: 35,
    borderRadius: 30
  },
  h13: {
    backgroundColor: '#e9e9e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    width: 35,
    height: 35,
    borderRadius: 30
  },
  logo: {
      width: 130,
      height: 110,
      left:10
  },
  separator: {
      width: screenWidth,
      height: 0.2,
      backgroundColor: '#d0d0d0',
  },
  writeView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: screenWidth,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //marginLeft: 15,
    //marginTop: 10
  },
  icon: {
        backgroundColor: '#898F9C',
        width: 37,
        height: 37,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 10
  },
  textInputView: {
      margin: 10,
      marginTop: 20
  }, 
  storyView: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      top: 5,
      width: screenWidth,
      height: 190, 
      justifyContent: 'center'
  }, 
  firstStory: {
      backgroundColor: '#e9e9e9',
      width: 125,
      height: 175,
      borderRadius: 20,
      margin: 7,
  },
  separator1: {
    backgroundColor: '#d0d0d0',
    borderBottomColor: '#d0d0d0',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 10,
    marginTop: 10
  }
  
});

export default HomeScreen;