import * as React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BodySmallFat, Subtitle, SubtitleSmall} from '../atoms/Typography';
import {HorizontalSpacer} from '../atoms/Spacers';
import {colors} from '../theme/colors';
import WineCard from '../molecules/WineCard';

const ExploreScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.contentContainer}>
        <ScrollView>
          <Subtitle styles={styles.subtitle}>Utforska</Subtitle>
          <HorizontalSpacer spacing={1} />
          <WineCard short />

          <HorizontalSpacer spacing={1} />

          <Subtitle styles={styles.subtitle}>Vinbarer med provningar</Subtitle>

          <HorizontalSpacer spacing={1} />
          <View style={styles.bottomActionSection}>
            <SubtitleSmall styles={{color: 'white'}}>Visa alla</SubtitleSmall>
            <SubtitleSmall styles={{color: 'white'}}>
              Visa nära mig
            </SubtitleSmall>
          </View>
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

export default ExploreScreen;
