import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Discover from "./src/screen/Discover";
import Home from "./src/screen/Home";
import ItemDetails from "./src/screen/ItemDetails";

import routes from "./src/constants/routes";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.HOME}>
        <Stack.Screen name={routes.HOME} component={Home} />
        <Stack.Screen name={routes.DISCOVER} component={Discover} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={routes.DETAILS} component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
