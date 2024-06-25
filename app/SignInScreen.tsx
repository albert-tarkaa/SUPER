import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Link } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

// Convert pixel values to percentages
const IMAGE_WIDTH_PERCENTAGE = (80.29 / width) * 100;
const IMAGE_HEIGHT_PERCENTAGE = (135.05 / height) * 100;

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Sign In</Text>

        <TextInput
          // label="Email Address"
          mode="outlined"
          style={styles.input}
          outlineStyle={{ borderColor: "#E2E1EC", borderWidth: 1, borderRadius: 12}}
          textColor="#000"
          selectionColor="#000"
          placeholder='Email Address'
        />
        <TextInput
          // label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          outlineStyle={{ borderColor: "#E2E1EC", borderWidth: 1, borderRadius: 12 }}
          right={<TextInput.Icon icon="eye" />}
          textColor="#000"
          selectionColor="#000"
          placeholder='Password'
        />

        <Link to="/ForgotPasswordScreen" style={styles.signInText}>Forgot Password?</Link>

        <Button
          mode="contained"
          style={styles.createAccountButton}
          labelStyle={styles.buttonLabel}
          onPress={() => navigation.navigate('LetsKnowYouScreen')}
        >
          Sign In
        </Button>

        <Text style={styles.orText}>OR</Text>

        <Button
          mode="outlined"
          style={styles.googleButton}
          labelStyle={styles.googleButtonLabel}
          onPress={() => navigation.navigate('LetsKnowYouScreen')}
        >
          Continue with Google
        </Button>

        <View style={styles.signInContainer}>
          <Text style={styles.signInTextNormal}>Don't have an account? </Text>
          <Link to="/OnboardingScreen" style={styles.signInText}>Sign Up</Link>
      </View>
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
    justifyContent: 'center',
  },
  logo: {
    width: `${IMAGE_WIDTH_PERCENTAGE}%`, // Dynamic percentage width
    height: `${IMAGE_HEIGHT_PERCENTAGE}%`, // Dynamic percentage height
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 80,
    // marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    textAlign: 'left',
    marginBottom: 20,
    width: '50%',
    lineHeight: 43.2,
    letterSpacing: -1,
    color: '#001B3C'
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
  },
  createAccountButton: {
    marginTop: 25,
    paddingVertical: 10,
    backgroundColor: 'green',
    borderRadius: 40
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical:20,
    color: 'gray',
  },
  googleButton: {
    marginTop: 4,
    paddingVertical: 8,
    borderColor: 'lightgray',
    borderRadius: 40
  },
  googleButtonLabel: {
    fontSize: 16,
    color: 'black',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  },
  signInText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signInTextNormal: {
    color: 'black',
    fontSize: 16,
  },
});

export default SignInScreen;