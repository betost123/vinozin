import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../theme/colors';
import {Body, BodyTiny, ButtonText} from '../Typography';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const HugButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{width: '100%'}, disabled && styles.disabled]}
      disabled={disabled}>
      <View style={styles.container}>
        <Body styles={styles.titleStyle}>{title}</Body>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.6,
  },
  container: {
    backgroundColor: colors.black,
    width: 'auto',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    color: colors.white,
  },
});

export default HugButton;
