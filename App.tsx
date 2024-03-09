import React from 'react';
import BottomTabs from './src/navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {AuthNavigation} from './src/navigation/AuthenticationStack';
import auth from '@react-native-firebase/auth';

function App(): React.JSX.Element {
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    auth().onAuthStateChanged(userState => {
      if (userState) {
        setUser(true);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {user ? <BottomTabs /> : <AuthNavigation />}
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
