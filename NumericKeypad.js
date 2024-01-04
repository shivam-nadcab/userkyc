import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Link } from '@react-navigation/native';

const NumericKeypad = ({onButtonPress}) => {
  const buttons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    '0',
    'DEL',
  ];

  return (
    <>
    <View style={styles.container}>
      {buttons.map(button => (
        <TouchableOpacity
          key={button}
          style={styles.keyButton}
          onPress={() => onButtonPress(button)}>
          {button === 'DEL' ? (
            <Feather name="delete" style={styles.deleteIcon} />
          ) : (
            <Text style={styles.keybuttonText}>{button}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  keyButton: {
    marginVertical: wp(2),
    marginHorizontal: wp(7),
    alignSelf:'center',
    justifyContent:'center',
    borderRadius: 5,
    color: '#000',
    width: wp(15),
    lineHeight:wp(15),
    height: wp(15),
  },

  keybuttonText: {
    fontSize: hp(3),
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
  },
  deleteIcon: {
    fontSize: wp(7),
    color: '#000',
    textAlign: 'center',
    lineHeight: wp(10),
  },

 
});

export default NumericKeypad;
