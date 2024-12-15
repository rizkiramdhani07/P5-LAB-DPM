import React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const RecipeCard = ({ recipe, onPress }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Title title={recipe.name} />
      <Card.Content>
        <Text>{recipe.description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onPress}>Lihat Detail</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
  },
});

export default RecipeCard;
