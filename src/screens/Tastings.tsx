import * as React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Body, BodySmallFat, Subtitle, SubtitleSmall} from '../atoms/Typography';
import {HorizontalSpacer} from '../atoms/Spacers';
import {colors} from '../theme/colors';
import WineCard from '../molecules/WineCard';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import PrimaryButton from '../atoms/buttons/PrimaryButton';

const TastingsScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.contentContainer}>
        <ScrollView>
          <Subtitle styles={styles.subtitle}>Provningar</Subtitle>
          <HorizontalSpacer spacing={1} />

          <Body styles={{color: 'white'}}>
            Varje vecka presenterar vi en vinprovning som är komponerad av en av
            våra sommelier som vi samarbetar med. Målet är att varje provning
            ska utforska nya kunskaper inom vin.
          </Body>
          <HorizontalSpacer spacing={1} />
          <Body styles={{color: 'white'}}>
            Till varje provning finns även ett vinprovningsprotokoll, länkar
            till vinet, och till sist även en betygsättningsfunktion som hjälper
            till att skapa din egen vinprofil.
          </Body>
          <HorizontalSpacer spacing={1} />
          <WineCard />

          <HorizontalSpacer spacing={1} />

          <Subtitle styles={styles.subtitle}>Tidigare vinprovningar</Subtitle>

          <HorizontalSpacer spacing={1} />
          <SecondaryButton
            title="Vinprotokoll"
            onPress={() => console.log('open tasting protocol')}
          />
          <HorizontalSpacer spacing={1} />
          <PrimaryButton
            title="Tips för vinprovning"
            onPress={() => console.log('expolre recommendations')}
          />
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

export default TastingsScreen;
