import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Subtitle} from '../atoms/Typography';
import {HorizontalSpacer} from '../atoms/Spacers';
import {colors} from '../theme/colors';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.contentContainer}>
        <Subtitle styles={styles.subtitle}>Välkommen Betina!</Subtitle>
        <ScrollView>
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
});

export default HomeScreen;
