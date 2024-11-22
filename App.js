import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import useGetCatPhotos from './src/hooks/useGetCatPhotos';

export default App = () => {
  const { catsPhotos, fetchCatPhotos, loading } = useGetCatPhotos();

  return (
    <View style={styles.container}>
      
      {loading && (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}

      {!loading && catsPhotos.length === 0 && (
        <View style={styles.centerContainer}>
          <Text style={styles.emptyText}>
            Nenhuma foto de gato disponível. Clique no botão para carregar!
          </Text>
        </View>
      )}

      <ScrollView>
        {catsPhotos.map((photo, index) => (
          <Image
            key={index}
            source={{ uri: photo.url }}
            style={styles.catPhoto}
          />
        ))}
      </ScrollView>
      <Button title="Buscar fotos de gatos" onPress={fetchCatPhotos} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginVertical: 20,
    alignItems: 'center',
  },
  catPhoto: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
});
