import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importar as telas
import Login from './src/pages/Login';

// Define a criação do modo de navegação principal por meio de pilhas
const Stack = createNativeStackNavigator();

export default function App () {
  return (
    // NavigationContainer será o cérebro da navegação
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Home"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
