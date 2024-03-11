import * as React from 'react';
import {Wine} from '../utils/models';
import Card from '../atoms/Card';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Body, BodyFat, BodyTiny} from '../atoms/Typography';

interface Props {
  wine: Wine;
}

const MyWineCard: React.FC<Props> = ({wine}) => {
  return (
    <Card>
      <View style={styles.container}>
        {wine.image && (
          <Image
            source={{uri: wine.image.url}}
            style={{width: 50, height: 40, resizeMode: 'contain'}}
          />
        )}
        <View>
          <BodyFat>{wine.name}</BodyFat>
          <Body>Rating: {wine.rating}</Body>
          {/*<Body>Smaker: {wine.character?.toString()}</Body>*/}
        </View>
        <TouchableOpacity>
          <BodyTiny>Redigera</BodyTiny>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
});

export default MyWineCard;
