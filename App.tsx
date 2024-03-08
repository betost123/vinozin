import React from 'react';
import BottomTabs from './src/navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  blackBox: {
    width: '85%',
    padding: 24,
    borderRadius: 4,
    backgroundColor: '#000000c9',
    alignItems: 'center',
  },
});

export default App;
