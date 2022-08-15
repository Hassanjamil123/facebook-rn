import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import {AntDesign, Entypo, FontAwesome5, MaterialIcons} from '@expo/vector-icons';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

 const PostCard = () => {
  return (
    <View style={styles.container}>
        <View style={styles.postView}>
            <View style={styles.postHeader}>
                <View style={styles.profilePhotoView}>
                    <Image 
                    source={require('../assets/profilephoto.png')}
                    style={styles.profilePhoto}
                    />
                </View>
                <View style={styles.profileName}>
                    <View style={{flexDirection: 'row', marginTop: -12}}>
                        <Text style={{fontWeight: '500', fontSize: 14}}> Bleacher Report Football</Text> 
                        <MaterialIcons name="verified" size={14} color="royalblue" style={{left: 2, top: 1}}/>
                    </View>
                    <View style={styles.icons}>
                        <Entypo name="dots-three-horizontal" size={20} color="black" />
                        <Entypo name="cross" size={20} color="black" style={{left: 7}}/>
                    </View>
                </View>
            </View>
            <View style={styles.timeView}>
                    <Text style={{
                        fontSize: 12,
                        color: '#454545'
                    }}>
                        12 h .
                    </Text>
                    <FontAwesome5 name="globe-asia" size={12} color="grey" style={{left: 5}}/>
            </View>
            <View style={styles.captionView}> 
                <Text style={styles.caption}>
                    Pedri has reached a verbal agreement to join LA Galaxy, reports <Text style={{color: 'royalblue'}}>Diario AS</Text>
                </Text>
            </View>
            <View style={styles.photoView}>
                <Image 
                source={require('../assets/pedri.png.webp')}
                style={styles.photo}
                />
            </View>
            <View style={styles.reactsView}>
                <View style={styles.a1}>
                    <Image 
                    source={require('../assets/like.png')}
                    style={{width: 15, height: 15}}
                    />
                    <Image 
                    source={require('../assets/sad.png')}
                    style={{width: 15, height: 15}}
                    />
                    <Image 
                    source={require('../assets/love.png')}
                    style={{width: 15, height: 15}}
                    />
                    <Text style={{color: '#454545'}}> 78.4k</Text>    
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={styles.a2}>
                        <Text style={{color: '#454545'}}>3.3k comments</Text>
                    </View>
                    <View style={styles.a3}>
                        <Text style={{color: '#454545'}}>1.7k shares</Text>
                    </View>
                </View>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.lcsView}>
                <View style={styles.likeView}>
                    <AntDesign name="like2" size={16} color="#454545"/>
                    <Text style={{left: 5, color: '#454545', fontWeight: '500'}}>Like</Text>
                </View>
                <View style={styles.commentView}>
                    <FontAwesome5 name="comment-alt" size={16} color="#454545" />
                    <Text style={{left: 5, color: '#454545', fontWeight: '500'}}>Comment</Text>
                </View>
                <View style={styles.shareView}>
                <FontAwesome5 name="share-square" size={16} color="#454545" />
                    <Text style={{left: 5, color: '#454545', fontWeight: '500'}}>Share</Text>
                </View>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    },
postView: {
    width: screenWidth,
    height: screenHeight - 210,
    backgroundColor: '#fff',
    marginTop: 15,
    left: 0
    },
postHeader: {
    backgroundColor: '#fff',
    width: screenWidth,
    margin: 5,
    marginLeft: 5,
    top: 5,
    flexDirection: 'row'
},
profilePhotoView: {
    backgroundColor: '#fff',
    width: 37,
    height: 37,
    borderRadius: 30
    },
profilePhoto: {
    width: 37,
    height: 37,
    borderRadius: 30 
}, 
profileName:{
    flexDirection: 'row',
    margin: 5,
    width: '87%',
    justifyContent: 'space-between',
    alignItems: 'center'
},
icons: {
    flexDirection: 'row',
    left: -10
}, 
timeView: {
    flexDirection: 'row',
    width: '20%',
    margin: 10,
    marginLeft: 54,
    marginTop: -15
},
captionView: {
    backgroundColor: '#fff',
    width: screenWidth - 40,
    height: 50,
    margin: 5,
    marginLeft: 10,
},
caption: {
    fontWeight: '400',
    fontSize: 15
},
photoView: {
    width: '100%',
    height: screenHeight - 400,
    left: 2
},
photo: {
    width: screenWidth,
    height: screenHeight - 400,
    resizeMode: 'cover'
},
reactsView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 43,
    alignItems: 'center',
    justifyContent: 'space-between'
}, 
a1: {
    flexDirection: 'row',
    left: 10
}, 
a2: {
    left: -20
}, 
a3: {
    left: -10
},
lcsView: {
    flexDirection: 'row',
},
likeView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '33.3%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
},
commentView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '33.3%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
},
shareView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '33.3%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
},
  separator: {
      width: screenWidth,
      height: 0.4,
      backgroundColor: '#d0d0d0',
      elevation: 3
  },

});

export default PostCard;