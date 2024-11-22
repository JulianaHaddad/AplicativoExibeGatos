import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, View } from 'react-native';
import useGetCatPhotos from './src/hooks/useGetCatPhotos';

export default App = () => {
  const { catsPhotos, fetchCatPhotos } = useGetCatPhotos();

  return (
    <View style={styles.container}>
      <ScrollView>
        {catsPhotos.map((photo, index) => (
          <Image
            key={index}
            source={{ uri: photo.url }}
            style={styles.catPhoto}
          />
        ))}
      </ScrollView>
      <Button title="Carregar Mais Gatos" onPress={fetchCatPhotos} />
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
  catPhoto: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
});
