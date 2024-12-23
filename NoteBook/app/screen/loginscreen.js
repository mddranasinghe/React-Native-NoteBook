import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import UserContext from '../../hooks/UserContext';

const Login = ({ navigation }) => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
        setError('All fields are required');
        setTimeout(() => {
            setError('');
          }, 5000);
      return;
    }
    if (login(username, password)) {
      navigation.navigate('Home');
    } else {
      setError('Invalid credentials');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <View style={styles.pagecontainer}>
              {error ?  <View style={styles.errorBOx}><Text style={styles.error}>{error}</Text> </View>: null}
    <View style={styles.container}>
      <Text style={styles.txt}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
   
      <View style={styles.but}> <Button title="Login" onPress={handleLogin} /></View>
      <View style={styles.but}>  <Button title="Register" onPress={() => navigation.navigate('Register')} /></View>

    
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    pagecontainer:{flex: 1, justifyContent: 'center',alignItems:'center' },
  container: { flex: 1, justifyContent: 'center',alignItems:'center', padding: 20,width:'100%' },
  input: {
    width: '50%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  error: { color: 'red', marginBottom: 10 },
  but:{
    marginBottom:20,
    borderRadius:25,
    width:'50%'
  },
  txt:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'#007BFF',
    marginBottom:40
  },
  errorBOx:{
    width:'50%',
    padding:15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    backgroundColor:'#FF0000',
    marginTop:20,
    
    borderStyle:'solid',
    borderColor:'red',
    borderWidth:1,
    fontWeight:'bold'
    
      },
    
      error: {
        color: 'white',
       
        fontSize: 18,
       
      },
});

export default Login;
