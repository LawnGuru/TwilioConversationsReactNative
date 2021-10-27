/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Client as ConversationsClient } from '@twilio/conversations';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [message, setMessage] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const init = async token => {
    try {
      let client = new ConversationsClient(token);

      await new Promise((resolve, reject) => {
        client.on('stateChanged', (state) => {
            if (state === 'initialized') {
              console.log('twilio conversations initalized')
              resolve();
            } else if (state === 'failed') {
              console.error('twilio conversations failed initializing')
              reject();
            }
        })
      });
      const messages = await client.getMessages()
      console.log('messages', messages)
    } catch (e) {
      console.log('error', e);
    }
  }

  const getToken = async () => {

    setMessage('');
    fetch(`http://localhost:8082/api/token`)
      .then(response => response.json())
      .then(state => {
        if (state && !state.error) {
          console.log(`Got the token ${state.token}`);
          init(state.token)
        } else throw `Could not get service id: ${state.error}`
      })
      .catch(error => console.log(error))

  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="To invoke the twilio conversation press the button bellow!">
            <TouchableOpacity
              onPress={() => getToken()}
              style={{ backgroundColor: 'blue' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>Call twilio init</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 12 }}>{message}</Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
