import React from 'react';

import {
  View, Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Background } from '../Background';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string,
  isFilled?: boolean
}

export function MiddleButton({ title, isFilled, ...rest }: Props) {
  return (
    <RectButton
      style={[styles.container, isFilled ? styles.containerline : {}]}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}