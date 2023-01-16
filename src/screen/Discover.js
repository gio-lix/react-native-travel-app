import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";

import { Attractions, Avatar, Hotels, Restaurants } from "../assets/images";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getPlacesData } from "../api";
import MenuContainer from "../components/MenuContainer";
import ItemsCard from "../components/ItemsCard";

const Discover = () => {
  const [value, setValue] = useState("");
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lon: "",
  });
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${value.toLowerCase()}`;
      fetch(url)
        .then(response => response.json())
        .then(data => setCoordinates({ lat: data[0].lat, lon: data[0].lon }))
        .catch(err => console.log(err));
    }, [value]),
  );

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(coordinates, type)
      .then(res => {
        setMainData(res);
        setInterval(() => {
          setIsLoading(false);
        }, 1200);
      });
  }, [coordinates]);

  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FF] relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-4xl text-indigo-600 font-bold">Discover</Text>
          <Text className="text-gray-600 text-3xl">The beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-full items-center justify-center">
          <Image
            source={Avatar}
            className="w-full h-full  rounded-full object-cover"
          />
        </View>
      </View>
      <View className="flex-row mt-4   items-center bg-white mx-4 rounded-xl px-4 drop-shadow-2xl">
        <TextInput
          placeholder="search..."
          value={value}
          onChangeText={(text) => setValue(text)}
          className=" w-full"
        />
      </View>

      {/*  menu container */}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              id="hotel"
              title="Hotels"
              image={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              id="attractions"
              title="Attractions"
              image={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              id="restaurants"
              title="Restaurants"
              image={Restaurants}
              type={type}
              setType={setType}
            />
          </View>
          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-lg font-bold">Top Tips</Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#2C7379] text-lg font-bold">Explore</Text>
                <FontAwesome5 name="arrow-right" size={20} color="gray" />
              </TouchableOpacity>
            </View>
            <View className="px-2 mt-8 flex-row items-center justify-evenly flex-wrap">
              {
                mainData?.length > 0 ? (
                  mainData.map((item, index) => (
                    <ItemsCard
                      key={index}
                      image={
                        item?.photo?.images?.medium?.url
                          ? item?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2022/08/13/18/25/river-7384240_1280.jpg"
                      }
                      title={item?.name}
                      location={item?.location_string}
                      data={item}
                    />
                  ))
                ) : (
                  <View className="w-full h-[300px] items-center space-y-8 justify-center">
                    <Text className="text-2xl font-bold text-gray-400 tracking-widest">Not Found</Text>
                  </View>
                )
              }
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
