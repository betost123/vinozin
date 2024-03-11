import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Subtitle} from '../atoms/Typography';
import {HorizontalSpacer} from '../atoms/Spacers';
import {colors} from '../theme/colors';
import WineCard from '../molecules/WineCard';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import TextField from '../atoms/TextField';
import auth from '@react-native-firebase/auth';
import {Wine} from '../utils/models';
import {addWineToUser, getCurrentUser} from '../firebase/user';
import MyWineCard from '../molecules/MyWineCard';

const MyWinesScreen = ({navigation}: any) => {
  const [wine, setWine] = React.useState<undefined | string>();
  const [currentUser, setCurrentUser] = React.useState<any>(undefined);

  const userId = auth().currentUser?.uid;

  const onRegisterNewWine = () => {
    //save the new wine with a random id under my user
    if (userId && wine) {
      const newWine: Wine = {
        id: Math.floor(Math.random() * 100).toString(),
        name: wine,
      };

      addWineToUser(userId, newWine);
      setWine('');
      setTimeout(() => {
        getMe(userId);
      }, 500);
    }
  };

  const getMe = async (id: string) => {
    try {
      const myUser = await getCurrentUser(id);
      setCurrentUser(myUser);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (userId) {
      getMe(userId);
    }
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.contentContainer}>
        <ScrollView>
          <Subtitle styles={styles.subtitle}>Mina viner</Subtitle>
          <HorizontalSpacer spacing={1} />

          {currentUser?.registeredWines?.map((wine: Wine) => (
            <View key={wine.id}>
              <MyWineCard wine={wine} />
              <HorizontalSpacer spacing={1} />
            </View>
          ))}

          <HorizontalSpacer spacing={1} />
          <TextField
            title="Nytt vin"
            placeholder="Vinets namn"
            onChangeText={value => setWine(value)}
            value={wine}
          />
          <HorizontalSpacer spacing={1} />
          <SecondaryButton title="Spara" onPress={onRegisterNewWine} />
          <HorizontalSpacer spacing={3} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    height: '100%',
  },
  contentContainer: {
    paddingHorizontal: 24,
    flex: 1,
    height: '100%',
    flexDirection: 'column',
  },
  subtitle: {
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  bottomActionSection: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default MyWinesScreen;
