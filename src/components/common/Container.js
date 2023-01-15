import { ScrollView, View } from "react-native";
const Container = ({children}) => {
  return (
    <ScrollView>
      <View className="p-2">
        {children}
      </View>
    </ScrollView>
  );
};

export default Container;
