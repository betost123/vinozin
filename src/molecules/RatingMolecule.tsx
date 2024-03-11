import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BodyTiny} from '../atoms/Typography';
import {colors} from '../theme/colors';
import {HorizontalSpacer} from '../atoms/Spacers';

interface Props {
  rating: 1 | 2 | 3 | 4 | 5 | 0;
  setRating: any;
}

const RatingMolecule: React.FC<Props> = ({rating, setRating}) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setRating(1)}>
          <Text>{rating && rating > 0 ? '🐣' : '🥚'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRating(2)}>
          <Text>{rating && rating > 1 ? '🐣' : '🥚'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRating(3)}>
          <Text>{rating && rating > 2 ? '🐣' : '🥚'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRating(4)}>
          <Text>{rating && rating > 3 ? '🐣' : '🥚'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRating(5)}>
          <Text>{rating && rating > 4 ? '🐣' : '🥚'}</Text>
        </TouchableOpacity>
      </View>
      {rating && (
        <>
          <HorizontalSpacer spacing={0.5} />
          <BodyTiny styles={{textAlign: 'center', color: colors.white}}>
            {rating.toString()} / 5
          </BodyTiny>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 24,
    justifyContent: 'center',
    padding: 8,
  },
});

export default RatingMolecule;
