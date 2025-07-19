// import { StyleSheet, Text, View, Image } from 'react-native'
// import React from 'react'
// import { StatusBar } from 'expo-status-bar';

// const Welcome = () => {
//   return (
//     <View style={{flex:1, justifyContent:"center", alignItems:"center" ,backgroundColor:"#FFA500" }}>
//         <StatusBar style="light"/>
//         <StatusBar backgroundColor="#FFA500" />
//     <View className=  "bg-white/9 rounded-full p-10">
//         <View className="bg-white/20 rounded-full p-8">
//             <Image source={require('../../assets/anim3.png')}
//             style={{width:200, height: 200}}/>
//             <Text style={
//               {
//                 fontSize :50, 
//                 fontWeight :"bold", 
//                 color:"white",
//                 textAlign: "center"
//               }

//             }>Foodzzz</Text>

//             <Text style={
//               {
//                 fontSize :20, 
//                 fontWeight :"light", 
//                 color:"white",
//                 textAlign: "center",
                
//               }

//             }>I'm lovin' Cusine</Text>
            
//         </View>
//     </View>
//     </View>
//   )
// }

// // import React, { useEffect, useRef } from 'react';
// // import { Animated, Dimensions,StatusBar, StyleSheet, Text, View } from 'react-native';

// // const { width, height } = Dimensions.get('window');

// // const Welcome = () => {
// //   const translateX = useRef(new Animated.Value(width)).current;

// //   useEffect(() => {
// //     Animated.timing(translateX, {
// //       toValue: 0,
// //       duration: 1500, // Adjust the duration as needed
// //       useNativeDriver: true,
// //     }).start();
// //   }, []);

// //   return (
// //     <View style={styles.container}>
// //        <StatusBar backgroundColor="red" />
// //       <Animated.View style={[styles.animationContainer, { transform: [{ translateX }] }]}>
// //         <Text style={styles.text}>Foodiess</Text>
// //       </Animated.View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor:"red"
// //   },
// //   animationContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: 'center',
// //   },
// //   text: {
// //     fontSize: 50,
// //     fontWeight: 'bold',
// //     color: 'white',
// //   },
// // });



// export default Welcome;

// // const styles = StyleSheet.create({});  