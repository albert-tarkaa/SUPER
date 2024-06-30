import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, List, Button, Chip, Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const ParkDetailsScreen = () => {
    const route = useRoute();
    const { parkDetails } = route.params;
    console.log(parkDetails);

    return (
        <ScrollView style={styles.container}>
            <Card>
                <Card.Cover source={require('@/assets/images/1.png')} />
                <Card.Content>
                    <Title>{parkDetails.name}</Title>
                    <View style={styles.ratingContainer}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Ionicons key={star} name="star" size={16} color="#FFC107" />
                        ))}
                        <Paragraph> 4.5 (130 reviews)</Paragraph>
                    </View>
                    <Paragraph>{parkDetails.address}</Paragraph>

                    <Chip icon="check" style={styles.chip}>Good Air Quality</Chip>

                    <View style={styles.weatherInfo}>
                        <Chip icon="thermometer" style={styles.chip}>24°C</Chip>
                        <Chip icon="weather-windy" style={styles.chip}>2.1Km/h</Chip>
                        <Chip icon="water-percent" style={styles.chip}>90%</Chip>
                    </View>

                    <Paragraph style={styles.infoText}>
                        Armley Park is two miles west of Leeds city centre and is approximately 14 hectares in area. It's the perfect location for people of all age ranges to enjoy a relaxing day out. The park gives residents and visitors amazing views over kirkstall valley.
                    </Paragraph>

                    <View style={styles.infoRow}>
                        <Ionicons name="location" size={16} color="#4CAF50" />
                        <Paragraph>1.1km • Open 7am - 12am</Paragraph>
                    </View>
                </Card.Content>
            </Card>

            <Card style={styles.sectionCard}>
                <Card.Content>
                    <Title>Accessibility</Title>
                    <List.Item
                        title="Wheelchair-accessible car park"
                        left={() => <List.Icon icon="check" />}
                    />
                    <List.Item
                        title="Wheelchair-accessible entrance"
                        left={() => <List.Icon icon="check" />}
                    />
                </Card.Content>
            </Card>

            <Card style={styles.sectionCard}>
                <Card.Content>
                    <Title>Children</Title>
                    <List.Item
                        title="Good for kids"
                        left={() => <List.Icon icon="check" />}
                    />
                    <List.Item
                        title="Pets"
                        left={() => <List.Icon icon="check" />}
                    />
                </Card.Content>
            </Card>

            <Card style={styles.sectionCard}>
                <Card.Content>
                    <Title>Notice</Title>
                    <List.Item
                        title="Dogs allowed"
                        left={() => <List.Icon icon="information" />}
                    />
                </Card.Content>
            </Card>

            <Card style={styles.sectionCard}>
                <Card.Content>
                    <Title>Nearby Places</Title>
                    <View style={styles.nearbyPlaces}>
                        <Card style={styles.nearbyCard}>
                            <Card.Cover source={{ uri: 'https://example.com/armley-cafe.jpg' }} />
                            <Card.Content>
                                <Paragraph>Armley Cafe</Paragraph>
                                <Paragraph style={styles.smallText}>Stanningley Rd, Armley, Leeds LS12 3LW</Paragraph>
                            </Card.Content>
                        </Card>
                        <Card style={styles.nearbyCard}>
                            <Card.Cover source={{ uri: 'https://example.com/gotts-park.jpg' }} />
                            <Card.Content>
                                <Paragraph>Gotts Park</Paragraph>
                                <Paragraph style={styles.smallText}>Armley Ridge Rd, Leeds LS12 2QX</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                </Card.Content>
            </Card>

            <Card style={styles.sectionCard}>
                <Card.Content>
                    <Title>Events Nearby</Title>
                    <List.Item
                        title="Bird watching Club picnic"
                        description="Mon 10th June | 10am - 5pm"
                        left={() => <Avatar.Icon size={40} icon="bird" />}
                    />
                </Card.Content>
            </Card>

            <Button mode="contained" style={styles.button}>
                Get Direction
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    chip: {
        marginRight: 8,
        marginBottom: 8,
    },
    weatherInfo: {
        flexDirection: 'row',
        marginVertical: 8,
    },
    infoText: {
        marginVertical: 8,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    sectionCard: {
        marginTop: 16,
    },
    nearbyPlaces: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nearbyCard: {
        width: '48%',
    },
    smallText: {
        fontSize: 12,
    },
    button: {
        margin: 16,
    },
});

export default ParkDetailsScreen;