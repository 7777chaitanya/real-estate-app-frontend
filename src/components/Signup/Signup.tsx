import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const Signup = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [reEnterPassword, setReEnterPassword] = useState(null);

  const handleSignup = () => {
    console.log('Signup', username, email, password, reEnterPassword);
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
        placeholder="Email"
        style={styles.input}
        onChangeText={val => setEmail(val)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={val => setPassword(val)}
        value={password}
      />
      <TextInput
        placeholder="Re-enter password"
        style={styles.input}
        onChangeText={val => setReEnterPassword(val)}
        value={reEnterPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.signUp]}
        onPress={() => navigation.navigate('Login')}>
        <Text>Already have an account? Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Signup;
