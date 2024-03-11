import * as React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Body,
  BodyFat,
  BodySmall,
  BodySmallFat,
  Subtitle,
  SubtitleSmall,
} from '../atoms/Typography';
import {HorizontalSpacer} from '../atoms/Spacers';
import {colors} from '../theme/colors';
import {useAllWines} from '../graphql/hooks/useAllWines';
import TwoBarSelectionButton from '../atoms/buttons/TwoBarSelextion';
import {Wine} from '../utils/models';
import TextField from '../atoms/TextField';
import SelectButton from '../atoms/buttons/SelectButton';
import WineColorBlob from '../atoms/WineColorBlob';
import RatingMolecule from '../molecules/RatingMolecule';
import PrimaryButton from '../atoms/buttons/PrimaryButton';

const TastingProtocolScreen = ({navigation}: any) => {
  const {wines, error, loading} = useAllWines();

  const [recommended, setRecommended] = React.useState<'rec' | 'notrec'>('rec');
  const [wineColor, setWineColor] = React.useState<
    'ruby' | 'dark' | 'light' | 'garnet' | undefined
  >();
  const [aromas, setAromas] = React.useState<Array<string>>([]);
  const [tastes, setTastes] = React.useState<Array<string>>([]);
  const [rating, setRating] = React.useState<1 | 2 | 3 | 4 | 5 | 0>();

  const checkIfAromaIsIncluded = (aroma: string) => {
    return aromas.includes(aroma);
  };
  const checkTasteIsIncluded = (taste: string) => {
    return tastes.includes(taste);
  };

  const onClickAroma = (aroma: string) => {
    const isSelected = checkIfAromaIsIncluded(aroma);

    if (isSelected) {
      setAromas(aromas.filter(x => x !== aroma));
    } else {
      setAromas([...aromas, aroma]);
    }
  };
  const onClickTaste = (taste: string) => {
    const isSelected = checkTasteIsIncluded(taste);

    if (isSelected) {
      setTastes(tastes.filter(x => x !== taste));
    } else {
      setTastes([...tastes, taste]);
    }
  };

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
          {recommended === 'notrec' && (
            <View>
              <TextField title="Vin" placeholder="Vinets namn" />
              <HorizontalSpacer spacing={2} />
            </View>
          )}

          <View>
            <Image
              source={{uri: selectedWine?.image.url}}
              style={styles.image}
            />
          </View>
          <HorizontalSpacer spacing={1} />
          <BodyFat styles={{color: colors.white}}>{selectedWine?.name}</BodyFat>
          <BodyFat styles={{color: colors.white}}>
            {selectedWine?.country}, {selectedWine?.region},{' '}
            {selectedWine?.year}
          </BodyFat>
          <BodyFat styles={{color: colors.white}}>
            {selectedWine?.grape}
          </BodyFat>
          <HorizontalSpacer spacing={0.5} />
          <BodySmall>{selectedWine?.description}</BodySmall>

          <HorizontalSpacer spacing={1} />
          <SubtitleSmall styles={{color: colors.white}}>
            Vinets utseende:
          </SubtitleSmall>
          <HorizontalSpacer spacing={0.5} />
          <View style={styles.wineAppearance}>
            <SelectButton
              text="Medium"
              selected={wineColor === 'ruby'}
              onPress={() => setWineColor('ruby')}
              icon={<WineColorBlob color="#C94251" />}
            />
            <SelectButton
              text="Mörkt"
              selected={wineColor === 'dark'}
              onPress={() => setWineColor('dark')}
              icon={<WineColorBlob color="#941F31" />}
            />
            <SelectButton
              text="Ljust"
              selected={wineColor === 'light'}
              onPress={() => setWineColor('light')}
              icon={<WineColorBlob color="#D42647" />}
            />
            <SelectButton
              text="Garnet"
              selected={wineColor === 'garnet'}
              onPress={() => setWineColor('garnet')}
              icon={<WineColorBlob color="#B72D2C" />}
            />
          </View>

          <HorizontalSpacer spacing={1} />
          <SubtitleSmall styles={{color: colors.white}}>
            Vinets aromer:
          </SubtitleSmall>
          <HorizontalSpacer spacing={0.5} />
          <View style={styles.wineAppearance}>
            <SelectButton
              text="Fruktigt"
              selected={checkIfAromaIsIncluded('fruity')}
              onPress={() => onClickAroma('fruity')}
              icon={<WineColorBlob color="#cfa135" />}
            />
            <SelectButton
              text="Blomster"
              selected={checkIfAromaIsIncluded('floral')}
              onPress={() => onClickAroma('floral')}
              icon={<WineColorBlob color="#d5acad" />}
            />
            <SelectButton
              text="Örter"
              selected={checkIfAromaIsIncluded('herbal')}
              onPress={() => onClickAroma('herbal')}
              icon={<WineColorBlob color="#302829" />}
            />
            <SelectButton
              text="Kryddigt"
              selected={checkIfAromaIsIncluded('spice')}
              onPress={() => onClickAroma('spice')}
              icon={<WineColorBlob color="#e0cf74" />}
            />
          </View>
          <HorizontalSpacer spacing={0.5} />
          <View style={styles.wineAppearance}>
            <SelectButton
              text="Ek"
              selected={checkIfAromaIsIncluded('oak')}
              onPress={() => onClickAroma('oak')}
              icon={<WineColorBlob color="#361109" />}
            />
            <SelectButton
              text="Jäst"
              selected={checkIfAromaIsIncluded('ferment')}
              onPress={() => onClickAroma('ferment')}
              icon={<WineColorBlob color="#C94251" />}
            />
            <SelectButton
              text="Jordig"
              selected={checkIfAromaIsIncluded('earthy')}
              onPress={() => onClickAroma('earthy')}
              icon={<WineColorBlob color="#C94251" />}
            />
            <SelectButton
              text="Nötter"
              selected={checkIfAromaIsIncluded('nutty')}
              onPress={() => onClickAroma('nutty')}
              icon={<WineColorBlob color="#C94251" />}
            />
          </View>

          <HorizontalSpacer spacing={1} />
          <SubtitleSmall styles={{color: colors.white}}>
            Vinets smaker:
          </SubtitleSmall>
          <HorizontalSpacer spacing={0.5} />
          <View style={styles.wineAppearance}>
            <SelectButton
              text="Sött"
              selected={checkTasteIsIncluded('sweet')}
              onPress={() => onClickTaste('sweet')}
              icon={<WineColorBlob color="#361109" />}
            />
            <SelectButton
              text="Torrt"
              selected={checkTasteIsIncluded('dry')}
              onPress={() => onClickTaste('dry')}
              icon={<WineColorBlob color="#361109" />}
            />
            <SelectButton
              text="Hög syra"
              selected={checkTasteIsIncluded('acidhigh')}
              onPress={() => onClickTaste('acidhigh')}
              icon={<WineColorBlob color="#361109" />}
            />
            <SelectButton
              text="Låg syra"
              selected={checkTasteIsIncluded('acidlow')}
              onPress={() => onClickTaste('acidlow')}
              icon={<WineColorBlob color="#361109" />}
            />
          </View>
          <HorizontalSpacer spacing={0.5} />
          <View style={styles.wineAppearance}>
            <SelectButton
              text="Körsbär"
              selected={checkTasteIsIncluded('cherry')}
              onPress={() => onClickTaste('cherry')}
              icon={<WineColorBlob color="#361109" />}
            />
            <SelectButton
              text="Vanilj"
              selected={checkTasteIsIncluded('vanilla')}
              onPress={() => onClickTaste('vanilla')}
              icon={<WineColorBlob color="#361109" />}
            />
            <SelectButton
              text="Citrus"
              selected={checkTasteIsIncluded('citrus')}
              onPress={() => onClickTaste('citrus')}
              icon={<WineColorBlob color="#361109" />}
            />
            <SelectButton
              text="Plommon"
              selected={checkTasteIsIncluded('plum')}
              onPress={() => onClickTaste('plum')}
              icon={<WineColorBlob color="#361109" />}
            />
          </View>
          <HorizontalSpacer spacing={0.5} />
          <View style={styles.wineAppearance}>
            <SelectButton
              text="Gröna äpplen"
              selected={checkTasteIsIncluded('applegreen')}
              onPress={() => onClickTaste('applegreen')}
              icon={<WineColorBlob color="#361109" />}
            />
            <SelectButton
              text="Choklad"
              selected={checkTasteIsIncluded('chocolate')}
              onPress={() => onClickTaste('chocolate')}
              icon={<WineColorBlob color="#361109" />}
            />
            <SelectButton
              text="Blåbär"
              selected={checkTasteIsIncluded('blueberry')}
              onPress={() => onClickTaste('blueberry')}
              icon={<WineColorBlob color="#361109" />}
            />
            <SelectButton
              text="Svarta vinbär"
              selected={checkTasteIsIncluded('blackcurrant')}
              onPress={() => onClickTaste('blackcurrant')}
              icon={<WineColorBlob color="#361109" />}
            />
          </View>

          <HorizontalSpacer spacing={1} />
          <SubtitleSmall styles={{color: colors.white}}>
            Betygsättning
          </SubtitleSmall>
          <HorizontalSpacer spacing={0.5} />
          <RatingMolecule rating={rating} setRating={setRating} />

          <HorizontalSpacer spacing={1} />
          <PrimaryButton
            title="Spara"
            onPress={() => console.log('save and go to next wine')}
          />

          <HorizontalSpacer spacing={2} />
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
  wineAppearance: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
});

export default TastingProtocolScreen;
