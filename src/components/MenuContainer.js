import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const MenuContainer = ({ id, image, type, setType, title }) => {

  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="items-center justify-center space-y-2">
      <View
        className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center ${type === title.toLowerCase() ? "bg-gray-200" : ""}`}>
        <Image
          className="w-full h-full object-contain"
          source={image}
        />
      </View>
      <Text className="text-gray-600 font-semibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
