import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import signIn from '../../fetchers/signIn';

type Props = {};

const Login = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = () => {
    const signInValue = signIn({username, password});
    console.log('signInValue',signInValue)
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Username"
        onChangeText={val => setUsername(val)}
        style={styles.input}
        value={username}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={val => setPassword(val)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.signUp]}
        onPress={() => navigation.navigate('Signup')}>
        <Text>New user? Create account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
