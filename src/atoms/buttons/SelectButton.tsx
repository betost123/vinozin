import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Body} from '../Typography';
import {colors} from '../../theme/colors';

interface Props {
  text: string;
  icon: React.ReactNode;
  selected: boolean;
  onPress: () => void;
}

const SelectButton: React.FC<Props> = ({text, icon, selected, onPress}) => {
  const myStyles = styles(selected);

  return (
    <TouchableOpacity style={myStyles.container} onPress={onPress}>
      {icon}
      <Body styles={{color: selected ? colors.black : colors.white}}>
        {text}
      </Body>
    </TouchableOpacity>
  );
};

const styles = (selected: boolean) =>
  StyleSheet.create({
    container: {
      width: 72,
      padding: 8,
      borderRadius: 4,
      backgroundColor: selected ? colors.cardBackground : colors.black,
      gap: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.white,
    },
  });

export default SelectButton;
