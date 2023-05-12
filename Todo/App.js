import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from  "./assets/componet/screens/Detail";
import TodoApp from "./assets/componet/screens/Todo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="TodoApp" component={TodoApp}/>
<Stack.Screen name="Detail" component={Detail}/>

</Stack.Navigator>
    </NavigationContainer>
  )
}