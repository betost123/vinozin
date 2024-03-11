import * as React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Body,
  BodySmall,
  BodySmallFat,
  Subtitle,
  SubtitleSmall,
} from '../atoms/Typography';
import {HorizontalSpacer} from '../atoms/Spacers';
import {colors} from '../theme/colors';
import WineCard from '../molecules/WineCard';
import {useAllWines} from '../graphql/hooks/useAllWines';
import TwoBarSelectionButton from '../atoms/buttons/TwoBarSelextion';
import {Wine} from '../utils/models';

const TastingProtocolScreen = ({navigation}: any) => {
  const {wines, error, loading} = useAllWines();

  const [recommended, setRecommended] = React.useState<'rec' | 'notrec'>('rec');

  const selectedWine: Wine | undefined = wines?.items[0];

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.contentContainer}>
        <ScrollView>
          <Subtitle styles={styles.subtitle}>Vinprotokoll</Subtitle>
          <HorizontalSpacer spacing={1} />
          <BodySmallFat>
            Utgå från veckans provning eller lägg till ett eget vin du vill
            prova
          </BodySmallFat>
          <HorizontalSpacer spacing={1} />

          <TwoBarSelectionButton
            buttonOneTitle="Veckans provning"
            buttonOneValue="rec"
            buttonTwoTitle="Egen provning"
            buttonTwoValue="notrec"
            selected={recommended}
            onPressOne={() => setRecommended('rec')}
            onPressTwo={() => setRecommended('notrec')}
          />

          <HorizontalSpacer spacing={1} />

          <View>
            <Image
              source={{uri: selectedWine?.image.url}}
              style={styles.image}
            />
          </View>
          <HorizontalSpacer spacing={1} />
          <Body styles={{color: colors.white}}>{selectedWine?.name}</Body>
          <Body styles={{color: colors.white}}>
            {selectedWine?.country}, {selectedWine?.region},{' '}
            {selectedWine?.year}
          </Body>
          <HorizontalSpacer spacing={0.5} />
          <BodySmall>{selectedWine?.description}</BodySmall>

          <HorizontalSpacer spacing={1} />
          <SubtitleSmall styles={{color: colors.white}}>
            Vinets färg:
          </SubtitleSmall>
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
    height: 190,
    resizeMode: 'contain',
  },
});

export default TastingProtocolScreen;
