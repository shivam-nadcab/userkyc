import React, {useState} from 'react';
import {initializeApp} from '@react-native-firebase/app';
import SmsRetriever from 'react-native-sms-retriever';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [loading, setLoading] = useState(false);

  const _onPhoneNumberPressed = async () => {
    try {
      const phNo = await SmsRetriever.requestPhoneNumber();
      let result = phNo.replace(/^(\+91|0)+/, '');
      // Remove all whitespaces
      result = result.replace(/\s/g, '');
      setPhoneNumber(result);
      console.log(result, 'pppp');
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  const handleContinue = async () => {
    console.log('hi');
    try {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phoneNumber)) {
        console.log('Invalid phone number format');
        return;
      }
      setLoading(true);

      const formattedPhoneNumber = `+91${phoneNumber}`;

      const confirmation = await auth().signInWithPhoneNumber(
        formattedPhoneNumber,
      );
      setPhoneNumber('');
      console.log('Navigating to DetailsScreen'); // Add a log statement
      navigation.navigate('DetailsScreen', {confirmation, phoneNumber});
    } catch (error) {
      console.error('Error sending OTP:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneNumberChange = val => {
    // Ensure that the user can only enter 10 digits
    const formattedValue = val.replace(/[^0-9]/g, '').slice(0, 10);
    setPhoneNumber(formattedValue);
  };

  return (
    <LinearGradient
      colors={['#fffafa', '#fffafa', '#fffafa']}
      style={styles.linearGradient}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.imgContainer}>
        <LottieView
          source={require('../assets/animation/mobileOtp.json')}
          autoPlay
          loop
          style={styles.image}
        />
      </View>
      <View style={styles.otpVerificationContainer}>
        <Text style={styles.otpVerificationText}>OTP Verification</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle} numberOfLines={2}>
          We will send you a one-time password on this mobile number.
        </Text>
      </View>
      <View style={styles.enterMobileNumberContainer}>
        <Text style={styles.enterMobileNumberText}>Enter Mobile Number</Text>
        <View style={[styles.mainCont, styles.shadowProp]}>
        <View style={styles.inputContainer2}>
          <Text style={[styles.input2]}>+91</Text>
        </View>
        <View style={styles.inputContainer}>
          <TouchableWithoutFeedback onPress={() => _onPhoneNumberPressed()}>
            
            <TextInput
              style={[styles.input]}
              // placeholder="Mobile Number"
              placeholderTextColor="black"
              keyboardType="numeric"
              value={phoneNumber}
              maxLength={10}
              onChangeText={val => handlePhoneNumberChange(val)}
              onFocus={() => _onPhoneNumberPressed()}
            />
          </TouchableWithoutFeedback>
        </View>
        </View>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        {loading ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <Text style={styles.continueButtonText}>Continue</Text>
        )}
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={()=>navigation.navigate('OtpScreen')}><Text>Hi</Text></TouchableOpacity> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: '100%',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginTop: hp('5'),
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    marginBottom: hp('2'),
  },
  otpVerificationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1'),
    marginBottom: hp('1'),
  },
  otpVerificationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  subtitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('65%'),
    marginLeft: wp('20'),
  },
  subtitle: {
    fontSize: 16,
    color: '#373737',
    textAlign: 'center',
    marginBottom: hp('3'),
  },
  enterMobileNumberContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2'),
  },
  enterMobileNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  mainCont:{
    display:'flex',
    flexDirection:'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    height: hp(8),
    marginTop: hp(1),
  },
  inputContainer: {
    width: wp('50%'),
    // height: hp(8),
    // marginTop: hp(1),
  },
  input: {
    width: '100%',
    // height: 50,
    // backgroundColor: '#fff',
    // borderRadius: 5,
    color: 'black',
    // paddingHorizontal: 10,
    // marginBottom: 10,
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlignVertical: 'center', 
  },
  shadowProp: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  inputContainer2: {
    width: wp('20%'),
    // height: hp(8),
    // marginTop: hp(1),
  },
  input2: {
    width: '100%',
    // height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: 'black',
    paddingHorizontal: 10,
    // marginBottom: 10,
    flex: 1,
    textAlign:'center',
    fontSize: 20, // Set the font size to 18
    fontWeight: 'bold', // Set the font weight to bold
    textAlignVertical: 'center', // Center the text vertically
  },
  shadowProp2: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  continueButton: {
    backgroundColor: '#ffdf00',
    padding: 5,
    borderRadius: 5,
    marginLeft: 4,
    width: '70%',
    height: 50,
    alignSelf: 'center',
  },
  continueButtonText: {
    color: 'black',
    fontSize: 20,
    padding: 8,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Login;
