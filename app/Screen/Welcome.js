import React, { useEffect, useRef } from 'react';
/import { Animated, Dimensions,StatusBar, StyleSheet, Text, View } from 'react-native';

 const { width, height } = Dimensions.get('window');

 const Welcome = () => {
   const translateX = useRef(new Animated.Value(width)).current;

   useEffect(() => {
     Animated.timing(translateX, {
       toValue: 0,
       duration: 1500, // Adjust the duration as needed
       useNativeDriver: true,
     }).start();
   }, []);

   return (
     <View style={styles.container}>
        <StatusBar backgroundColor="red" />
       <Animated.View style={[styles.animationContainer, { transform: [{ translateX }] }]}>
        <Text style={styles.text}>Foodiess</Text>
       </Animated.View>
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor:"red"
   },
   animationContainer: {
     flex: 1,
     justifyContent: "center",
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
     fontWeight: 'bold',
     color: 'white',
   },
 });



 export default Welcome;

 const styles = StyleSheet.create({});  
