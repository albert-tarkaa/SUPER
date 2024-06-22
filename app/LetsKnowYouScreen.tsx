import { Link } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const { width, height } = Dimensions.get('window');

// Convert pixel values to percentages
const IMAGE_WIDTH_PERCENTAGE = (80.29 / width) * 100;
const IMAGE_HEIGHT_PERCENTAGE = (135.05 / height) * 100;
const LetsKnowYouScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Let’s get to know you.</Text>
        <TextInput
          mode="outlined"
          style={styles.input}
          outlineStyle={{ borderColor: "#E2E1EC", borderWidth: 1, borderRadius: 12 }}
          textColor="#000"
          selectionColor="#000"
          placeholder='Firstname'
        />
        <TextInput
          mode="outlined"
          style={styles.input}
          outlineStyle={{ borderColor: "#E2E1EC", borderWidth: 1, borderRadius: 12 }}
          textColor="#000"
          selectionColor="#000"
          placeholder='Surname'
        />

        <TextInput
          mode="outlined"
          style={styles.inputSplit}
          outlineStyle={{ borderColor: "#E2E1EC", borderWidth: 1, borderRadius: 12 }}
          textColor="#000"
          selectionColor="#000"
          placeholder='Date of Birth'
        />

        <TextInput
          mode="outlined"
          style={styles.inputSplit}
          outlineStyle={{ borderColor: "#E2E1EC", borderWidth: 1, borderRadius: 12 }}
          textColor="#000"
          selectionColor="#000"
          placeholder='Gender'
        />

        <Button
          mode="contained"
          style={styles.createAccountButton}
          labelStyle={styles.buttonLabel}
          onPress={() => navigation.navigate('LetsKnowYouScreen')}
        >
          Complete
        </Button>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 40,
    fontWeight: 600,
    textAlign: 'left',
    marginBottom: 4,
    lineHeight: 43.2,
    letterSpacing: -1,
    color: '#001B3C',
    marginTop: 303,
  },
  input: {
    marginBottom: 20,
    width: '100%',
    backgroundColor: 'white',
  },
  inputSplit: {
    marginBottom: 20,
    width: '47%',
    backgroundColor: 'white',
  },
  createAccountButton: {
    marginTop: 15,
    paddingVertical: 8,
    backgroundColor: 'green',
    width: '100%',
    borderRadius: 40
  }
});

export default LetsKnowYouScreen;