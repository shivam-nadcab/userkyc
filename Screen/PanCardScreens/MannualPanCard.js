import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    StatusBar,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Entypo from 'react-native-vector-icons/Entypo';
  import LottieView from 'lottie-react-native';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {useNavigation} from '@react-navigation/native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Toast from 'react-native-toast-message';
  import {Image} from 'react-native-ui-lib';
  import {ScrollView} from 'react-native-gesture-handler';
  import LinearGradient from 'react-native-linear-gradient';
  
  const MannualPanCard = () => {
    // const {user} = useSelector(state => state.auth);
    const [loading, setloading] = useState(false);
    const [panNumber, setPanNumber] = useState('');
    const [panHolderName, setPanHolderName] = useState('');
    const [panCardError, setPanCardError] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [dob,setDob]=useState('');
    const [storedPanNumber,setStoredPanNumber]=useState('');
    const [gender,setGender]=useState()
    const navigation = useNavigation();
  
    // Regular expression pattern for a valid PAN card number
    const panCardRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
  
    // async function kycverifyPanNumber(panNumber) {
    //   if (panCardRegex.test(panNumber) && user?.mobile) {
    //     try {
    //       setloading(true);
    //       axios
    //         .post(
    //           'https://kyc-api.surepass.io/api/v1/pan/pan',
    //           {
    //             id_number: panNumber,
    //           },
    //           {
    //             headers: {
    //               'Content-Type': 'application/json',
    //               Authorization:
    //                 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTI4OTg5NiwianRpIjoiMmFmODgwMWUtNTU0NC00NDMzLWJlNWYtOGU5ZmFlNThhNDQ4IiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LmJpdGZsYXNoQGFhZGhhYXJhcGkuaW8iLCJuYmYiOjE2NDEyODk4OTYsImV4cCI6MTk1NjY0OTg5NiwidXNlcl9jbGFpbXMiOnsic2NvcGVzIjpbInJlYWQiXX19.8-DTl7BMrqnimNXINKxRymjLp7tEyR96T4jLIG67STg',
    //               responseType: 'json',
    //             },
    //           },
    //         )
    //         .then(async data => {
    //           const res = data?.data;
    //           if (res) {
    //             const {pan_number, full_name} = res.data;
    //             setPanHolderName(full_name);
    //             const isexist = await userCollection.checkUser(user?.mobile);
    //             if (isexist) {
    //               const userdata = await userCollection.getUser(user?.mobile);
    //               const uobj = {...userdata};
    //               uobj.panNumber = pan_number;
    //               uobj.panHolderName = full_name;
    //               uobj.panKyc = 1; // Set panKyc to 1
    //               await userCollection.updateUser({...uobj});
    //               const user_kyc_status = {
    //                 pankyc: 1,
    //                 aadharkyc: 0,
    //                 aadhardockyc: 0,
    //               };
    //             //   dispatch(setUserKycStatus(user_kyc_status));
    //               setloading(false);
    //               // handleSaveAndNext();
    //             }
    //           }
    //         })
    //         .catch(error => {
    //           console.error(error);
    //         });
    //     } catch (e) {
    //       setloading(false);
    //       Toast.show({
    //         type: 'error',
    //         text1: 'Something went wrong',
    //         text2: 'Please try again',
    //       });
    //       console.log('inside catch');
    //       console.log(e, 'error in checkpan ');
    //     }
    //   } else {
    //     setloading(false);
    //     setPanCardError('Invalid Pan Number');
    //     Toast.show({
    //       type: 'error',
    //       text1: 'Invalid Pan Number',
    //       text2: 'PAN Number should be in the format ABCDE1234F',
    //     });
    //   }
    // }
    

    

    async function kycverifyPanNumber(panNumber) {
        if (panCardRegex.test(panNumber)) {
          try {
            setloading(true);
      
            // URL of the API endpoint
            const apiUrl = "https://glorious-disco-55px5gp7wx4f4qpg-8000.app.github.dev/api/validate_save_pan";
      
            // Data to be sent in the request body
            const postData = {
              pan: panNumber,
            };
      
            // Options for the fetch request
            const options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNDkwNjYxNCwianRpIjoiMDljYzMzMzMtY2ZhNS00ZGI5LWIwMjktZDMxYzMxODQ1MTQ1IiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2Lm5hZGNhYkBzdXJlcGFzcy5pbyIsIm5iZiI6MTcwNDkwNjYxNCwiZXhwIjoxNzA3NDk4NjE0LCJ1c2VyX2NsYWltcyI6eyJzY29wZXMiOlsidXNlciJdfX0.9LPdnXNmlg8VeMI8c8iiagF_BfWMZk8-Vb1gUSMNc4s", // Replace with your actual access token
              },
              body: JSON.stringify(postData),
            };
      
            // Make the POST request
            const response = await fetch(apiUrl, options);
            const data = await response.json();
      
            if (data) {
                console.log(data,'datatatat')
              const { pan_number, full_name,dob,gender } = data.data;
              // let pn=pan_number.toUpperCase();
              // console.log(pn,'pn');
              console.log(pan_number, full_name,dob,gender,'llll')
              setPanHolderName(full_name);
              setStoredPanNumber(pan_number);
              setDob(dob);
              setGender(gender);
              // Additional logic as needed
              console.log(storedPanNumber,'kkk')
      
              setloading(false);
              // handleSaveAndNext();
            }
          } catch (error) {
            setloading(false);
            Toast.show({
              type: 'error',
              text1: 'Something went wrong',
              text2: 'Please try again',
            });
            console.error('Error in kycverifyPanNumber:', error);
          }
        } else {
          setloading(false);
          setPanCardError('Invalid Pan Number');
          Toast.show({
            type: 'error',
            text1: 'Invalid Pan Number',
            text2: 'PAN Number should be in the format ABCDE1234F',
          });
        }
      }
      
      
      
    useEffect(() => {
      // setloading(true)
      if (panNumber.length === 10) {
        setShowLoader(true);
        kycverifyPanNumber(panNumber);
      }
      setTimeout(() => {
        setShowLoader(false);
      }, 2000);
    }, [panNumber]);
    const handleSaveAndNext = () => {
      navigation.navigate('AadharCardVerification');
    };
  
    return (
      <LinearGradient
        colors={[
          '#d6fffd',
          '#f2fffe',
          '#ffff',
          '#fff',
          '#fffaff',
          '#fef8ff',
          '#faf4ff',
          '#fcf5fe',
          '#f5eefe',
          '#f1e9fe',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{paddingBottom: wp(3), flex: 1}}>
        <View style={styles.header}>
        </View>
  
        {/* pancard ui */}
        <ScrollView>
          <View style={styles.pageWrapper}>
            <Text
              style={{
                color: '#000',
                fontSize: wp(4.5),
                fontWeight: '600',
                marginBottom: wp(1),
              }}>
              Verify Pan Card
            </Text>
            <Text style={{color: '#666', fontSize: wp(3.5)}}>
              To ensure the security of your account and prevent fraud, Identity
              verification is required
            </Text>
          </View>
          <View style={{marginVertical: wp(8)}}>
            <Image
              resizeMode="contain"
              style={{width: '100%', height: 180}}
              source={require('../../assets/image/pancard-dummy.png')}
            />
          </View>
  
          <View
            style={{
              marginHorizontal: wp(5),
              // flex: 0.95,
            }}>
            <View style={styles.input}>
              <TextInput
                placeholder="Enter Pan Number"
                placeholderTextColor="#999"
                autoCapitalize="characters"
                value={panNumber}
                onChangeText={text => setPanNumber(text)}
                style={{flex: 0.94}}
                keyboardType="default"
                color={'#000'}
              />
  
              <View>
                {showLoader && (
                  <ActivityIndicator
                    size={20}
                    color={'#25d366'}
                    // style={{marginTop: wp(5)}}
                  />
                )}
              </View>
            </View>
  
            {panHolderName && storedPanNumber ? (
  <>
    <View style={styles.infoContainer}>
      <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>Name:</Text>
        <Text style={styles.infoText}>{panHolderName}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>DOB:</Text>
        <Text style={styles.infoText}>{dob}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>Pan Number:</Text>
        <Text style={styles.infoText}>{storedPanNumber}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>Gender:</Text>
        <Text style={styles.infoText}>{gender}</Text>
      </View>
    </View>
  </>
)
: (
              <>
                <View style={styles.infowrapper}>
                  <Text style={{color: '#000', marginBottom: wp(3)}}>Note</Text>
  
                  <View style={styles.displayHori}>
                    <Entypo name="dot-single" size={18} color={'#666'} />
                    <Text style={styles.listItem}>
                      The Pan Number should consist of exactly 10 characters.
                    </Text>
                  </View>
                  <View style={styles.displayHori}>
                    <Entypo name="dot-single" size={18} color={'#666'} />
                    <Text style={styles.listItem}>
                      The initial five characters must be uppercase letters.
                    </Text>
                  </View>
                  <View style={styles.displayHori}>
                    <Entypo name="dot-single" size={18} color={'#666'} />
                    <Text style={styles.listItem}>
                      The subsequent four characters should be any numeric value
                      ranging from 0 to 9.
                    </Text>
                  </View>
                  <View style={styles.displayHori}>
                    <Entypo name="dot-single" size={18} color={'#666'} />
                    <Text style={styles.listItem}>
                      The final (tenth) character must be an uppercase letter.
                    </Text>
                  </View>
                  <View style={styles.displayHori}>
                    <Entypo name="dot-single" size={18} color={'#666'} />
                    <Text style={styles.listItem}>
                      No white spaces are allowed in the Pan Number.
                    </Text>
                  </View>
                </View>
              </>
            )}
  
            {/* {panCardError ? (
            <>
              <View style={styles.infowrapper}>
               
  
                <View style={styles.displayHori}>
                  <Entypo name="dot-single" size={18} color={'#666'} />
                  <Text style={styles.listItem}>
                    The Pan Number should consist of exactly 10 characters.
                  </Text>
                </View>
                <View style={styles.displayHori}>
                  <Entypo name="dot-single" size={18} color={'#666'} />
                  <Text style={styles.listItem}>
                    The initial five characters must be uppercase letters.
                  </Text>
                </View>
                <View style={styles.displayHori}>
                  <Entypo name="dot-single" size={18} color={'#666'} />
                  <Text style={styles.listItem}>
                    The subsequent four characters should be any numeric value
                    ranging from 0 to 9.
                  </Text>
                </View>
                <View style={styles.displayHori}>
                  <Entypo name="dot-single" size={18} color={'#666'} />
                  <Text style={styles.listItem}>
                    The final (tenth) character must be an uppercase letter.
                  </Text>
                </View>
                <View style={styles.displayHori}>
                  <Entypo name="dot-single" size={18} color={'#666'} />
                  <Text style={styles.listItem}>
                    No white spaces are allowed in the Pan Number.
                  </Text>
                </View>
              </View>
            </>
          ) : null} */}
          </View>
        </ScrollView>
        <View
          style={{
            background: '#eee',
            justifyContent: 'center',
            flex: 1,
          }}>
          {panHolderName ? (
            <TouchableOpacity style={styles.send} onPress={handleSaveAndNext}>
              {loading ? (
                <ActivityIndicator
                  size={20}
                  color={'#fff'}
                  style={{marginHorizontal: 5}}
                />
              ) : null}
              <Text style={{color: '#fff', fontSize: 15, fontWeight: '700'}}>
                Save and Next
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </LinearGradient>
    );
  };
  
  export default MannualPanCard;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    header: {
      width: '100%',
      paddingVertical: 15,
      paddingHorizontal: wp(4),
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
      paddingHorizontal: wp(2),
      paddingVertical: wp(4),
      borderRadius: wp(4),
      marginTop: wp(8),
      borderColor: '#ccc',
      borderWidth: 0.5,
      marginHorizontal: wp(5),
    },
  
    listItem: {
      color: '#666',
      fontSize: wp(3.2),
      flexWrap: 'wrap',
    },
    bullet: {
      fontSize: 13,
      marginRight: 5,
      color: '#333',
    },
    displayHori: {
      flexDirection: 'row',
      marginBottom: wp(2),
      width: 260,
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
  
    send: {
      alignSelf: 'center',
      padding: 15,
      backgroundColor: '#000',
      borderRadius: 7,
      width: '86%',
      alignItems: 'center',
      justifyContent: 'center',
      // marginBottom: 10,
      flexDirection: 'row',
      // marginTop: 130,
    },
  
    errorLines: {
      color: '#666',
      fontSize: wp(3),
      lineHeight: wp(5),
    },
    infoContainer: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingVertical: wp(8),
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: wp(2),
      paddingLeft:wp(15)
    },
    infoLabel: {
      color: '#333',
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: wp(2),
    },
    infoText: {
      color: '#333',
      fontSize: 18,
      // textTransform: 'capitalize',
    },
  });
  