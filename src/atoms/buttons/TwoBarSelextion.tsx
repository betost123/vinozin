import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../theme/colors';
import {SubtitleSmall} from '../Typography';

interface Props {
  buttonOneTitle: string;
  buttonOneValue: string;
  buttonTwoTitle: string;
  buttonTwoValue: string;
  onPressOne: () => void;
  onPressTwo: () => void;
  selected: string;
}

const TwoBarSelectionButton: React.FC<Props> = ({
  buttonOneTitle,
  buttonOneValue,
  buttonTwoTitle,
  buttonTwoValue,
  onPressOne,
  onPressTwo,
  selected,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressOne}
        style={
          selected === buttonOneValue
            ? styles.selectedButton
            : styles.selectButton
        }>
        <SubtitleSmall styles={{color: 'white'}}>
          {buttonOneTitle}
        </SubtitleSmall>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressTwo}
        style={
          selected === buttonTwoValue
            ? styles.selectedButton
            : styles.selectButton
        }>
        <SubtitleSmall styles={{color: 'white'}}>
          {buttonTwoTitle}
        </SubtitleSmall>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.white,
    borderRadius: 4,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectButton: {
    width: '50%',
    padding: 8,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  selectedButton: {
    width: '50%',
    padding: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.green,
    borderRadius: 4,
  },
});

export default TwoBarSelectionButton;
