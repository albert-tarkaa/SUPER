import { Text, Card, Title, Paragraph, Icon } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const ParksCard = ({ name, address, image, rating, distance }: { name: string, address: string, image: string, rating: string, distance: string }) => (

  <Card style={styles.card}>
    <Card.Cover source={image} />
    <View style={styles.ratingContainer}>
      <Icon source="star" size={16} color="#FCBE01" />
      <Text style={styles.ratingText}>{rating}</Text>
    </View>
    <View style={styles.distanceContainer}>
      <Icon source="map-marker" size={16} color="#009933" />
      <Text style={styles.distanceText}>{distance}km</Text>
    </View>
    <Card.Content style={{ padding: 12 }}>
      <Title style={styles.title}>{name}</Title>
      <Paragraph>{address}</Paragraph>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    margin: 16,
    marginTop: 0,
  },
  ratingContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 16,
  },
  ratingText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 28
  },
  secondaryText: {
    fontSize: 400,
    fontWeight: 400,
    lineHeight: 17.4,
    textAlign: 'left'

  },
  distanceContainer: {
    position: 'absolute',
    bottom: 95,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    padding: 10,
  },
  distanceText: {
    color: '#001B3C',
    fontWeight: '600',
    lineHeight: 17.4,
  }
});

export default ParksCard;
