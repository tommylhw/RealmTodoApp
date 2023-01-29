import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome, AntDesign, Fontisto, EvilIcons, Ionicons } from '@expo/vector-icons';

import Colors from '../themes/Colors';

const ProjectScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>ProjectScreen</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.BG,
    // alignItems: 'center',
    paddingHorizontal: '10%'
  },
});

export default ProjectScreen;
