import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VehicleList from './screens/VehicleList';
import VehicleDetail from './screens/VehicleDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VehicleList">
        <Stack.Screen name="VehicleList" component={VehicleList} options={{title:'List of vehicles'}} />
        <Stack.Screen name="VehicleDetail" component={VehicleDetail} options={{title:'Vehicle Detail'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
