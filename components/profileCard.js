import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import ProfileScreen from '../screens/profileScreen';
import {AntDesign, FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const ProfileCard = () => {
    return(
        <View style={styles.container}>
            <View style={styles.profileCardView}>
                <View style={styles.coverPhoto}>
                    <View style={styles.coverTextView}>
                        <Text style={styles.coverText}>Show people what you care about.</Text>
                    </View>
                    <View style={styles.addCoverView}>
                        <Ionicons name="add-outline" size={20} color="black"/>
                        <Text style={styles.addCoverText}>Cover Photo</Text>
                    </View>
                    <View style={styles.profilePhotoView}>
                        <View style={styles.pictureView}>
                            <Image 
                            source={require('../assets/userProfile.jpeg')}
                            style={{
                                resizeMode: 'contain',
                                width: 135,
                                height: 135
                            }}
                            />
                        </View>
                    </View>
                    <View style={styles.nameView}>
                        <Text style={styles.nameText}>Hassan Jamil</Text>
                    </View>
                    <View style={styles.aboutView}>
                        <Text style={styles.aboutText}>Turn the world upside down!</Text>
                    </View>

                    <View style={styles.allView}>
                        <View style={styles.addStory}>
                            <Ionicons name="add-circle" size={20} color="white"/>
                            <Text style={styles.addStoryText}>Add to Story</Text>
                        </View>
                        <View style={styles.editProfile}>
                        <FontAwesome5 name="pen" size={15} color="black"/>
                            <Text style={styles.editProfileText}>
                                Edit Profile
                            </Text>
                        </View>
                        <View style={styles.icon}>
                            <Octicons name="kebab-horizontal" size={19} color="black" />
                        </View> 
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.whatsNewView}>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '600'
                        }}>
                            What's new, Hassan?
                        </Text>
                        <Text style={{
                            fontSize: 15,
                            color: '#454545',
                            top: 4
                        }}>
                            Let's update some profile info that may have changed.
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <View style={styles.notNow}>
                            <Text style={{
                                color: '#454545',
                                fontWeight: '600'
                            }}>Not Now</Text>
                        </View>
                        <View style={styles.updateProfile}>
                            <Text style={{
                                color: '#fff',
                                fontWeight: '600'
                            }}>Update Profile</Text>
                        </View>
                    </View>
                    <View style={styles.secondlastView}>
                        <Octicons name="kebab-horizontal" size={20} color="#454545" />
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '500',
                            left: 10
                        }}> See Your About Info</Text>
                    </View>
                    <View style={styles.editPublicView}>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: '500',
                            color: 'royalblue'
                        }}>
                            Edit Public Details
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileCardView: {
        backgroundColor: '#fff',
        width: screenWidth,
        height: screenHeight
    },
    coverPhoto: {
        backgroundColor: 'grey',
        margin: 15,
        height: 230,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 15,
        alignItems: 'center'
    },
    coverTextView: {
        padding: 25
    },
    coverText: {
        color: '#fff'
    },
    addCoverView: {
        flexDirection: 'row',
        height: 30,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5
    },
    addCoverText: {
        fontWeight: '600'
    },
    profilePhotoView: {
        backgroundColor: '#fff',
        marginTop: 30,
        width: 200,
        height: 200,
        borderRadius: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pictureView: {
        width: 190,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d0d0d0',
        borderWidth: 1,
        borderRadius: 100
    },
    nameView: {
        marginTop: 10
    },
    nameText: {
        fontSize: 22,
        fontWeight:'600'
    },
    aboutView: {
        marginTop: 10
    },
    aboutText: {
        color: '#454545',
        fontSize: 17
    },
    allView: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-around'
    }, 
    addStory:{
        flexDirection: 'row',
        backgroundColor: 'royalblue',
        width: 150,
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -20
    }, 
    addStoryText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
        left: 5
    },
    editProfile: {
        flexDirection: 'row',
        backgroundColor: '#d0d0d0',
        width: 150,
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        left: 7
    },
    editProfileText: {
        fontWeight: '600',
        left: 5
    }, 
    icon: {
        backgroundColor: '#d0d0d0',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 40,
        left: 10,
        borderRadius: 5
    },
    separator: {
        width: screenWidth - 40,
        height: 0.6,
        backgroundColor: '#d0d0d0',
        elevation: 3,
        margin: 0,
        marginTop: 0,
    },
    whatsNewView: {
        backgroundColor: '#FAFAFA',
        marginTop: 10,
        width: '100%',
        height: 60,
        marginLeft: 10
        },
        buttonView: {
            flexDirection: 'row',
            backgroundColor: '#FAFAFA',
            width: '100%',
            height: 60,
            marginLeft: 10,
            alignItems: 'center'
        },
        notNow: {
            backgroundColor: '#d0d0d0',
            justifyContent: 'center',
            alignItems: 'center',
            width: '48%',
            height: 40,
            borderRadius: 5
        },
        updateProfile: {
            backgroundColor: 'royalblue',
            justifyContent: 'center',
            alignItems: 'center',
            width: '48%',
            height: 40,
            borderRadius: 5,
            left: 10
        },
        secondlastView: {
            //backgroundColor: 'grey',
            width: '95%',
            height: 40,
            flexDirection: 'row',
            alignItems: 'center' 
        },
        editPublicView: {
            backgroundColor: '#bfc4dc',
            width: '100%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
        }
    

});

export default ProfileCard;