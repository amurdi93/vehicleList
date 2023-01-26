
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

//Se define una interfaz "LoginData" con dos propiedades: username y password, para almacenar los datos del formulario de inicio de sesión.
interface LoginData {
  username: string;
  password: string;
}

//Se define una interfaz "LoginResponse" con una propiedad: token, para almacenar la respuesta de la solicitud de inicio de sesión.
interface LoginResponse {
  token: string;
}

const LoginScreen = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: '',
  });


  const handleLogin = async () => {
    // La función "handleLogin" se encarga de validar los datos del formulario, realizar una solicitud HTTP mediante axios para obtener el token de autenticación y guardarlo en AsyncStorage.
    if (!loginData.username || !loginData.password) {
      return;
    }

    // Make login request to API
    try {
      const response = await axios.post<LoginResponse>('https://github.com/patterson-dev/vehicle_api', loginData);
      const { token } = response.data;

      // Save token to AsyncStorage
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    //Se renderiza una vista que contiene dos campos de texto para ingresar el nombre de usuario y la contraseña, y un botón para enviar el formulario
    <View>
      <Text>Username:</Text>
      <TextInput
        value={loginData.username}
        onChangeText={text => setLoginData({ ...loginData, username: text })}
      />
      <Text>Password:</Text>
      <TextInput
        value={loginData.password}
        onChangeText={text => setLoginData({ ...loginData, password: text })}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
