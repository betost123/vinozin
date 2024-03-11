import * as React from 'react';
import Card from '../atoms/Card';
import {Body, Subtitle, SubtitleSmall} from '../atoms/Typography';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress: () => void;
}

const InfoCard: React.FC<Props> = ({icon, title, subtitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.content}>
        <View>
          {icon}
          <>
            <SubtitleSmall>{title}</SubtitleSmall>
            {subtitle && <Body>{subtitle}</Body>}
          </>
        </View>
        <Text>🫛</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  textAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default InfoCard;
