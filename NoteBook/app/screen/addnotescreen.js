import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import UserContext from '../../hooks/UserContext';

const AddNote = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { notes, setNotes } = useContext(UserContext);

  const handleAddNote = () => {
    if (!title || !content) {
      Alert.alert('Error', 'Both title and content are required');
      return;
    }

    const newNote = { id: notes.length + 1, title, content };
    setNotes([...notes, newNote]);
    Alert.alert('Success', 'Note added successfully');
    navigation.navigate('Home');
  };

  return (
      <View style={styles.pagecontainer}>
    <View style={styles.container}>
      <Text style={styles.title}>Add Note</Text>
      <TextInput
        placeholder="Note Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Note Content"
        value={content}
        onChangeText={setContent}
        style={[styles.input, { height: 100 }]}
        multiline
      />
      <Button title="Add Note" onPress={handleAddNote} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    pagecontainer:{flex: 1, justifyContent: 'center',alignItems:'center' },
  container: { flex: 1, padding: 20, justifyContent: 'center', width:'50%' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' ,color:'#007BFF'},
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default AddNote;
