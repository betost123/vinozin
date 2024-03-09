import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../theme/colors';

interface Props {
  children: any;
}

const Card: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: colors.cardBackground,
  },
});

export default Card;
