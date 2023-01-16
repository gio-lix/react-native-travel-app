import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const ItemsCard = ({ image, title, location, data }) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate("details", {param: data})}
      className="rounded-md border border-gray-300 space-y-2 px-2 py-3 shadow-md bg-white w-[172px] my-2">
      <Image
        source={{ uri: image }}
        className="w-full h-28 rounded-md object-cover"
      />
      {
        title
          ? (
            <>
              <Text className="text-[#428288] text-[18px] font-bold">
                {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
              </Text>
              <View className="flex-row items-center space-x-1">
                <FontAwesome5
                  name="rev"
                  size={20}
                  color="#8597A2"
                />
                <Text>
                  {location?.length > 18 ? `${location.slice(0, 14)}...` : location}
                </Text>
              </View>
            </>
          ) : null
      }
    </TouchableOpacity>
  );
};

export default ItemsCard;
