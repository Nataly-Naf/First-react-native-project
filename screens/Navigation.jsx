import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Home";
import { FullAutoScreen } from "./FullAuto";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "All cars" }}
        />
        <Stack.Screen
          name="Car"
          component={FullAutoScreen}
          options={{ title: "Car" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
