import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

const HandleLogout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const logout = async () => {
      // Remove token from AsyncStorage
      await AsyncStorage.removeItem('token');
      // Navigate to login screen
      navigation.navigate('Login');
    };
    logout();
  }, [navigation]);

  return null;
};

export default HandleLogout;
