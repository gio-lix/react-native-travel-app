import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Discover from "./src/screen/Discover";
import Home from "./src/screen/Home";
import ItemDetails from "./src/screen/ItemDetails";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="discover" component={Discover} />
        <Stack.Screen options={{
          headerShown: false,
        }} name="details" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
