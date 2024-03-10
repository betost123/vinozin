import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BodySmallFat, Subtitle, SubtitleSmall} from '../atoms/Typography';
import {HorizontalSpacer} from '../atoms/Spacers';
import {colors} from '../theme/colors';
import WineCard from '../molecules/WineCard';
import {useAllWineBars} from '../graphql/hooks/useAllWineBars';
import {Winebar} from '../utils/models';
import WineBarCard from '../molecules/WineBarCard';

const ExploreScreen = ({navigation}: any) => {
  const {winebars, error, loading} = useAllWineBars();

  const renderWineBar = ({item}: {item: Winebar}) => (
    <WineBarCard
      key={item.id}
      imageSrc={item.logo.url}
      name={item.name}
      url={item.website}
    />
  );

  const HeaderComponent: React.FC = () => (
    <>
      <WineCard short />
      <HorizontalSpacer spacing={1} />
      <Subtitle styles={styles.subtitle}>Vinbarer med provningar</Subtitle>
      <HorizontalSpacer spacing={1} />
      <View style={styles.bottomActionSection}>
        <SubtitleSmall styles={{color: 'white'}}>Visa alla</SubtitleSmall>
        <SubtitleSmall styles={{color: 'white'}}>Visa nära mig</SubtitleSmall>
      </View>
      <HorizontalSpacer spacing={1} />
    </>
  );

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.contentContainer}>
        <Subtitle styles={styles.subtitle}>Utforska</Subtitle>
        <HorizontalSpacer spacing={1} />

        {loading && <ActivityIndicator />}

        <FlatList
          ListHeaderComponent={<HeaderComponent />}
          data={winebars?.items || []}
          renderItem={renderWineBar}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContentContainer}
        />
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
    flexGrow: 1,
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
  flatListContentContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
});

export default ExploreScreen;
