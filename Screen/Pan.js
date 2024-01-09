import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';

const Pan = () => {
  const [cameraImage,setCameraImage]=useState();
  const [galleryImage,setGalleryImage]=useState();
  const [imgText,setImgText]=useState()

  useEffect(()=>{
    launchImageLibrary({},setGalleryImage);
  },[]);
console.log(TextRecognition,'TextRecognition')
  useEffect(() => {
    (async () => {
      if (galleryImage && galleryImage.assets && galleryImage.assets.length > 0) {
        try {
          const result = await TextRecognition.recognize(galleryImage.assets[0].uri);
          console.log(galleryImage, 'gii');
          console.log(result);
          setImgText(result);
        } catch (error) {
          console.error('Text recognition error:', error);
        }
      }
    })();
  }, [galleryImage]);
  
  
  return (
    <SafeAreaView>
      <StatusBar>
    <View>
      <Text style={{marginTop:100,color:'black'}}>Pan Recognisation</Text>
      {imgText?<Text>{imgText}</Text>:null}
    </View>
    </StatusBar>
    </SafeAreaView>
  )
}

export default Pan

const styles = StyleSheet.create({})