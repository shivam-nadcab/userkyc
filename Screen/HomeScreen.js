import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FlashMessage from "react-native-flash-message";
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
  const navigation=useNavigation()
  return (
    <View>
     {/* <RBSheet
        ref={refDocSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={450}
        draggableIcon={false}
        openDuration={400}
        customStyles={{
          container: {
            backgroundColor: '#fff',
          },
        }}> */}
        <View style={{height:'100%',backgroundColor:'#fff'}}>
        <View
          style={{
            flex: 1,
            width: '100%',
            padding: 10,
          }}>
          <View style={{alignItems: 'center', paddingVertical: wp(2),marginTop:wp(10)}}>
            <Text
              style={{
                fontSize: 26,
                color: '#000',
                fontWeight: '600',
                paddingHorizontal: 10,
                marginBottom: wp(2),
                textTransform: 'uppercase',
              }}>
              Select Document
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginHorizontal: wp(4),
              marginTop: wp(4),
            }}>
            <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.sheetCard}
                onPress={() => {
                  navigation.navigate('PanCardVerification', 
                  // {
                  //   documentType: 'Passport', // Pass the data you want to send here
                  // }
                  );
                  // closeDocSheet(); // Optionally close the bottom sheet
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../assets/image/pp.jpg')}
                    style={{
                      width: wp(9),
                      height: wp(9),
                      marginEnd: wp(2),
                    }}
                  />
                  <Text style={styles.headinglabels}>Pan Card</Text>
                </View>

                <View>
                  <MaterialIcons
                    style={styles.arrowIcon}
                    name="keyboard-arrow-right"
                    size={20}
                  />
                </View>
              </TouchableOpacity>
            <TouchableOpacity
                style={styles.sheetCard}
                onPress={() => {
                  navigation.navigate('AadharCardVerification'
                  // , 
                  // {
                  //   documentType: 'Aadhar Card',
                  // }
                  );
                  // closeDocSheet();
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../assets/image/id-card.png')}
                    style={{
                      width: wp(9),
                      height: wp(9),
                      marginEnd: wp(2),
                    }}
                  />
                  <Text style={styles.headinglabels}>Adhaar Card ID</Text>
                </View>

                <View>
                  <MaterialIcons
                    style={styles.arrowIcon}
                    name="keyboard-arrow-right"
                    size={20}
                  />
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.sheetCard}
                onPress={() => {
                  navigation.navigate('ManualKycUploadDoc', {
                    documentType: 'Passport', // Pass the data you want to send here
                  });
                  closeDocSheet(); // Optionally close the bottom sheet
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../assets/image/passport.png')}
                    style={{
                      width: wp(9),
                      height: wp(9),
                      marginEnd: wp(2),
                    }}
                  />
                  <Text style={styles.headinglabels}>Passport</Text>
                </View>

                <View>
                  <MaterialIcons
                    style={styles.arrowIcon}
                    name="keyboard-arrow-right"
                    size={20}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sheetCard}
                onPress={() => {
                  navigation.navigate('ManualKycUploadDoc', {
                    documentType: 'Voter ID',
                  });
                  closeDocSheet();
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../assets/image/adhara-card.png')}
                    style={{
                      width: wp(9),
                      height: wp(9),
                      marginEnd: wp(2),
                    }}
                  />
                  <Text style={styles.headinglabels}>Voter ID</Text>
                </View>

                <View>
                  <MaterialIcons
                    style={styles.arrowIcon}
                    name="keyboard-arrow-right"
                    size={20}
                  />
                </View>
              </TouchableOpacity>

              
              <FlashMessage position="top" />
            </View>
          </View>
        </View>
      {/* </RBSheet> */}
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      width: '100%',
      paddingVertical: 15,
      // backgroundColor: 'rgba(0,0,0,0.08)',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(5),
    },
    pageWrapper: {
      marginHorizontal: wp(6),
      marginVertical: wp(2),
    },
    profileCards: {
      paddingHorizontal: wp(3),
      marginHorizontal: wp(4),
      paddingVertical: wp(3),
      backgroundColor: '#fff',
      marginVertical: hp(1),
      color: '#444',
      borderRadius: wp(2),
      shadowColor: '#666',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
    },
  
    profileCardsInner: {
      flexDirection: 'column',
      // justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      padding: wp(2),
      borderWidth: 0.5,
      borderColor: '#000',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: wp(5),
      marginTop: wp(2),
      width: wp(32),
    },
    buttonText: {
      color: '#000',
    },
  
    title: {
      fontSize: wp(5),
      fontWeight: '500',
    },
    titleBox: {
      marginLeft: wp(7),
    },
    leftIocnStyle: {
      // width: wp(15),
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  
    infowrapper: {
      // paddingHorizontal: wp(2),
      paddingVertical: wp(4),
      // borderRadius: wp(4),
      // marginVertical: wp(2),
      // borderColor: '#ccc',
      // borderWidth: 0.5,
    },
  
    listItem: {
      color: '#999',
      marginBottom: wp(4),
      lineHeight: 20,
      // textAlign:'center',
      fontSize: wp(3.2),
    },
    bullet: {
      fontSize: 13,
      marginRight: 5,
      color: '#333',
    },
    displayHori: {
      flexDirection: 'row',
      marginBottom: wp(2),
      width: 290,
    },
    input: {
      color: '#444',
      height: hp(5),
      backgroundColor: '#f3f4f7',
      textTransform: 'uppercase',
      width: '85%',
      // borderWidth: 0.5,
      // borderColor: '#ccc',
      alignSelf: 'center',
      paddingHorizontal: 10,
      fontSize: 13,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: wp(3),
    },
    ModalInputBox: {
      color: '#444',
      height: hp(5),
      backgroundColor: '#eee',
      textTransform: 'uppercase',
      // width: '85%',
      // borderWidth: 0.5,
      // borderColor: '#ccc',
      paddingHorizontal: 10,
      fontSize: 13,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: wp(3),
    },
  
    send: {
      alignSelf: 'center',
      padding: 12,
      backgroundColor: '#000',
      borderRadius: 7,
      width: '86%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      flexDirection: 'row',
      marginBottom: 30,
    },
  
    verifyBtn: {
      alignSelf: 'center',
      padding: 12,
      backgroundColor: '#000',
      borderRadius: 7,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      flexDirection: 'row',
      marginTop: wp(5),
    },
    remove: {
      display: 'none',
    },
    textInputContainer: {
      flexDirection: 'row',
    },
  
    roundedTextInput: {
      borderRadius: 5,
      borderWidth: 0.6,
      backgroundColor: '#fff',
      width: 45,
      height: 45,
      borderColor: '#333',
      borderBottomWidth: 0.6,
      borderColor: '#333',
    },
  
    sendDisabled: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#000',
    },
  
    sendBtnTxt: {
      color: '#fff',
      fontWeight: 600,
      fontSize: 15,
    },
    sendBtnTxtDisabled: {
      color: '#000',
      fontWeight: 'normal',
    },
  
    selectCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: wp(2),
      paddingHorizontal: wp(3),
      paddingVertical: wp(3),
    },
  
    wrapper: {
      borderRadius: wp(2),
      color: '#888',
      width: '100%',
      // paddingHorizontal: wp(2),
      marginVertical: hp(1),
    },
    labels: {
      color: '#666',
      fontSize: hp(1.6),
      paddingBottom: wp(1.5),
    },
  
    sheetCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#f3f4f8',
      borderRadius: wp(2),
      paddingHorizontal: wp(3),
      paddingVertical: wp(3),
      marginVertical: wp(2),
    },
  
    headinglabels: {
      color: '#444',
    },
  });