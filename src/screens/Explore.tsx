import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Body,
  BodySmallFat,
  BodyTiny,
  Subtitle,
  SubtitleSmall,
} from '../atoms/Typography';
import {HorizontalSpacer} from '../atoms/Spacers';
import {colors} from '../theme/colors';
import Card from '../atoms/Card';
import HugButton from '../atoms/buttons/HugButton';
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
            <BodySmallFat>Visa alla</BodySmallFat>
            <BodySmallFat>Visa nära mig</BodySmallFat>
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
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ExploreScreen;
