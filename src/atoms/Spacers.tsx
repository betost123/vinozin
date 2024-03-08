import * as React from 'react';
import {View} from 'react-native';

interface Props {
  spacing: number;
}

export const HorizontalSpacer: React.FC<Props> = ({spacing}) => {
  return <View style={{height: 16 * spacing}} />;
};

export const VerticalSpacer: React.FC<Props> = ({spacing}) => {
  return <View style={{width: 16 * spacing}} />;
};
