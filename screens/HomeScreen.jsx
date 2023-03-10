import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome, AntDesign, Fontisto, EvilIcons, Ionicons } from '@expo/vector-icons';
// import Realm from "realm";


import Colors from '../themes/Colors';
import C_InputField from '../components/C_InputField';
import ProjectScreen from './ProjectScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* <Text>HomeScreen</Text> */}

      <TouchableOpacity style={styles.projectBtn} onPress={() => navigation.navigate('Project')}>
        <Text style={styles.projectBtnText}>See All Projects</Text>
      </TouchableOpacity>

      <View style={styles.addGroupContainer}>
        <View style={styles.inputContainer}>
          <C_InputField placeholder='Search Project' />
          <C_InputField placeholder='Search Project' />
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.dataContainer}>

      </View>
      

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

  projectBtn: {
    marginVertical: 30,
    width: '100%',
    backgroundColor: Colors.Primary,
    paddingVertical: 15,
    borderRadius: 10,
  },

  projectBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  addGroupContainer: {
    width: '100%',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  inputContainer: {
    width: '80%',
    borderWidth: 2,
  },

  addBtn: {
    backgroundColor: Colors.Primary,
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dataContainer: {
    borderWidth: 2,
    marginVertical: 30,
    width: '100%',
    height: 1200,
  },

});

export default HomeScreen;
