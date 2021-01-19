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
  ScrollView,
} from 'react-native';

import ToDo from './src/ToDo';

const {height, width} = Dimensions.get('window');

class App extends Component {
  state = {
    newToDo: '',
  };
  render() {
    const {newToDo} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Cute To Do</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={'New To Do'}
            value={newToDo}
            onChangeText={this._contorolNewToDo}
            placeholderTextColor={'#999999'}
            returnKeyType={'done'}
            autoCorrect={false}
          />
          <ScrollView>
            <ToDo />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  _contorolNewToDo = (text) => {
    this.setState({
      newToDo: text,
    });
  };
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
  input: {
    padding: 20,
    borderBottomColor: '#BBBBBB',
    borderBottomWidth: 1,
    fontSize: 20,
  },
});

export default App;
