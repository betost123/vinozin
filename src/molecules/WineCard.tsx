import * as React from 'react';
import Card from '../atoms/Card';
import {HorizontalSpacer} from '../atoms/Spacers';
import {Body, BodyTiny, SubtitleSmall} from '../atoms/Typography';
import {Image, StyleSheet, Text, View} from 'react-native';
import HugButton from '../atoms/buttons/HugButton';

interface Props {
  short?: boolean;
}

const WineCard: React.FC<Props> = ({short}) => {
  return (
    <Card>
      <HorizontalSpacer spacing={0.5} />
      <SubtitleSmall>Veckans viner: Pinot gris från Frankrike</SubtitleSmall>
      <HorizontalSpacer spacing={1} />
      <Image
        source={require('../../assets/images/tastingtest.png')}
        style={styles.image}
      />
      {!short && (
        <>
          <HorizontalSpacer spacing={1} />
          <Body>
            Pinot gris är en aromatisk grön druva som trivs bäst i lite svalare
            klimat. Man gör oftast torra vita viner av den, men eftersom den har
            lätt för att angripas av ädelröta är man i franska Alsace förtjust i
            söta pinot grisviner av typen vendange tardive som är sent skördade,
            eller den ännu sötare sélection de grains nobles (utvalda druvor med
            ädelröta).
          </Body>
        </>
      )}
      <HorizontalSpacer spacing={1} />
      <View style={styles.bottomActionSection}>
        <View>
          <BodyTiny>Vecka 12</BodyTiny>
          <BodyTiny>Sommelier: Jonis</BodyTiny>
        </View>
        <Text>
          <HugButton
            title="Läs mer"
            onPress={() => console.log('go to wine tasting')}
          />
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
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

export default WineCard;
