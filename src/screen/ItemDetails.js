import { Image, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import routes from "../constants/routes";

const ItemDetails = ({ route }) => {
  const { navigate } = useNavigation();
  const data = route.params?.param;
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn.pixabay.com/photo/2022/08/13/18/25/river-7384240_1280.jpg",
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity onPress={() => navigate(routes.DISCOVER)}
                              className="w-10 h-10 rounded-md items-center justify-center bg-white">
              <FontAwesome5 name="angle-left" size={25} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome5 name="heart" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View className="absolute flex-row inset-x-0 bottom-5 justify-between items-center px-6">
            <View
              className="flex-row rounded-lg space-x-2  backdrop-opacity-60 backdrop-invert bg-gray-800/60 py-2 px-4 items-center">
              <Text className="text-[12px] font-bold text-white">
                {data?.price_level}
              </Text>
            </View>
            <View className="backdrop-opacity-60 backdrop-invert bg-gray-800/60 py-2 px-4 rounded-lg">
              <Text className="text-[12px] font-bold text-white">{data?.open_now_text}</Text>
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-indigo-500 text-[24px] font-bold">{data?.name}</Text>
          <View className="flex-row items-center space-x-2 mt-2 opacity-50">
            <FontAwesome5 name="rev" size={20} color="#8597A2" />
            <Text className="text-[20px] text-indigo-500 font-bold">{data?.location_string}</Text>
          </View>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          {
            data?.rating ? (
              <View className="flex-row items-center space-x-2">
                <View className="w-12 h-12 rounded-2xl bg-red-100 justify-center items-center shadow-md">
                  <FontAwesome5 name="star" size={20} color="#8597A2" />
                </View>
                <View>
                  <Text className="text-[#515151]">{data?.rating}</Text>
                  <Text className="text-[#515151]">Ratings</Text>
                </View>
              </View>
            ) : null
          }

          {
            data?.price_level ? (
              <View className="flex-row items-center space-x-2">
                <View className="w-12 h-12 rounded-2xl bg-red-100 justify-center items-center shadow-md">
                  <FontAwesome5 name="dollar-sign" size={20} color="#8597A2" />
                </View>
                <View>
                  <Text className="text-[#515151]">{data?.price_level}</Text>
                  <Text className="text-[#515151]">Price</Text>
                </View>
              </View>
            ) : null
          }

          {
            data?.bearing ? (
              <View className="flex-row items-center space-x-2">
                <View className="w-12 h-12 rounded-2xl bg-red-100 justify-center items-center shadow-md">
                  <FontAwesome5 name="closed-captioning" size={20} color="#8597A2" />
                </View>
                <View>
                  <Text className="text-[#515151]">{data?.bearing}</Text>
                  <Text className="text-[#515151]">Bearing</Text>
                </View>
              </View>
            ) : null
          }

        </View>
        {
          data?.description ? (
            <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">{data?.description}</Text>
          ) : null
        }
        {
          data?.cuisine ? (
            <View className="flex-row gap-2 items-center justify-center flex-wrap mt-4">
              {data?.cuisine?.map((element) => (
                <TouchableOpacity key={element.key}>
                    <Text className=" rounded-md bg-green-200 px-2 py-1">{element.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null
        }

        <View className="space-y-2 bg-gray-100 rounded-2xl px-4 py-2 mb-14 mt-5">
          {data?.phone ? (
            <View className="items-center flex-row space-x-6 my-2">
              <FontAwesome5 name="phone" size={20} color="#8597A2" />
              <Text className="text-lg">
                {data?.phone}
              </Text>
            </View>
          ) : null}
          {data?.email ? (
            <View className="items-center flex-row space-x-6 my-2">
              <FontAwesome5 name="phone" size={20} color="#8597A2" />
              <Text className="text-lg">
                {data?.email}
              </Text>
            </View>
          ) : null}
          {data?.address ? (
            <View className="items-center flex-row space-x-6 my-2">
              <FontAwesome5 name="location-arrow" size={20} color="#8597A2" />
              <Text className="text-lg">
                {data?.address}
              </Text>
            </View>
          ) : null}
          <View className="mt-4 px-2 py-2 rounded-lg bg-green-400 items-center justify-center mb-4">
              <Text className="text-xl font-semibold uppercase tracking-wider text-gray-100">Book Now</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetails;
