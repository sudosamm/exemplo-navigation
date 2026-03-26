import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../pages/Home';

const Drawer = createDrawerNavigator

export default function Pages({route}) {
    const usuario = TabRouter.params?.usuario;
    return(
        <Drawer.Navigator>
        <Drawer.Screen
            name="Home"
            component={Home}
            initialParams={{ usuario: usuario }}
            />
        </Drawer.Navigator>
    )
}