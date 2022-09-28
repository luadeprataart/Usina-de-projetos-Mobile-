import {StyleSheet, View, Text, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function DashboardDetails({navigation}) {
  return (
    <View style={styles.container}>
      <Text>DashboardDetails screen</Text>
      <Button title='Navigate' onPress={() => navigation.navigate('Signin')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});