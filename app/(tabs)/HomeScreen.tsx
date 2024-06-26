import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Appbar, Avatar, Text, Searchbar, IconButton,Icon } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ParksCard from '@/components/ParksCard';
import CustomAvatar from '@/components/CustomAvatar';



const MeadowLane = require('@/assets/images/1.png');
const PackSquare = require('@/assets/images/2.png');
const RoundhayPark = require('@/assets/images/3.png');

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.header}>
                    <CustomAvatar size={60} source={require('@/assets/images/icon.png')} style={styles.avatar} />
                    <View>
                        <Text style={{marginLeft:4}}>Hi, Albert</Text>
                        <View style={styles.locationContainer}>
                            <Icon source="map-marker" size={16} color="#4CAF50" />
                            <Text style={{ fontWeight: 600, lineHeight: 20, color:'#001B3C', }}>Leeds, UK</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.title}>Let's Find the best places and events for you</Text>

                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchbar}
                />

               
                <View style={{ backgroundColor: '#F7F7F8', paddingTop: 5 }}>
                    <Text style={styles.sectionTitle}>Popular nearby places</Text>
                <ParksCard
                    name="Park Square"
                    address="Stanningley Rd, Armley, Leeds LS12 3LW"
                    image={MeadowLane}
                    rating="4.5"
                    distance="1.1"
                />

                <ParksCard
                    name="Meadow Lane"
                    address="Armley Ridge Rd, Leeds LS12 2QX"
                    image={PackSquare}
                    rating="3.5"
                    distance="1.1"
                />

                <ParksCard
                    name="Roundhay Park"
                    address="Mansion Ln, Roundhay, Leeds LS8 2HH"
                    image={RoundhayPark}
                    rating="4.5"
                    distance="1.1"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    scrollViewContent: {
        paddingBottom: 0
    },
    avatar: {
        backgroundColor: '#E8F5E9',
        marginRight: 16,
        resizeMode: 'cover',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 4
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        padding: 16,
        lineHeight: 32,
        color: '#001B3C',
    },
    searchbar: {
        margin: 16,
        backgroundColor: 'white',
        borderColor: "#E2E1EC",
        borderWidth: 1,
        borderRadius: 12
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        padding: 16,
        lineHeight: 28,
    }
});

export default HomeScreen;