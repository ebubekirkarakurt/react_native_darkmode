import { View, StyleSheet } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  iconName: string;
  size: number;
  color: string;
};

const CustomIcon = ({ iconName, size, color }: Props) => {
  return (
    <View style={styles.main}>
      <Icon name={iconName} size={size} color={color} />
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    margin: 10,
  },
});
