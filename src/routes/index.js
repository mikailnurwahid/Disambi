import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import login from "../screens/login"
import Home from "../screens/Home"
import splash from "../screens/splash"


const stack = createNativeStackNavigator()
export default function Disambi() {

    return(
        <NavigationContainer >
            <stack.Navigator screenOptions={{headerShown:false}}>
                <stack.Screen name="Splash" component={splash} />
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="Login" component={login} />
            </stack.Navigator>
        </NavigationContainer>
    )
}