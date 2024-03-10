import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BodyFat, BodyTiny} from '../atoms/Typography';

interface Props {
  name: string;
  imageSrc: string;
  url: string;
}

const WineBarCard: React.FC<Props> = ({name, imageSrc, url}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: imageSrc}} style={styles.image} />
      <BodyFat styles={{color: 'white'}}>{name}</BodyFat>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    margin: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'contain',
  },
});

export default WineBarCard;
