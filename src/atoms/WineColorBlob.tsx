import * as React from 'react';
import {View} from 'react-native';

interface Props {
  color: string;
}

const WineColorBlob: React.FC<Props> = ({color}) => {
  return (
    <View
      style={{backgroundColor: color, width: 40, height: 40, borderRadius: 20}}
    />
  );
};

export default WineColorBlob;
