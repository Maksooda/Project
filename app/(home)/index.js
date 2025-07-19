import { Alert, StyleSheet, Text, View, ScrollView, Pressable, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";
import { Octicons, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import Hotel from '../../components/Hotel';
import { supabase } from '../../supabase';

const index = () => {
  const [locationServiceEabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddess, setDisplayCurrentAddress] = useState("fetching your location...");

  const [data,setData] = useState([]);


  

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert("Location Services not enabled ", "Please enable your location services to continue"[{ text: "OK" }], { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(true);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestBackgroundPermissionsAsync();

    if (status !== granted) {
      Alert.alert("Permission not granted", "Allow the app to use the location service",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    console.log(location);
    let { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const address = await LocationGeocoding.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const streetAddress = address[0].name;
      for (let item of response) {
        let address = '${item.name}, ${item?.postalCode}, ${item?.city}';

        setDisplayCurrentAddress(address);
      }

    }
  };
  console.log("my address", displayCurrentAddess);

  const mind = [
    {
      id: "0",
      name: "Cakes",
      description: "",
      image: "https://img.freepik.com/free-photo/cream-forest-white-background-red_1203-6512.jpg?w=996&t=st=1708047059~exp=1708047659~hmac=4302a1d38e1bcb8453273031429bad8e9a59d81ec7669914c60040856137909c",
    },
    {
      id: "1",
      name: "Sadwich",
      description: "",
      image: "https://img.freepik.com/free-photo/tasty-sandwiches-plate_144627-21236.jpg?w=996&t=st=1708047539~exp=1708048139~hmac=706ef892ace38a836807bb40c743795580a400b401c6ced0997ea4cd0d3290a4",
    },
    {
      id: "2",
      name: "Shakes",
      description: "",
      image: "https://img.freepik.com/free-vector/frappe-coffee-frappucino-disposable-plastic-cup_1441-3618.jpg?size=626&ext=jpg&ga=GA1.1.2028166945.1695383630&semt=ais",
    },
    {
      id: "3",
      name: "Pakodas",
      description: "",
      image: "https://img.freepik.com/premium-photo/moong-dal-vada-mungode-pakoda-dalwada-pakora-mungdal-bhajiya-yellow-split-gram-fritters-served-with-tomato-ketchup_466689-73014.jpg?w=360",
    },
    {
      id: "4",
      name: "Samosa",
      description: "",
      image: "https://img.freepik.com/free-photo/meat-dish-with-vegetables_144627-18092.jpg?w=996&t=st=1708047901~exp=1708048501~hmac=8ee28b53d97bb1bc1bf73502e34837f364d9211c9b417f668cb867a8ec0b614b",
    },

  ];
  const item = [
    {
      id: "0",
      name: "Offers",
      description: "Upto 50% off",
      image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
    },
    {
      id: "1",
      name: "Legends",
      description: "Across India",
      image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
    },
    {
      id: "2",
      name: "Gourmet",
      description: "Selections",
      image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
    },
    {
      id: "3",
      name: "Healthy",
      description: "Curated dishes",
      image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
    },
    {
      id: "4",
      name: "Try It!!!",
      description: "Curated dishes",
      image: "https://media.istockphoto.com/id/1449830867/vector/label-the-new-symbol.jpg?s=612x612&w=0&k=20&c=AF4cmsiGaCu7WT07pT5rR95COYJe33advn6VUwiuEHY=",
    },

  ];
  const recommended = [
    {
      id: 0,
      name: "Nalanda Palace",
      image:
      "https://tse4.mm.bing.net/th?id=OIP.QxP8QyOl4hF0LzZUHQLCQQHaE8&pid=Api&P=0&h=180",
      time: "35-45",
      type: "Aandhra"
    },
    {
      id: 0,
      name: "Ajmer Palace",
      image:
      "https://tse3.mm.bing.net/th?id=OIP.JMFhUhw-3D0zx5rCL9IjSwHaEg&pid=Api&P=0&h=180",
      time: "50-60",
      type: "Rajasthani"
    },
    {
      id: 0,
      name: "Hyata Regency",
      image:
      "https://tse4.mm.bing.net/th?id=OIP.sWi5xW8jiVP6dXQL0En8-wHaE7&pid=Api&P=0&h=180",
      time: "25-40",
      type: "Andhra"
    },
    {
      id: 0,
      name: "The Lodhi's",
      image:
      "https://tse1.mm.bing.net/th?id=OIP.kZ6vjMRZTF3CZJcF85JQsAHaEK&pid=Api&P=0&h=180",
      time: "35-45",
      type: "Punjabi"
    },
  
  ];

  const hotels = [
    {
      id: "0",
      featured_image:
        "https://b.zmtcdn.com/data/pictures/2/18820472/b07647252aae32993047faf13a1cccf4.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      images: [
        {
          id: "0",
          image:
            "https://b.zmtcdn.com/data/pictures/chains/8/51828/68d04135bbac1e3d5ff5a87d45974da1.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          description: "Desi Burrito • Rs249",
        },
        {
          id: "1",
          image:
            "https://b.zmtcdn.com/data/pictures/chains/8/51828/1f8008fc1cec3cd7ea2b559c32b1e642.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          description: "Indain Burrito • Rs149",
        },
      ],
      name: "Hauz Khas Social",
      cuisines: "North Indian • Fast Food • 160 for one",
      time: "35 - 40 min • 1Km",
      average_cost_for_two: 1600,
      aggregate_rating: 4.3,
      adress: "9-A & 12, Hauz Khas Village, New Delhi",
      smalladress: "Hauz Khas Village, New Delhi",
      offer: "₹80 OFF",
      no_of_Delivery: 1500,
      latitude: 12.9916,
      longitude: 77.5712,
    },

    {
      id: "1",
      featured_image:
        "https://media.istockphoto.com/id/1314239564/photo/chicken-tikka-masala-traditional-dish-of-indian-cuisine.jpg?s=612x612&w=0&k=20&c=W0aM8C0K93ox1pK4-hoQdn5V3RxVe33tWprxg7aY-6k=",
      name: "Qubitos - The Terrace Cafe",
      cuisines: "Thai, European, Mexican",
      average_cost_for_two: 1500,
      aggregate_rating: 4.5,
      adress:
        "C-7, Vishal Enclave, Opposite Metro Pillar 417, Rajouri Garden, New Delhi",
      smalladress: "Rajouri Garden, New Delhi",
      offer: "₹80 OFF",
      no_of_Delivery: 2500,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "44 min",
    },

    {
      id: "2",
      featured_image:
        "https://media.istockphoto.com/id/1162008117/photo/pouring-cream-into-black-coffee.jpg?s=612x612&w=0&k=20&c=gs8_BiEVuw40nkPbCKjDK6iy97B9HDQOz1k6x64LRjo=",
      name: "The Hudson Cafe",
      cuisines: "Cafe, Italian, Continental",
      average_cost_for_two: 850,
      aggregate_rating: 4.3,
      adress:
        "2524, 1st Floor, Hudson Lane, Delhi University-GTB Nagar, New Delhi",
      smalladress: "Delhi University-GTB Nagar",
      offer: "₹60 OFF",
      no_of_Delivery: 1800,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "20 min",
    },

    {
      id: "3",
      featured_image:
        "https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg",
      name: "Summer House Cafe",
      cuisines: "Italian, Continental",
      average_cost_for_two: 1850,
      aggregate_rating: 4.1,
      adress:
        "1st Floor, DDA Shopping Complex, Aurobindo Place, Hauz Khas, New Delhi",
      smalladress: "Hauz Khas, New Delhi",
      offer: "₹50 OFF",
      no_of_Delivery: 1700,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "38 min",
    },

    {
      id: "4",
      featured_image:
        "https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60=",
      name: "38 Barracks",
      cuisines: "North Indian, Italian, Asian",
      average_cost_for_two: 1600,
      aggregate_rating: 4.4,
      adress: "M-38, Outer Circle, Connaught Place, New Delhi",
      smalladress: "Connaught Place, New Delhi",
      offer: "₹70 OFF",
      no_of_Delivery: 1230,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "51 min",
    },
    {
      id: "5",
      featured_image:
        "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
      name: "Terra Mayaa Restaurant",
      cuisines: "North Indian, Continental, Italian",
      aggregate_rating: 3.5,
      adress: "6th Floor, Anil Plaza 2, G.S. Road, Christian Basti",
      smalladress: "Anil Plaza 2, G.S. Road",
      offer: "₹55 OFF",
      no_of_Delivery: 500,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "42 min",
    },
    {
      id: "6",
      featured_image:
        "https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_1280.jpg",
      name: "Mocha Hotel",
      cuisines: "Cafe, Italian",
      aggregate_rating: 4.2,
      adress: "Christian Basti, Guwahati",
      smalladress: "Christian Basti, Guwahati",
      offer: "₹90 OFF",
      no_of_Delivery: 1100,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "34 min",
    },
    {
      id: "7",
      featured_image:
        "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_1280.jpg",
      name: "4 Seasons",
      cuisines: "Chinese, North Indian",
      aggregate_rating: 4.5,
      adress:
        "Opposite Institute of Social Science, Bhuban Road, Uzan Bazaar, Guwahati",
      smalladress: "Bhuban Road, Uzan Bazaar, Guwahati",
      offer: "₹55 OFF",
      no_of_Delivery: 1500,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "30 min",
    },
    {
      id: "8",
      featured_image:
        "https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579_1280.jpg",
      name: "Shanghai Salsa",
      cuisines: "Continental, Fast Food, Chinese",
      aggregate_rating: 4.1,
      adress:
        "37, 1st Floor, Hatigarh Chariali, Mother Teresa Road, Zoo Tiniali Area, Zoo Tiniali, Guwahati",
      smalladress: "Mother Teresa Road,Guwahati",
      offer: "₹75 OFF",
      no_of_Delivery: 1500,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "45 min",
    },
    {
      id: "9",
      featured_image:
        "https://cdn.pixabay.com/photo/2018/02/26/17/25/chicken-3183558_1280.jpg",
      name: "Underdoggs Sports Bar & Grill",
      cuisines: "North Indian, Continental",
      aggregate_rating: 3.9,
      adress:
        "1st Floor, Central Mall, G.S. Road, Sree Nagar, Christian Basti, Guwahati",
      smalladress: "Sree Nagar, Christian Basti, Guwahati",
      offer: "₹70 OFF",
      no_of_Delivery: 2500,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "33 min",
    },
    {
      id: "10",
      featured_image:
        "https://cdn.pixabay.com/photo/2014/12/30/09/55/chicken-583761_1280.jpg",
      name: "Fat Belly",
      cuisines: "Asian, Chinese, Tibetan",
      aggregate_rating: 4.5,
      adress:
        "Opposite Rabindra Bhawan, GNB Road, Ambari, Dighalipukhuri East, Uzan Bazaar, Guwahati",
      smalladress: "Dighalipukhuri East, Guwahati",
      offer: "₹60 OFF",
      no_of_Delivery: 900,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "53 min",
    },
    {
      id: "11",
      featured_image:
        "https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg",
      name: "Makhan Fish and Chicken Corner",
      cuisines: "Asian, Chinese",
      aggregate_rating: 4.5,
      adress:
        "21-A, Near Madaan Hospital, Majitha Road, Basant Nagar, Amritsar",
      smalladress: "Basant Nagar, Amritsar",
      offer: "₹55 OFF",
      no_of_Delivery: 1200,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "43 min",
    },
    {
      id: "12",
      featured_image:
        "https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_1280.jpg",
      name: "Bharawan Da Dhaba",
      cuisines: "North Indian, Fast Food",
      aggregate_rating: 3.6,
      adress: "Near Amritsar Municipal Corporation, Town Hall, Amritsar",
      smalladress: "Town Hall, Amritsar",
      offer: "₹70 OFF",
      no_of_Delivery: 1600,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "28 min",
    },
    {
      id: "13",
      featured_image:
        "https://cdn.pixabay.com/photo/2017/11/17/16/05/duck-2957809_1280.jpg",
      name: "The Kulcha Land",
      cuisines: "North Indian,Asian",
      aggregate_rating: 4.3,
      adress:
        "Opposite M.K Hotel, District Shopping Centre, Ranjit Avenue, Amritsar",
      smalladress: "Ranjit Avenue, Amritsar",
      offer: "₹80 OFF",
      no_of_Delivery: 2600,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "32 min",
    },
    {
      id: "14",
      featured_image:
        "https://cdn.pixabay.com/photo/2018/12/04/16/49/vegetable-palau-3856048_1280.jpg",
      name: "Brothers Dhaba",
      cuisines: "North Indian",
      aggregate_rating: 4.6,
      adress:
        "Golden Temple Out Road, Opposite Amritsar Municipal Corporation, Town Hall, Amritsar",
      smalladress: "Amritsar",
      offer: "₹65 OFF",
      no_of_Delivery: 1300,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "42 min",
    },
    {
      id: "15",
      featured_image:
        "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg",
      name: "Charming Chicken",
      cuisines: "North Indian",
      aggregate_rating: 4.6,
      adress:
        "Golden Temple Out Road, Opposite Amritsar Municipal Corporation, Town Hall, Amritsar",
      smalladress: "Near Basant Nagar, Amritsar",
      offer: "₹45 OFF",
      no_of_Delivery: 700,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "28 min",
    },
    {
      id: "16",
      featured_image:
        "https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_1280.jpg",
      name: "Beera Chicken Corner",
      cuisines: "North Indian",
      aggregate_rating: 4.4,
      adress:
        "Opposite Bandari Hospital, Sehaj Avenue, Majitha Road, Near White Avenue, Amritsar",
      smalladress: "Near White Avenue, Amritsar",
      offer: "₹80 OFF",
      no_of_Delivery: 1400,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "34 min",
    },
    {
      id: "17",
      featured_image:
        "https://cdn.pixabay.com/photo/2016/06/26/22/45/india-1481494_1280.jpg",
      name: "Brothers' Amritsari Dhaba",
      cuisines: "North Indian",
      aggregate_rating: 4.2,
      adress: "Phawara Chowk, Town Hall, Amritsar",
      smalladress: "Town Hall, Amritsar",
      offer: "₹40 OFF",
      no_of_Delivery: 1600,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "40 min",
    },
    {
      id: "18",
      featured_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGqVUxo6HO-CtXn-AHgAin1tvN4l8_A0e1Q&usqp=CAU",
      name: "La Roma Pizzeria",
      cuisines: "Fast Food, Italian",
      aggregate_rating: 4.6,
      adress: " Ranjit Avenue, Amritsar",
      smalladress: " Ranjit Avenue, Amritsar",
      offer: "₹40 OFF",
      no_of_Delivery: 2200,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "46 min",
    },
    {
      id: "19",
      featured_image:
        "https://cdn.pixabay.com/photo/2018/12/04/16/49/indian-food-3856044_1280.jpg",
      name: "Crystal Restaurant",
      cuisines: "North Indian, Mughlai",
      aggregate_rating: 3.5,
      adress: " Crystal Chowk, Queens Road, INA Colony, Amritsar",
      smalladress: "INA Colony, Amritsar",
      offer: "₹80 OFF",
      no_of_Delivery: 2500,
      latitude: 12.9716,
      longitude: 77.5946,
      time: "22 min",
    },
  ];

  useEffect(() => {
    async function fetchData(){
    try {
      const { data,error }  = await supabase.from("hotels").select("*");
      if(error){
        console.log("error fetching data",error)
      }else{
        setData(data);
      }
    } catch (error) {
      console.log("Error in fetchData", error)
    }
  }
  fetchData();

  },[]);

  console.log("data",data)

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: 10 }}>
        <Octicons name="location" size={24} color="#E52850" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver To</Text>
          <Text style={{ color: "gray", fontSize: 16, marginTop: 3 }}>{displayCurrentAddess}</Text>
        </View>
        <Pressable style={{
          backgroundColor: "#6CB4EE",
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text>M</Text>
        </Pressable>
      </View>
      <View style={{
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1, 
        borderColor: "#C0C0C0",
        paddingVertical:8,
        paddingHorizontal:1,
        borderRadius:11,
        marginTop:10,
        marginHorizontal:10
      }}
      >
        <TextInput placeholder="Serach for food, hotels" />
        <AntDesign name='search1' size={24} color="#E52850" />
      </View>
      {/* <Carousel/> */}

      <Categories/>
      <Text style={{textAlign:"center", marginTop: 7, letterSpacing: 4, marginBottom:5, color:"gray"}}>RECOMMENDED</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recommended?.map((item,index) => (
          <View style={{backgroundColor:"white", flexDirection:"row", margin:10, borderRadius:8}}>
            <View>
              <Image style={{width:100, 
                height: 100,
                resizeMode: "cover",
                borderTopLeftRadius: 8, 
                borderBottomLeftRadius: 7
              }}
                source={{ uri: item?.image }}
                />
            </View>
                  <View style={{padding:10, flexDirection:"column"}}>
                    <Text style={{fontSize: 15, fontWeight: "500"}}>{item?.name}</Text>
                    <Text style={{flex:1, marginTop: 3, color: "gray", fontWeight: "500"}}>{item?.type}</Text>

                    <View style={{flexDirection:"row", alignItems:"center", gap:3}}>
                    <Ionicons name="time" size={24} color="green"/>
                    <Text>{item?.time}</Text>
                    </View>
                  </View>
            </View>
        
        ))}
      </ScrollView>

      <Text style={{textAlign:"center", marginTop: 7, letterSpacing: 4, marginBottom:5, color:"gray"}}>WHAT'S ON YOUR MIND</Text>
    
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {mind?.map((item,index) => (
        <View 
        key={index}
        style={{
          width: 90,
          borderColor: "#E0E0E0",
          borderWidth: 1,
          paddingVertical: 5,
          paddingHorizontal: 1,
          borderRadius: 5,
          marginLeft: 10,
          marginVertical: 10,
          alignItems:"center",
          justifyContent:"center",
          backgroundColor: "white"
        }}
        >
          <Image style={{width:50, height:50}} source={{uri:item.image}}/>

          <Text style={{fontSize: 13, fontWeight: 500, marginTop: 6}}>{item?.name}</Text>
          <Text style={{fontSize:12, color:"gray", marginTop: 3}}>{item?.description}</Text>
        </View>
      ))}

    </ScrollView>
      <Text style={{textAlign:"center", marginTop: 7, letterSpacing: 4, marginBottom:5, color:"gray"}}>EXPLORE</Text>
    
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {item?.map((item,index) => (
        <View 
        key={index}
        style={{
          width: 90,
          borderColor: "#E0E0E0",
          borderWidth: 1,
          paddingVertical: 5,
          paddingHorizontal: 1,
          borderRadius: 5,
          marginLeft: 10,
          marginVertical: 10,
          alignItems:"center",
          justifyContent:"center",
          backgroundColor: "white"
        }}
        >
          <Image style={{width:50, height:50}} source={{uri:item.image}}/>

          <Text style={{fontSize: 13, fontWeight: 500, marginTop: 6}}>{item?.name}</Text>
          <Text style={{fontSize:12, color:"gray", marginTop: 3}}>{item?.description}</Text>
        </View>
      ))}

    </ScrollView>

    <Text style={{textAlign:"center", marginTop: 7, letterSpacing: 4, marginBottom:5, color:"gray"}}>ALL RESTURANTS</Text>

    <View style={{marginHorizontal: 8}}>
    {data?.map((item, index) => (
      <Hotel key={index} item={item} menu={item?.menu}/>
    ))}

    </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});


