import { View, Text, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Beech } from "../assets/images";

const Home = () => {
  const navigator = useNavigation();

  useLayoutEffect(() => {
    navigator.setOptions({
      headerShown: false,
    });
  }, [navigator]);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/*  first section  */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-white text-3xl font-semibold">GO</Text>
        </View>
        <Text className="text-3xl font-semibold">Travel</Text>
      </View>

      {/*  second section  */}
      <View className="px-8 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[32px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[25px] font-bold">Good Moments</Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deleniti et labore, nemo nobis qui
          repellendus sequi veritatis. Impedit, necessitatibus.
        </Text>
      </View>

    {/*  circle */}
      <View className="w-80 h-80 rounded-full bg-yellow-400 absolute -bottom-24 -left-24"></View>
    {/*  Image Components  */}
      <View className="flex-1 relative items-center justify-center ">
        <Image
          // source={{uri: "https://www.pngfind.com/pngs/b/47-477746_travel-png.png"}}
          source={Beech}
          className="w-full h-full object-contain mt-10"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
