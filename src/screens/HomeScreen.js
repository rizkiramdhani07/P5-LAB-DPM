import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RecipeCard from '../components/RecipeCard';

const recipes = [
  { id: '1', name: 'Nasi Goreng', description: 'Resep nasi goreng sederhana.' },
  { id: '2', name: 'Sate Ayam', description: 'Resep sate ayam yang lezat.' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <RecipeCard
          recipe={item}
          onPress={() => navigation.navigate('Detail', { recipe: item })}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
