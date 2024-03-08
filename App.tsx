import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {HorizontalSpacer} from './src/atoms/Spacers';
import PrimaryButton from './src/atoms/buttons/PrimaryButton';
import SecondaryButton from './src/atoms/buttons/SecondaryButton';

function App(): React.JSX.Element {
  const image = {
    uri: 'https://images.ctfassets.net/6vzzfxkfl0iw/5Da8JsBdDb5bU8DbcJS3x0/f0fb8c23c25d8c2ae08ead79f8ee9b36/vinbild.png',
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.blackBox}>
          <Text style={{color: 'white'}}>Hej</Text>
          <HorizontalSpacer spacing={2} />
          <PrimaryButton
            title="Logga in"
            onPress={() => console.log('log in')}
          />
          <HorizontalSpacer spacing={2} />
          <SecondaryButton
            title="Skapa konto"
            onPress={() => console.log('log in')}
          />
        </View>
      </ImageBackground>
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
