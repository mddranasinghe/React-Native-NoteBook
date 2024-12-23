import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import UserContext from '../../hooks/UserContext';

const ViewNote = () => {
  const { notes } = useContext(UserContext);

  const renderNote = ({ item }) => (
    <View style={styles.note}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.pagecontainer}>
    <View style={styles.container}>
      <Text style={styles.title}>Your Notes</Text>
      {notes.length === 0 ? (
        <Text style={styles.empty}>No notes available</Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderNote}
        />
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    pagecontainer:{flex: 1, justifyContent: 'center',alignItems:'center' },
  container: { flex: 1, padding: 20,width:'50%', borderStyle:'solid', borderWidth:10,borderColor:'#ccc' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center',color:'#007BFF' },
  empty: { textAlign: 'center', marginTop: 20, fontSize: 16 },
  note: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 10 },
  noteTitle: { fontSize: 18, fontWeight: 'bold' },
  noteContent: { fontSize: 16 },
});

export default ViewNote;
