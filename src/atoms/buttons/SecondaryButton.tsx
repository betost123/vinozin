import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../theme/colors';
import {ButtonText} from '../Typography';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const SecondaryButton: React.FC<ButtonProps> = ({
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
        <ButtonText styles={styles.titleStyle}>{title}</ButtonText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.6,
  },
  container: {
    backgroundColor: colors.green,
    width: '100%',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    borderStyle: 'solid',
  },
  titleStyle: {
    textAlign: 'center',
    color: colors.white,
  },
});

export default SecondaryButton;
