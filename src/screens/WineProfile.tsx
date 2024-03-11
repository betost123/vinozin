import * as React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Body, BodySmallFat, Subtitle, SubtitleSmall} from '../atoms/Typography';
import {HorizontalSpacer} from '../atoms/Spacers';
import {colors} from '../theme/colors';
import auth from '@react-native-firebase/auth';
import {getCurrentUser} from '../firebase/user';

const WineProfileScreen = ({navigation}: any) => {
  const [currentUser, setCurrentUser] = React.useState<any>(undefined);

  const userId = auth().currentUser?.uid;

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
          <Subtitle styles={styles.subtitle}>Vinprofil</Subtitle>
          <HorizontalSpacer spacing={1} />
          <Body styles={{color: colors.white}}>
            Antal viner: {currentUser?.registeredWines?.length}
          </Body>
          <HorizontalSpacer spacing={1} />
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

export default WineProfileScreen;
