import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


//Usa el hook "useState" para inicializar un estado vacío llamado "vehicles" que se utilizará para almacenar los datos de los vehículos obtenidos de la API.
const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:4010');
      setVehicles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //El hook "useEffect" se utiliza para llamar a la función "fetchVehicles" una vez que el componente se monta. La función "fetchVehicles" hace una solicitud HTTP utilizando la librería "axios" para obtener los datos de los vehículos de la API en "https://github.com/patterson-dev/vehicle_api", y luego almacena los datos en el estado "vehicles".
  useEffect(() => {
    fetchVehicles();
  }, []);


  //El componente "VehicleList" renderiza una vista que contiene una lista utilizando "FlatList" de React Native, la cual recibe como data el estado de "vehicles" y utiliza la función "renderItem" para mostrar cada uno de los elementos de la lista, en este caso se muestra el nombre y el modelo del vehículo. El "keyExtractor" se utiliza para especificar el id del objeto como la key única para cada elemento de la lista.
  return (
    <View>
      <FlatList
        data={vehicles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.model}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default VehicleList;
