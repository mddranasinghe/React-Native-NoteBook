import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');

  const handleRegister = () => {
    if (!name || !username || !email || !password || !confirmPassword) {
        setError('All fields are required');
        setTimeout(() => {
            setError('');
          }, 5000);
      return;
    }
    if (password !== confirmPassword) {
        setError('Passwords do not match');
        setTimeout(() => {
            setError('');
          }, 5000);
      return;
    }

   // setError('Registration successful');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.pagecontainer}>
        {error ?  <View style={styles.errorBOx}><Text style={styles.error}>{error}</Text> </View>: null}
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.but}> <Button title="Register" onPress={handleRegister} /></View>
      <View style={styles.but}>    <Button title="Back to Login" onPress={() => navigation.navigate('Login')} /></View>
     
     
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    pagecontainer:{flex: 1, justifyContent: 'center',alignItems:'center' },
  container: { flex: 1, padding: 20, justifyContent: 'center' ,width:'50%'},
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center',color:"#007BFF" },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  but:{
    marginBottom:20,
    borderRadius:25,
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

export default Register;
