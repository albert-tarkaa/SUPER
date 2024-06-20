import { StyleSheet, ImageBackground } from "react-native";
import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function homeScreen() {

  return (
    <ImageBackground
      source={require('@/assets/images/HomeScreen.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.textContainer}>
        <Text style={[styles.textPrimary, { color: Colors.light.white }]}>
          Small Urban Park Environments & Residents
        </Text>
        <Text style={[styles.textSecondary, { color: Colors.light.white }]}>
          Your ultimate guide to finding green spaces and parks in Leeds
        </Text>
      </View>
      <View style={styles.container}>
        <Button
          mode="contained"
          style={[styles.button, { backgroundColor: Colors.light.transparent, color: Colors.light.white, borderColor: Colors.light.white, borderWidth: 1, accessibilityHint: 'Get Started', rippleColor: Colors.light.textPrimary }]}
          onPress={() => console.log('Get Started pressed')}
        >
          Get Started
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 160,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  textPrimary: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 8,
    lineHeight: 20,
  },
  textSecondary: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 18,
    paddingHorizontal: 36,
    lineHeight: 20,
  },
  button: {
    width: '80%',
  },
});
