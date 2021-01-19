import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';

const {height, width} = Dimensions.get('window');

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Cute To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={'New To Do'} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 15,
    fontSize: 30,
    fontWeight: '200',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: width - 24,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(50,50,50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        ShadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
});

export default App;
