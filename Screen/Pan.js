import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import RNTextDetector from "rn-text-detector";

const Pan = () => {
    const initialState = {
        loading: false,
        image: null,
        textRecognition: null,
        toast: {
          message: "",
          isVisible: false,
        },
      };
      
      const [state, setState] = useState(initialState);
      async function onPress(type: "capture" | "library") {
        setState({ ...state, loading: true });
        
        try {
          const mediaOptions = { mediaType: "image" };
          const media = type === "capture"
            ? await launchCamera(mediaOptions, onImageSelect)
            : await launchImageLibrary(mediaOptions, onImageSelect);
          
          if (!media || !media.assets) {
            setState({ ...state, loading: false });
            return;
          }
      
          const file = media.assets[0].uri;
          const textRecognition = await RNTextDetector.detectFromUri(file);
          const INFLIGHT_IT = "Inflight IT";
          const matchText = textRecognition.findIndex((item: { text: string }) => item.text.includes(INFLIGHT_IT));
      
          setState({
            ...state,
            textRecognition,
            image: file,
            toast: {
              message: matchText > -1 ? "Ohhh I love this company!!" : "",
              isVisible: matchText > -1,
            },
            loading: false,
          });
        } catch (error) {
          console.error("Error processing image:", error);
          setState({ ...state, loading: false });
        }
      }
      
      async function onImageSelect(media: { assets: [{ uri: string }] }) {
        // You can keep this function as is, or make additional improvements if needed
        if (!media) {
          setState({ ...state, loading: false });
          return;
        }
      
        // ... rest of the function
      }
            
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
     <Text style={styles.title}>RN OCR SAMPLE</Text>
    <View style={getSpace(20)}>
     <TouchableOpacity style={[styles.button, styles.shadow]}
     onPress={() => onPress("capture")}>
      <Text>Take Photo</Text>
     </TouchableOpacity>
    <View style={getSpace(20)}> 
     <TouchableOpacity
      style={[styles.button, styles.shadow]}
      onPress={() => onPress("library")}
     >
      <Text>Pick a Photo</Text>
     </TouchableOpacity>
    </View>
    <View style={getSpace(50)}>
     <WrapLoading loading={state.loading}>
      <View style={{ alignItems: "center" }}>
       <Image style={[styles.image, styles.shadow]}
        source={{ uri: state.image }} />
      </View> 
    {!!state.textRecognition && 
     state.textRecognition.map(
      (item: { text: string }, i: number) => (
       <Text key={i} style={getSpace(10)}>
        {item.text}
       </Text>
      ))}
      </WrapLoading>
     </View>
    </View>
    {state.toast.isVisible &&
     ToastAndroid.showWithGravityAndOffset(
       state.toast.message,
       ToastAndroid.LONG,
       ToastAndroid.BOTTOM,
       25,
       50
     )}
    </View>
   </SafeAreaView>

  )
}

export default Pan

const styles = StyleSheet.create({})