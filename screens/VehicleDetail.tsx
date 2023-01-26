import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


//Se define una interfaz "Vehicle" con 7 propiedades: id, make, model, year, image, price y description. 
//Este es una forma de declarar tipos en TypeScript, lo que ayuda a la verificación de tipos y a la legibilidad del código
interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  image: string;
  price: number;
  description: string;
}

const VehicleDetail: React.FC = () => {
  const route = useRoute();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    const id = route.params.id;
    // usar una funcion fetch para obtener el detalle del vehiculo en base al id
    // y actualizar el estado de vehicle con los datos obtenidos
  }, [route.params.id]);

  if (!vehicle) {
    return <Text>Cargando...</Text>;
  }

  // esta sección del código se encarga de mostrar la información del vehículo en pantalla, una vez que se ha recibido los datos del servidor.
  return (
    <View>
      <Image source={{ uri: vehicle.image }} />
      <Text>{vehicle.year} {vehicle.make} {vehicle.model}</Text>
      <Text>{vehicle.price}</Text>
      <Text>{vehicle.description}</Text>
    </View>
  );
};

export default VehicleDetail;
